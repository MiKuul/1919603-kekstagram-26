const sliderElement = document.querySelector('.effect-level__slider');

export const createSlider = () => {noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: (value) => {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: (value) => parseFloat(value),
  },
});
};

export const chrome = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
};

export const sepia = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
};

export const marvin = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
};

export const phobos = {
  range: {
    min: 0,
    max: 3,
  },
  start: 3,
  step: 0.1,
};

export const heat = {
  range: {
    min: 1,
    max: 3,
  },
  start: 3,
  step: 0.1,
};
