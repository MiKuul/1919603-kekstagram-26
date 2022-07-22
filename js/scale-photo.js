const minScaleButton = document.querySelector('.scale__control--smaller');
const maxScaleButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const uploadImage = document.querySelector('.img-upload__preview');

scaleValue.value = 100;

// const getScaleValue = (value) => {
//   scaleValue.value = value;
// };

const setScaleValue = (value) => {
  let v = Math.max(value, 25);
  v = Math.min(100, v);
  scaleValue.value = v;
  uploadImage.style.transform = `scale(${parseFloat(scaleValue.value/100)})`;
};

minScaleButton.addEventListener('click', () => {
  // const current = scaleValue.value;
  setScaleValue(scaleValue.value - 25);
});

maxScaleButton.addEventListener('click', () => {
  // const current = scaleValue.value;
  setScaleValue(scaleValue.value + 25);
});
