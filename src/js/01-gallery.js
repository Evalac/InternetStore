// Add imports above this line
import simpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
console.log(simpleLightbox);

const galleryEl = document.querySelector('.gallery');
const markup = onCreateMarkup(galleryItems);

function onCreateMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    console.log(preview);
  });
}
