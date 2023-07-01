// Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(SimpleLightbox);

// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
  const galleryItem = `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
  `;
  return galleryItem;
}

const galleryItemsMarkup = galleryItems.map(createGalleryItem).join('');
gallery.innerHTML = galleryItemsMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionsPosition: 'bottom',
  animationSpeed: 250,
});


