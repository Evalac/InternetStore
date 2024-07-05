import { common } from './common';
import { createMarkup } from './helpers/createMarkup';

const listEl = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarkup(favorite, listEl);

// додати якийсь хрестик щоб видалити з обраного
