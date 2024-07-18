//Завдання
// Доробити корзину щоб була кількість і додавалсь в коризину кількість а не дубювались обекти
// Офрмити нормально стилями
// зpзробити щоб працював gitPages
// Дороботи checkout  це корзина

import { instruments } from './helpers/instruments';
import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { onOpenModal } from './helpers/openModal';
import { findProduct } from './helpers/findProduct';

const searchEl = document.querySelector('.js-search');
const cartEl = document.querySelector('.js-list');
cartEl.addEventListener('click', onclick);

const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? []; // оператор нульового поеднання для того щоб після перезавантаження сторінки не пропадали данні з локального сховища при додаванні нового обекту
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

createMarkup(instruments, cartEl);

function onclick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const id = evt.target.closest('.cart--Iteam').dataset.id;
    const product = findProduct(Number(id), instruments);

    onOpenModal(product);
  }
  if (evt.target.classList.contains('js-basket')) {
    const id = evt.target.closest('.cart--Iteam').dataset.id;

    const product = findProduct(Number(id), instruments);

    const inStorage = basketArr.find(({ id }) => id === product.id);
    if (!inStorage) {
      product.qty = 1;
      basketArr.push(product);
      localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
    } else {
      inStorage.qty += 1;
      localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
    }
  }
  if (evt.target.classList.contains('js-favorite')) {
    const id = evt.target.closest('.cart--Iteam').dataset.id;
    const product = findProduct(Number(id), instruments);

    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
    }

    favoriteArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
}
