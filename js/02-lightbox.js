import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = galleryItems;
console.log(gallery);
const ulGallery = document.querySelector('ul.gallery');
console.log(ulGallery);

const markup = gallery.map(({preview, original, description}) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}).join('');

ulGallery.insertAdjacentHTML('beforeend', markup);

const lighbox = new SimpleLightbox('.gallery a', { 'captionsData': 'alt', 'captionDelay': '250' });
lighbox.on('show.simplelightbox');
