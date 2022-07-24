const minScaleButton = document.querySelector('.scale__control--smaller');
const maxScaleButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const uploadImage = document.querySelector('.img-upload__preview img');

const getScaleValue = () => parseInt(scaleValue.value, 10);

const setScaleValue = (value) => {
  let v = Math.max(value, 25);
  v = Math.min(100, v);
  scaleValue.value = `${v}%`;
  uploadImage.style.transform = `scale(${parseFloat(v/100)})`;
};

export const reset = () => {
  setScaleValue(100);
};

reset();

minScaleButton.addEventListener('click', () => {
  const current = getScaleValue();
  setScaleValue(current - 25);
});

maxScaleButton.addEventListener('click', () => {
  const current = getScaleValue();
  setScaleValue(current + 25);
});
