import {renderPhotos} from './thumbnails.js';
import {debounce} from './util.js';

const PHOTOS_COUNT = 10;

const filtersElement = document.querySelector('.img-filters');
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

let currentFilter = '';
let photos = [];

export const turnFilterOn = (loadedPhotos) => {
  filtersElement.classList.remove('img-filters--inactive');
  photos = [...loadedPhotos];
  currentFilter = Filter.DEFAULT;
};

const randomSort = () => Math.random() - 0.5;

const discussedSort = (photoA, photoB) =>
  photoB.comments.length - photoA.comments.length;


export const filterPhotos = () => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return [...photos].sort(randomSort).slice(0, PHOTOS_COUNT);
    case Filter.DISCUSSED:
      return [...photos].sort(discussedSort);
    default:
      return [...photos];
  }
};


const debouncedRenderPictures = debounce(renderPhotos);

filtersElement.addEventListener('click', (evt) => {
  if (!evt.target.classList.contains('img-filters__button')) {
    return;
  }

  const clickedButton = evt.target;
  if (clickedButton.id === currentFilter) {
    return;
  }

  filtersElement
    .querySelector('.img-filters__button--active')
    .classList.remove('img-filters__button--active');

  clickedButton.classList.add('img-filters__button--active');
  currentFilter = clickedButton.id;
  debouncedRenderPictures(filterPhotos());
});
