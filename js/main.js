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
const DATA_ID = [];
const DATA_ADRESS = [];
const DATA_DESCRIPTION = [];
const DATA_LIKES = [];
const SIMILAR_PHOTO_DESCRIPTION = 25;


// фунция генерации массива id
function getId (a, b) {
  for (let i = a; i <= b; i++) {
    DATA_ID[i] = i;
  }
  return DATA_ID;
}
// фунция генерации массива url-ссылки
function getAdress (a, b) {
  for (let i = a; i <= b; i++) {
    DATA_ADRESS[i] = `photos/${i}.jpg`;
  }
  return DATA_ADRESS;
}
// фунция генерации массива описаний
function getDescription (a, b) {
  for (let i = a; i <= b; i++) {
    DATA_DESCRIPTION[i] = `Описание-${i}`;
  }
  return DATA_DESCRIPTION;
}
// фунция генерации массива лайков
function getLikes (a, b) {
  for (let i = a; i <= b; i++) {
    DATA_LIKES[i] = i;
  }
  return DATA_LIKES;
}

getDescription (1, 25);
getId (1, 25);
getAdress (1, 25);
getLikes (15, 200);


console.log(DATA_LIKES);
console.log(DATA_ID);
console.log(DATA_ADRESS);
console.log(DATA_DESCRIPTION);

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createPhotoDescription = () => ({
  id: getRandomArrayElement(DATA_ID),
  url: getRandomArrayElement(DATA_ADRESS),
  description: getRandomArrayElement(DATA_DESCRIPTION),
  likes: getRandomArrayElement(DATA_LIKES),
});

const similarPhotoDescription = Array.from({length: SIMILAR_PHOTO_DESCRIPTION}, createPhotoDescription);
console.log(similarPhotoDescription);
