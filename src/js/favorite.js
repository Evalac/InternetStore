import { common } from './common';
import { createMarkup } from './helpers/createMarkup';

const listEl = document.querySelector('.js-favorite');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

const markup = createMarkup(favorite);
listEl.innerHTML = markup;

// додати якийсь хрестик щоб видалити з обраного
