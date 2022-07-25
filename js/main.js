import'./filter-photo-options.js';
import './filter-photo.js';
import './scale-photo.js';
import './form-validate.js';
import './form.js';
import './full-size-photo.js';
import './util.js';
import './data.js';
import {renderPhotos} from './thumbnails.js';
import {getData} from './download-data.js';
import {showErrorMessage, onSendDataSuccess, onSendDataError} from './error-success-message.js';
import {setOnFormSubmit} from './form-validate.js';
import {sendData} from './send-data.js';

const onLoadSuccess = (data) => {
  renderPhotos(data);
};

const onLoadError = (error) => {
  showErrorMessage(error);
};

getData(onLoadSuccess, onLoadError);

setOnFormSubmit(async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});
