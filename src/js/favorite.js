import { common } from './common';
const listEl = document.querySelector('.js-favorite');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE));
console.log(favorite);

const markup = onCreateMarkup(favorite);
listEl.innerHTML = markup;

function onCreateMarkup(favorite) {
  return favorite
    .map(({ id, img, name, description, price }) => {
      return `<li class="cart--Iteam" data-id="${id}">
        <img src="${img}" alt="${name}" width="300px" />
        <h1 class="item--Name">${name}</h1>
        <p>${price}</p>
        <p>${description}</p>
        <div>
        <button class="js-favorite">Add to favorite </button>
        <button class="js-basket">Add to basket</button>
        </div>
      </li>`;
    })
    .join('');
}
