import { common } from './common';
import { createMarkup } from './helpers/createMarkup';

const listEl = document.querySelector('.js-favorite');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

const markup = createMarkup(favorite);
listEl.innerHTML = markup;

function onclick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const id = evt.target.closest('.cart--Iteam').dataset.id; // візьми з нашого елемента по якому ми клікнули першого батька з классом '.cart--Iteam' і з його властивусті дай дата атребут
    const product = findProduct(Number(id));

    onOpenModal(product);
  }
}

// додати якийсь хрестик щоб видалити з обраного
