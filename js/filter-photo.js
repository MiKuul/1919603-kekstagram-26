const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementValue = document.querySelector('.effect-level__value');

const effects = document.querySelectorAll('.effects__radio');
const picture = document.querySelector('.img-upload__preview img');


noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.classList.add('hidden');

for (const effect of effects) {
  effect.addEventListener('change', () => {
    if (document.querySelector('#effect-none').checked) {
      picture.classList.add('effects__preview--none');
      picture.style.removeProperty('filter');
      sliderElement.classList.add('hidden');
    } else {
      picture.classList.remove('effects__preview--none');
      sliderElement.classList.remove('hidden');
    }
    if (document.querySelector('#effect-chrome').checked) {
      picture.classList.add('effects__preview--chrome');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      sliderElement.noUiSlider.on('update', () => {
        picture.style.filter = `grayscale(${sliderElementValue.value})`;
        sliderElementValue.value = sliderElement.noUiSlider.get();
      });
    } else {
      picture.classList.remove('effects__preview--chrome');
      picture.style.removeProperty('filter');
    }
    if (document.querySelector('#effect-sepia').checked) {
      picture.classList.add('effects__preview--sepia');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      sliderElement.noUiSlider.on('update', () => {
        picture.style.filter = `sepia(${sliderElementValue.value})`;
        sliderElementValue.value = sliderElement.noUiSlider.get();
      });
    } else {
      picture.classList.remove('effects__preview--sepia');
      picture.style.removeProperty('filter');
    }
    if (document.querySelector('#effect-marvin').checked) {
      picture.classList.add('effects__preview--marvin');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
      sliderElement.noUiSlider.on('update', () => {
        picture.style.filter = `invert(${sliderElementValue.value}%)`;
        sliderElementValue.value = sliderElement.noUiSlider.get();
      });
    } else {
      picture.classList.remove('effects__preview--marvin');
      picture.style.removeProperty('filter');
    }
    if (document.querySelector('#effect-phobos').checked) {
      picture.classList.add('effects__preview--phobos');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      sliderElement.noUiSlider.on('update', () => {
        picture.style.filter = `blur(${sliderElementValue.value}px)`;
        sliderElementValue.value = sliderElement.noUiSlider.get();
      });
    } else {
      picture.classList.remove('effects__preview--phobos');
      picture.style.removeProperty('filter');
    }
    if (document.querySelector('#effect-heat').checked) {
      picture.classList.add('effects__preview--heat');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      sliderElement.noUiSlider.on('update', () => {
        picture.style.filter = `brightness(${sliderElementValue.value})`;
        sliderElementValue.value = sliderElement.noUiSlider.get();
      });
    } else {
      picture.classList.remove('effects__preview--heat');
      picture.style.removeProperty('filter');
    }
  });
}
