function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

getRandomPositiveInteger(1, 2);
checkStringLength(1, 2);

/* ЗАДАЧА:
Написать функции для генерации массива из 25 сгенерированных объектов.
Каждый объект массива — описание фотографии, опубликованной пользователем.
Структура объекта:
  - id, число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться.
  - url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
  - description, строка — описание фотографии. Описание придумайте самостоятельно.
  - likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
  - comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
    Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом.
    - У каждого комментария есть идентификатор — id — случайное число. Идентификаторы не должны повторяться.
  - Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.
  - Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:
    Всё отлично!
    В целом всё неплохо. Но не всё.
  - Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.
*/

/*
obj = {
  id: 1-25,
  url: 'photos/1-25.jpg',
  description: 'Самостоятельное описание',
  likes: 15-200,
  comments: COMMENTS = [{
    id: 135,
    avatar: 'img/avatar-1-6.svg',
    message: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    name: 'Артём',
  }],
};
*/
const DATA_NAME = [ 'Артем', 'Даня', 'Лиза', 'Герман', 'Моника', 'Дина'];
const DATA_MESSAGE = ['Всё отлично!', 'Как можно было поймать такой неудачный момент?!', ' В целом всё неплохо. Но не всё.', 'Лица у людей на фотке перекошены, как будто их избивают.'];
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

function generatePhoto(number) {
  const arr = [];
  for (let i = 0; i < number; i++) {
    arr.push({
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: `Описание${i + 1}`,
      likes: getRandomPositiveInteger (15, 200),
      comments: generate(6, generateComment),
    });
  }
  return arr;
}

function generateComment(number) {
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
}

function generate(number, creator) {
  return Array.from({length: number}, creator);
}

generate(25, generatePhoto);

console.log(generatePhoto(25));
