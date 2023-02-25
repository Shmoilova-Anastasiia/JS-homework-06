let counterValue = 0;

const buttonAdd = document.querySelector('button[data-action="increment"]');
const buttonDel = document.querySelector('button[data-action="decrement"]');

const countEl = document.querySelector('span[id="value"]');

buttonAdd.addEventListener("click", () =>{
    counterValue +=1;
    countEl.textContent = Number(counterValue);
});
buttonDel.addEventListener("click", () =>{
    counterValue -=1;
    countEl.textContent = Number(counterValue);
});

