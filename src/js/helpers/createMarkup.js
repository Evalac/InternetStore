function createMarkup(instruments, cartEl) {
  let markup;
  if (instruments.length) {
    markup = instruments
      .map(
        ({ id, img, name, price, description }) =>
          `<li class="cart--Iteam" data-id="${id}">
        <img src="${img}" alt="${name}" width="300px" />
        <h1 class="item--Name">${name}</h1>
        <p ><a class="js-info" href="#">More information</a></p>
        <div>
        <button class="js-favorite">Add to favorite </button>
        <button class="js-basket">Add to basket</button>
        </div>
      </li>`
      )
      .join('');
  } else {
    markup = ` <li>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-_lSWMDc3yPDlT6t8I4A0XzpY-g26Ta9Gw&s"
        alt="empty"
        width="300px"
      />
    </li> `;
  }

  cartEl.innerHTML = markup;
}

export { createMarkup };
