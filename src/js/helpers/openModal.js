import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function onOpenModal(product) {
  const instance = basicLightbox.create(
    `  <div class="modal">
      <img src="${product.img}" alt="${product.name}" width="150px" />
      <h2>${product.name}</h2>
      <h3>${product.price}$</h3>
      <p>${product.description}</p>
      <div><button class="js-favorite">Add to Favorite</button><button class="js-basket">Add to Basket</button></div>
    </div>
`
  );
  instance.show();
}

export { onOpenModal };
