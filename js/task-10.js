const formInputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxEl = document.querySelector('#boxes');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnCreate.addEventListener('click', () =>{
  const collection = [];
  let amount = formInputEl.value;
for (let i=0; i < amount; i+=1 ) {
  let boxSize = i*10 + 30;
  const elemBox = document.createElement("div");
  elemBox.style.height = `${boxSize}px`;
  elemBox.style.width = `${boxSize}px`;
  elemBox.style.backgroundColor = `${getRandomHexColor()}`;
  collection.push(elemBox); 
 
}
boxEl.append(...collection);
console.log(boxEl);
});

btnDestroy.addEventListener('click', () =>{
  boxEl.innerHTML = '';
});









// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і 
// натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів 
// очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, 
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor 
// для отримання кольору.