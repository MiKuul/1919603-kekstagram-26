import {createSlider, chrome, sepia, marvin, phobos, heat} from './filter-photo-options.js';

const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementValue = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects');
const photo = document.querySelector('.img-upload__preview img');

createSlider();
sliderElement.classList.add('hidden');

const getFilter = (filterName, value) => {
  switch(filterName) {
    case 'none': return '';
    case 'chrome': return `grayscale(${value})`;
    case 'sepia': return `sepia(${value})`;
    case 'marvin': return `invert(${value}%)`;
    case 'phobos': return `blur(${value}px)`;
    case 'heat': return `brightness(${value})`;
  }
};

const getFilterOptions = (value) => {
  switch(value) {
    case 'chrome': return chrome;
    case 'sepia': return sepia;
    case 'marvin': return marvin;
    case 'phobos': return phobos;
    case 'heat': return heat;
  }
};

const getCurrentFilterValue = () => {
  const effectRadio = document.querySelector('.effects__radio:checked');
  return effectRadio.value;
};

const setNewOptions = () => {
  const effectValue = getCurrentFilterValue();
  photo.className = `effects__preview--${effectValue}`;
  if (effectValue === 'none') {
    sliderElement.classList.add('hidden');
    photo.style.removeProperty('filter');
  } else {
    sliderElement.classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions(getFilterOptions(effectValue));
  }
};

sliderElement.noUiSlider.on('update', () => {
  photo.style.filter = getFilter(getCurrentFilterValue(), sliderElement.noUiSlider.get());
  sliderElementValue.value = sliderElement.noUiSlider.get();
});

effectsList.addEventListener('change', () => {
  setNewOptions();
});
