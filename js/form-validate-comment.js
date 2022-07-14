const form = document.querySelector('.img-upload__form');
const comment = form.querySelector('#description');
const hashtags = form.querySelector('#hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-form__error'
});

function validateComment (value) {
  return value.length <= 140;
}

pristine.addValidator(
  comment,
  validateComment,
  'Размер комментария - до 140 символов'
);

const isHashtagValid = (value) => /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/.test(value);

pristine.addValidator(
  hashtags,
  isHashtagValid,
  'Неверный формат ХэшТэга'
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
