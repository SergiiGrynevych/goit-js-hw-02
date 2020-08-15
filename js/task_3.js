// Task3
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""),
//     которая принимает параметром произвольную строку
//     (в строке будут только слова и пробелы) и возвращает самое
// длинное слово в этой строке.

function findLongestWord(string = "") {
  let longWord = "";

  for (let i = 0; i < string.split(" ").length; i += 1) {
    if (longWord.length < string.split(" ")[i].length) {
      longWord = string.split(" ")[i];
    }
  }
  return longWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//  'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
