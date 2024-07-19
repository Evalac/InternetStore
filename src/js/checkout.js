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
console.log(refBasketEl.increase);
console.log(refBasketEl.decrease);

const basket = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

createMarkup(basket, listEl, basket);
// createMarkupForBasket(basket, listEl);

listEl.addEventListener('click', onclick);

function onclick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const id = evt.target.closest('.cart--Iteam').dataset.id;
    const product = findProduct(Number(id), instruments);
    console.log(product);

    onOpenModal(product);
  }
}
// додати якийсь хрестик щоб видалити з обраного
