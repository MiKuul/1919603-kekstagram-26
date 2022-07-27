import {showFullPhoto} from './full-size-photo.js';

const photosList = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictureElement = (obj) => {
  const {url, likes, comments} = obj;
  const pictureElement = photoTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.addEventListener ('click', () => {
    showFullPhoto (obj);
  });
  return pictureElement;
};

export const renderPhotos = (array) => {
  photosList.querySelectorAll('.picture').forEach((element) => element.remove());
  const pictureListFragment = document.createDocumentFragment();
  array.forEach((photo) => {
    const element = createPictureElement (photo);
    pictureListFragment.appendChild(element);
  });
  photosList.appendChild(pictureListFragment);
};
