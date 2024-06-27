// Add imports above this line
import simpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
console.log(simpleLightbox);

const galleryEl = document.querySelector('.gallery');
const markup = onCreateMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', markup);

function onCreateMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="large-image.jpg">
                    <img
                        class=" "
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
            
                    />
                </a>
            </li>`;
    })
    .join('');
}
