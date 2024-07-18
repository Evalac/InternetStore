import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { onCloseModal } from './closeModal';

function onOpenModal(product) {
  const instance = basicLightbox.create(
    `  <div class="modal">
      <img src="${product.img}" alt="${product.name}" width="150px" />
      <h2>${product.name}</h2>
      <h3>${product.price}$</h3>
      <p>${product.description}</p>
     
`,
    {
      handler: null,
      onShow(instance) {
        this.handler = onCloseModal.bind(instance);
        document.addEventListener('keydown', this.handler);
      },

      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    }
  );
  instance.show();
}

export { onOpenModal };
