const form = document.querySelector('.img-upload__form');
const comment = form.querySelector('#description');
const hashtags = form.querySelector('#hashtags');
const submitButton = document.querySelector('.img-upload__submit');

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
  return arrayOfHashtags.every((it, index) => {
    it.toLowerCase();
    if (!/^#[a-zа-яё0-9]{1,19}$/.test(it)) {
      return false;
    }
    if (index !== arrayOfHashtags.lastIndexOf(it)) {
      return false;
    }
    return true;
  });
};

pristine.addValidator(
  hashtags,
  isHashtagValid,
  'Неверный формат ХэшТэга'
);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

export const setOnFormSubmit = (cb) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      await cb(new FormData(form));
      unblockSubmitButton();
    }
  });
};
