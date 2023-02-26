const formInputEl = document.querySelector('input');
const textEl = document.querySelector('#text');
console.log(textEl)
formInputEl.addEventListener('input', (event) => {
    textEl.style.fontSize = formInputEl.value + 'px'; 

});