// Task5
// Функция предикат
// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.Если нашли запрещенное слово
// то функция возвращает true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

function checkForSpam(str) {
  const firstWord = "spam";
  const secondWord = "sale";
  let message = "";

  return (message =
    str.toLowerCase().includes(firstWord) ||
    str.toLowerCase().includes(secondWord)
      ? true
      : false);
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

/ второе возможное решение задачи /; //

function checkForSpam(str) {
  "use strict";
  let firstWord = "spam";
  let secondWord = "sale";
  let result = "";

  if (
    str.toLowerCase().includes(firstWord) ||
    str.toLowerCase().includes(secondWord)
  ) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
