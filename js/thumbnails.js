import {showFullPhoto} from './full-size-photo.js';

const photosList = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPhotoElement = (obj) => {
  const {url, likes, comments} = obj;
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.addEventListener ('click', () => {
    showFullPhoto (obj);
  });
  return photoElement;
};

export const renderPhotos = (array) => {
  photosList.querySelectorAll('.picture').forEach((element) => element.remove());
  const photoListFragment = document.createDocumentFragment();
  array.forEach((photo) => {
    const element = createPhotoElement (photo);
    photoListFragment.appendChild(element);
  });
  photosList.appendChild(photoListFragment);
};
