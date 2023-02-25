// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента 
// (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);
console.log(categoriesEl);

const titleEl = document.querySelectorAll('h2');
titleEl.forEach( function (element){
console.log(`Category: ${element.textContent}`);

});
// const list = categoriesEl[i].children;


// console.log(list);

// // // const titleEl = document.querySelectorAll('h2');
// // // titleEl.forEach( function ([...titleEl]) {
// // //     titleEl.classList.add('title__category'); 
// // //     return  
// // // });


// // categoriesEl.forEach(function makeMessage (element, index, array) {
// // console.log(array);

// //     // const count = ul.children;
// //     // console.log(`Category: ${h2.textContent}`,`Elements: ${count.length}`);
// //     return;
// // }
// // );
