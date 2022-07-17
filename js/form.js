const modalOpen = document.querySelector('#upload-file');
const modalCloseButton = document.querySelector('#upload-cancel');
const modalWindow = document.querySelector('body');
const imageUploadWindow = document.querySelector('.img-upload__overlay');

const onKeyDownListener = (evt) => {
  if (evt.key === 'Escape') {
    if (document.activeElement === document.querySelector('#description') || document.activeElement === document.querySelector('#hashtags')) {
      return false;
    } else {
      evt.preventDefault();
      closeUploadWindow (); // eslint-disable-line
      modalOpen.value = '';
    }
  }
};

const openUploadWindow = function () {
  imageUploadWindow.classList.remove('hidden');
  modalWindow.classList.add('modal-open');
  document.addEventListener('keydown', onKeyDownListener);
  modalCloseButton.addEventListener('click', () => {
    closeUploadWindow (); // eslint-disable-line
  });
};

const onChangeListener = modalOpen.addEventListener('change', () => {
  openUploadWindow ();
});

const closeUploadWindow = function () {
  imageUploadWindow.classList.add('hidden');
  modalWindow.classList.remove('modal-open');
  modalOpen.value = '';
  document.removeEventListener('keydown', onKeyDownListener);
  document.removeEventListener('change', onChangeListener);
};
