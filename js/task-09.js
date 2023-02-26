const bodyEl = document.querySelector('body');
const colorBodyEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
buttonEl.addEventListener('click', () => {
bodyEl.style.backgroundColor = getRandomHexColor();
colorBodyEl.textContent = bodyEl.style.backgroundColor;
})



















