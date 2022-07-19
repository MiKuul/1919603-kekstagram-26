const bigPhoto = document.querySelector('.big-picture');
const commentsList = document.querySelector('.social__comments');
const modalWindow = document.querySelector('body');
const moreCommentsButton = document.querySelector('.comments-loader');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const createComment = function (obj) {
  const {avatar, message, name} = obj;
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;
  return commentElement;
};

const onKeyDownListener = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFullPhoto (); // eslint-disable-line
  }
};

const renderComments = (arr) => {
  const fragment = document.createDocumentFragment();
  arr.forEach((it) => {
    fragment.appendChild(createComment(it));
  });
  commentsList.appendChild(fragment);
};

const NUM_COMMENTS = 5;
let start = 0;
let commentsData = [];
let commentsCount = 0;
const renderNextComments = () => {
  const nextComments = commentsData.slice(start, start + NUM_COMMENTS);
  renderComments(nextComments);
  start = start + NUM_COMMENTS;

  if (commentsData.length <= start) {
    moreCommentsButton.classList.add('hidden');
  }
  commentsCount = start;
  if (start > commentsData.length) {
    commentsCount = commentsData.length;
  }
  bigPhoto.querySelector('.comments-count').textContent = `${commentsCount} из ${  commentsData.length}`;
};

const closeFullPhoto = function () {
  bigPhoto.classList.add('hidden');
  modalWindow.classList.remove('modal-open');
  document.removeEventListener('keydown', onKeyDownListener);
};

export const showFullPhoto = function(obj) {
  const {url, likes, comments, description} = obj;
  commentsData = comments;
  bigPhoto.classList.remove('hidden');
  moreCommentsButton.classList.remove('hidden');
  commentsList.innerHTML = '';
  start = 0;
  renderNextComments();
  bigPhoto.querySelector('.big-picture__img img').src = url;
  bigPhoto.querySelector('.likes-count').textContent = likes;
  bigPhoto.querySelector('.social__caption').textContent = description;

  modalWindow.classList.add('modal-open');

  document.addEventListener('keydown', onKeyDownListener);
};

bigPhoto.querySelector('.big-picture__cancel').addEventListener('click', () => {
  closeFullPhoto();
});

moreCommentsButton.addEventListener('click', () => {
  renderNextComments();
});
