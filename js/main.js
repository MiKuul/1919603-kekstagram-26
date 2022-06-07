function checkStringLength (str, maxlength) {
  return (str.length <= maxlength);
}

checkStringLength();

// Функция взята с https://translated.turbopages.org/proxy_u/en-ru.ru.13ecd07e-629f0898-8af2843a-74722d776562/https/stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

function getRandomInt (min, max) {
  if (min < 0){
    throw new Error ('Ошибка! \n Укажите положительное число начиная с 0.');
  }
  if (max <= min){
    throw new Error ('Ошибка! \n Укажите первым число, с которого начинается диапазон. \n Число должно быть меньше того, на котором заканчивается диапазон. Например: (1, 10). \n Числа указываемого диапазона не могут быть равны.');
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt();
