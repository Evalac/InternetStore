function createMarkup(instruments) {
  return instruments
    .map(({ id, img, name, price, description }) => {
      return `<li class="cart--Iteam" data-id="${id}">
        <img src="${img}" alt="${name}" width="300px" />
        <h1 class="item--Name">${name}</h1>
        <p ><a class="js-info" href="#">More information</a></p>
        <div>
        <button class="js-favorite">Add to favorite </button>
        <button class="js-basket">Add to basket</button>
        </div>
      </li>`;
    })
    .join('');
}

export { createMarkup };
