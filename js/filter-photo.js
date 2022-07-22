import {createSlider, chrome, sepia, marvin, phobos, heat} from './filter-photo-options.js';

const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementValue = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects');
const effects = document.querySelectorAll('.effects__radio');
const picture = document.querySelector('.img-upload__preview img');

createSlider();
sliderElement.classList.add('hidden');

const getfilterOptions = (value) => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions(value);
};

const createfilter = (value) => {
  for (const effect of effects) {
    value = effect.value;
    if (document.querySelector(`#effect-${value}`).checked) {
      picture.style.removeProperty('filter');
      picture.removeAttribute('class');
      picture.classList.add(`effects__preview--${value}`);
      switch (value) {
        case 'none':
          picture.style.removeProperty('filter');
          sliderElement.classList.add('hidden');
          break;
        case 'chrome':
          getfilterOptions(chrome);
          sliderElement.noUiSlider.on('update', () => {
            picture.style.filter = `grayscale(${sliderElementValue.value})`;
            sliderElementValue.value = sliderElement.noUiSlider.get();
          });
          break;
        case 'sepia':
          getfilterOptions(sepia);
          sliderElement.noUiSlider.on('update', () => {
            picture.style.filter = `sepia(${sliderElementValue.value})`;
            sliderElementValue.value = sliderElement.noUiSlider.get();
          });
          break;
        case 'marvin':
          getfilterOptions(marvin);
          sliderElement.noUiSlider.on('update', () => {
            picture.style.filter = `invert(${sliderElementValue.value}%)`;
            sliderElementValue.value = sliderElement.noUiSlider.get();
          });
          break;
        case 'phobos':
          getfilterOptions(phobos);
          sliderElement.noUiSlider.on('update', () => {
            picture.style.filter = `blur(${sliderElementValue.value}px)`;
            sliderElementValue.value = sliderElement.noUiSlider.get();
          });
          break;
        case 'heat':
          getfilterOptions(heat);
          sliderElement.noUiSlider.on('update', () => {
            picture.style.filter = `brightness(${sliderElementValue.value})`;
            sliderElementValue.value = sliderElement.noUiSlider.get();
          });
          break;
      }
    }
  }
};

effectsList.addEventListener('change', () => {
  createfilter();
});
