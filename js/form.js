const modalOpen = document.querySelector('#upload-file');
const modalCloseButton = document.querySelector('#upload-cancel');
const modalWindow = document.querySelector('body');
const imageUploadWindow = document.querySelector('.img-upload__overlay');
// const commentForm = document.querySelector('.img-upload__text');

const onKeyDownListener = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUploadWindow (); // eslint-disable-line
    modalOpen.value = '';
  }
};

const closeUploadWindow = function () {
  imageUploadWindow.classList.add('hidden');
  modalWindow.classList.remove('modal-open');
  modalOpen.value = '';
  document.removeEventListener('keydown', onKeyDownListener);
};

const showUploadImageForm = function () {
  modalOpen.addEventListener('change', () => {
    imageUploadWindow.classList.remove('hidden');
    modalWindow.classList.add('modal-open');
    // document.querySelector('.img-upload__preview img').src = this.src; // (так ли будет реализовываться подставнока изображения?)
  });

  document.addEventListener('keydown', onKeyDownListener);

  modalCloseButton.addEventListener('click', () => {
    closeUploadWindow ();
  });
};

document.querySelector('.img-upload__control').addEventListener('click', () => {
  showUploadImageForm();
});


// commentForm.addEventListener('focus', (evt) => { (Как удалить обработчик при фокусе на поле?)
//   evt.preventDefault();
//   document.removeEventListener('keydown', onKeyDownListener);
// });
