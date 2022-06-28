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

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

export {getRandomPositiveInteger};
export {getRandomArrayElement};
