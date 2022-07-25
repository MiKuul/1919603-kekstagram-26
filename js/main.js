import'./filter-photo-options.js';
import './filter-photo.js';
import './scale-photo.js';
import './form-validate.js';
import './full-size-photo.js';
import './util.js';
import './data.js';
import {closeUploadWindow, imageUploadWindow} from'./form.js';
import {renderPhotos} from './thumbnails.js';
import {getData} from './download-data.js';
import {showErrorMessage, showSendSuccessMessage, showSendErrorMessage} from './error-success-message.js';
import {setOnFormSubmit} from './form-validate.js';
import {sendData} from './send-data.js';

const onLoadSuccess = (data) => {
  renderPhotos(data);
};

const onLoadError = (error) => {
  showErrorMessage(error);
};

getData(onLoadSuccess, onLoadError);


const onSendDataSuccess = () => {
  closeUploadWindow();
  showSendSuccessMessage();
};

const onSendDataError = () => {
  imageUploadWindow.classList.add('hidden');
  showSendErrorMessage();
};

setOnFormSubmit(async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});
