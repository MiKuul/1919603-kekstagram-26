import {getRandomPositiveInteger, getRandomArrayElement} from './util.js';

const DATA_NAME = [ 'Артем', 'Даня', 'Лиза', 'Герман', 'Моника', 'Дина'];
const DATA_MESSAGE = ['Всё отлично!', 'Как можно было поймать такой неудачный момент?!', ' В целом всё неплохо. Но не всё.', 'Лица у людей на фотке перекошены, как будто их избивают.'];


const generateComment = (number) => {
  const arr = [];
  for (let i = 0; i < number; i++) {
    arr.push({
      id: i + 1,
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: getRandomArrayElement(DATA_MESSAGE),
      name: getRandomArrayElement(DATA_NAME),
    });
  }
  return arr;
};

export const generatePhoto = (number) => {
  const arr = [];
  for (let i = 0; i < number; i++) {
    arr.push({
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: `Описание${i + 1}`,
      likes: getRandomPositiveInteger (15, 200),
      comments: generateComment(getRandomPositiveInteger(0, 25)),
    });
  }
  return arr;
};
