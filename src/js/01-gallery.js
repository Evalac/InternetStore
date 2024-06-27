// Add imports above this line
import simpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
console.log(simpleLightbox);

const galleryEl = document.querySelector('.gallery');
const markup = onCreateMarkup(galleryItems);
galleryEl.addEventListener('click', onLinkClickEl);

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

function onLinkClickEl(evt) {
  evt.preventDefault();
  const isLinkImg = evt.target.dataset.source;
  const isImg = evt.target.nodeName;
  if (isImg !== 'IMG') {
    return;
  }
  console.log('img');
}
