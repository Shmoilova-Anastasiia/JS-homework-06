const inputEl = document.querySelector('#name-input');
const userNameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) =>{
    if (inputEl.value !== '') {
        userNameEl.textContent = event.target.value; 
        return
    }
    userNameEl.textContent = 'Anonymous'; 
});
