const minScaleButton = document.querySelector('.scale__control--smaller');
const maxScaleButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const uploadImage = document.querySelector('.img-upload__preview');

scaleValue.value = 100;

minScaleButton.addEventListener('click', () => {
  if (scaleValue.value > 25) {
    scaleValue.value = scaleValue.value - 25;
    uploadImage.style.transform = `scale(${parseFloat(scaleValue.value/100)})`;
  }
});

maxScaleButton.addEventListener('click', () => {
  if (scaleValue.value < 100) {
    scaleValue.value = parseFloat(scaleValue.value) + 25;
    uploadImage.style.transform = `scale(${parseFloat(scaleValue.value/100)})`;
  }
});

// КАК ДОБАВИТЬ ЗНАК ПРОЦЕНТА???
