import './form-validate-comment.js';
import './form.js';
import './full-size-photo.js';
import './util.js';
import {generatePhoto} from './data.js';
import {renderPhotos} from './thumbnails.js';

export const data = generatePhoto(25);
renderPhotos (data);
