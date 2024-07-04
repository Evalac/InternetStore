//Завдання
// Доробити корзину щоб була кількість і додавалсь в коризину кількість а не дубювались обекти
// Офрмити нормально стилями
// зpзробити щоб працював gitPages

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { instruments } from './helpers/instruments';
import { common } from './common';
import { createMarkup } from './helpers/createMarkup';

// {
//   // setItem - add value
//   // getItem - get value
//   // removeItem - delete item
//   // clear - delete all
//   localStorage.setItem('TEST_KEY', 'Hello world');
//   localStorage.setItem('Array', JSON.stringify([1, 2, 3, 4, 5])); // тільки таким чином можна додати масив в локальне сховище щоб його потім можна було витягнути  JSON.stringify()
//   localStorage.setItem('Object', JSON.stringify({ name: 'mango' }));
//   // localStorage.removeItem('TEST_KEY');

//   console.log(localStorage.getItem('TEST_KEY'));
//   console.log(JSON.parse(localStorage.getItem('Array')));
//   console.log(JSON.parse(localStorage.getItem('Object')));

//   const localBtn = document.querySelector('.js-local');
//   const sessionBtn = document.querySelector('.js-session');
//   localBtn.addEventListener('click', () => {
//     localStorage.setItem('local', 'Storage');
//   });

//   sessionBtn.addEventListener('click', () => {
//     sessionStorage.setItem('session', 'Storage');
//   });
// }

const search = document.querySelector('.js-search');
const markupInstrument = createMarkup(instruments);
const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

const cartEl = document.querySelector('.js-list');
cartEl.innerHTML = markupInstrument;

cartEl.addEventListener('click', onclick);

function onclick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const id = evt.target.closest('.cart--Iteam').dataset.id; // візьми з нашого елемента по якому ми клікнули першого батька з классом '.cart--Iteam' і з його властивусті дай дата атребут
    const product = findProduct(Number(id));

    onOpenModal(product);
  }
  if (evt.target.classList.contains('js-basket')) {
    const id = evt.target.closest('.cart--Iteam').dataset.id;
    const product = findProduct(Number(id));

    const inStorage = basketArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
    }

    basketArr.push(product);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
  }
  if (evt.target.classList.contains('js-favorite')) {
    const id = evt.target.closest('.cart--Iteam').dataset.id;
    const product = findProduct(Number(id));

    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
    }

    favoriteArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
}

function findProduct(productId) {
  return instruments.find(({ id }) => id === productId);
}

function onOpenModal(product) {
  const instance = basicLightbox.create(
    `  <div class="modal">
      <img src="${product.img}" alt="${product.name}" width="150px" />
      <h2>${product.name}</h2>
      <h3>${product.price}$</h3>
      <p>${product.description}</p>
      <div><button class="js-favorite">Add to Favorite</button><button class="js-basket">Add to Basket</button></div>
    </div>
`
  );
  instance.show();
  console.log('повинна відкритись модалка');
}
