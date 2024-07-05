import { common } from './common';
import { instruments } from './helpers/instruments';
import { createMarkup } from './helpers/createMarkup';
import { findProduct } from './helpers/findProduct';
import { onOpenModal } from './helpers/openModal';

const listEl = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarkup(favorite, listEl);

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
