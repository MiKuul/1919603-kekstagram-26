const bigPhoto = document.querySelector('.big-picture');
const commentsList = document.querySelector('.social__comments');

const createComment = function (array) {

  array.forEach (({avatar, message, name}) => {
    const comment = document.querySelector('.social__comment');
    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;
    commentsList.appendChild(comment);
  });
};

export const showFullPhoto = function(obj) {
  const {url, likes, comments, description} = obj;
  bigPhoto.classList.remove('hidden');
  bigPhoto.querySelector('.big-picture__img img').src = url;
  bigPhoto.querySelector('.likes-count').textContent = likes;
  bigPhoto.querySelector('.comments-count').textContent = comments.length;
  bigPhoto.querySelector('.social__caption').textContent = description;

  createComment (comments);
  bigPhoto.querySelector('.social__comment-count').classList.add('hidden');
  bigPhoto.querySelector('.comments-loader').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');

  bigPhoto.querySelector('.big-picture__cancel').addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      bigPhoto.classList.add('hidden');
    }
  });
  bigPhoto.querySelector('.big-picture__cancel').addEventListener('click', () => {
    bigPhoto.classList.add('hidden');
  });
};
