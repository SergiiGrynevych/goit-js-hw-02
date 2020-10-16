//Task 8

// Вычисление суммы массива
// Напиши функцию reduceArray(array), которая принимает числовой массив array.
// Если массив array не пустой, необходимо посчитать сумму всех элементов массива,
//   используя цикл for.Для подсчета суммы используй переменную total.
// Функция должна возвращать 0 если массив пустой и значение total в противном случае.


/////////// первое решение задачи 
// function reduceArray(array) {
//   let total = 0;
//   for (const item of array) {
//     total <= array.length ? (total += item) : 0;
//   }

//   return total;
// }

/////////// второе решение задачи 
function reduceArray(array) {
  'use strict';
  let total = 0;
    for(let i = 0; i < array.length; i += 1){
      if(array.length > 0){
        total += array[i]
      }
  }  
  return total;
};

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5


// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */
// const entries = Object.entries(hotel);

/*
 * На каждой итерации по entries выберем первый элемент подмассива (ключ)
 * в переменную key, а второй (значение) в переменную value
 */
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */
