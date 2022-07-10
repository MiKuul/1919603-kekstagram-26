import {generatePhoto} from './data.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const createPicture = generatePhoto (25);

const pictureListFragment = document.createDocumentFragment();

createPicture.forEach(({url, likes, comments}) =>  {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureListFragment.appendChild(pictureElement);
});

pictureList.appendChild(pictureListFragment);
