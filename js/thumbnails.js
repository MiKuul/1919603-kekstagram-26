import {showFullPhoto} from './full-size-photo.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureListFragment = document.createDocumentFragment();

const createPictureElement = (obj) => {
  const {url, likes, comments} = obj;
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureListFragment.appendChild(pictureElement);
  pictureElement.addEventListener ('click', () => {
    showFullPhoto (obj);
  });
  return pictureElement;
};

export const renderPhotos = (array) => {

  array.forEach(({url, likes, comments}) => {
    createPictureElement ({url, likes, comments});
    pictureList.appendChild(pictureListFragment);
  });
};
