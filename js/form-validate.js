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

const isHashtagValid = (value) => {
  const arrayOfHashtags = value.split(' ').filter((it) => it.length > 0);
  if (arrayOfHashtags.length > 5) {
    return false;
  }
  arrayOfHashtags.forEach ((it, index) => {
    it.toLowerCase();
    if (!/^#[a-zа-яё0-9]{1,19}$/.test(it)) {
      return false;
    }
    if (index !== arrayOfHashtags.lastIndexOf(it)) {
      return false;
    }
  });
};

pristine.addValidator(
  hashtags,
  isHashtagValid,
  'Неверный формат ХэшТэга'
);

form.addEventListener('submit', () => {
  pristine.validate();
});
