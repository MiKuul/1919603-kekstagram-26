const bigPhoto = document.querySelector('.big-picture');
const commentsList = document.querySelector('.social__comments');
const modalWindow = document.querySelector('body');
const moreCommentsButton = document.querySelector('.comments-loader');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const createComment = function (array) {
  array.forEach (({avatar, message, name}) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    commentsList.appendChild(commentElement);
  });
};

// Попытка номер 4
const arraySeparation = function (array) {
  const size = 5;
  const subarray = [];
  for (let i = 0; i < Math.ceil(array.length/size); i++){
    subarray[i] = array.slice((i*size), (i*size) + size);
  }
  moreCommentsButton.addEventListener('click', () => {
    createComment(subarray[1]);
  });
};

const createComments = function (array) {
  const firstArray = array.slice(0, 5);
  createComment(firstArray);
  if (array.length > 5) {
    moreCommentsButton.classList.remove('hidden');
    arraySeparation(array);
  }
};

const onKeyDownListener = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFullPhoto (); // eslint-disable-line
  }
};

const closeFullPhoto = function () {
  bigPhoto.classList.add('hidden');
  modalWindow.classList.remove('modal-open');
  document.removeEventListener('keydown', onKeyDownListener);
};

export const showFullPhoto = function(obj) {
  const {url, likes, comments, description} = obj;
  bigPhoto.classList.remove('hidden');
  moreCommentsButton.classList.add('hidden');
  commentsList.innerHTML = '';
  bigPhoto.querySelector('.big-picture__img img').src = url;
  bigPhoto.querySelector('.likes-count').textContent = likes;
  createComments (comments);
  bigPhoto.querySelector('.comments-count').textContent = ` из ${  comments.length}`; // добавить счетчик комментариев
  bigPhoto.querySelector('.social__caption').textContent = description;

  modalWindow.classList.add('modal-open');

  document.addEventListener('keydown', onKeyDownListener);
};

bigPhoto.querySelector('.big-picture__cancel').addEventListener('click', () => {
  closeFullPhoto ();
});

