const formInputEl = document.querySelector('input');

formInputEl.addEventListener('blur', (event) => {
    formInputEl.classList.add('invalid');
    if (event.target.value.length >= formInputEl.dataset.length) {
        formInputEl.classList.replace('invalid','valid');    
    }
    return
});
