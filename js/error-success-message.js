const mainOfHtml = document.querySelector('main');
const bodyOfHtml = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successButton = document.querySelector('.success-button');
const errorButton = document.querySelector('.error__button');

export const showErrorMessage = () => {
  const errorElement = document.createElement('div');
  errorElement.style.backgroundColor = 'red';
  errorElement.style.textAlign = 'center';
  errorElement.style.padding = '5px 0px';
  mainOfHtml.prepend(errorElement);
  errorElement.innerHTML = '<h1>Не удалось загрузить фотографии!</h1>';
};

export const onSendDataError = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  const fragment = document.createDocumentFragment();
  fragment.appendChild = errorMessage;
  bodyOfHtml.appendChild(fragment);
};

export const onSendDataSuccess = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  const fragment = document.createDocumentFragment();
  fragment.appendChild = successMessage;
  bodyOfHtml.append(fragment);
};


const onKeyDownListener = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeSystemMessage (); // eslint-disable-line
  }
};

const closeSystemMessage = () => {
  document.querySelector('.success').remove();
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onKeyDownListener);
};

// successButton.addEventListener('click', () => {
//   closeSystemMessage();
// });

// errorButton.addEventListener('click', () => {
//   closeSystemMessage();
// });
