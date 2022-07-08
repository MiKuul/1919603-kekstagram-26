import {generatePhoto} from './data.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const createPicture = generatePhoto ();

const pictureListFragment = document.createDocumentFragment();

createPicture.forEach(({url, likes, comments}) =>  {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img[src=""]').textContent = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureListFragment.appendChild(pictureElement);
});

pictureList.appendChild(pictureListFragment);
