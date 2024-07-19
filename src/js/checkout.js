import { common } from './common';
import { instruments } from './helpers/instruments';
import { createMarkup } from './helpers/createMarkup';
import { findProduct } from './helpers/findProduct';
import { onOpenModal } from './helpers/openModal';
import { createMarkupForBasket } from './helpers/createMarkup';

const listEl = document.querySelector('.js-list');
const refBasketEl = {
  total: document.querySelector('.total-js'),
  quantity: document.querySelector('.quantity-js'),
  increase: document.querySelector('#increase'),
  decrease: document.querySelector('#decrease'),
};

const basket = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

function onclick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const id = evt.target.closest('.cart--Iteam').dataset.id;
    const product = findProduct(Number(id), instruments);

    onOpenModal(product);
    return;
  }

  if (evt.target.id === 'increase') {
    console.log(`+`);

    basket.map(basket => {
      basket.qty += 1;
    });
  } else if (evt.target.id === 'decrease') {
    basket.map(basket => {
      basket.qty -= 1;
    });
  }
}

console.log(basket);
createMarkup(basket, listEl, basket);

listEl.addEventListener('click', onclick);

// додати якийсь хрестик щоб видалити з обраного
