const formInputEl = document.querySelector('input');

formInputEl.addEventListener('blur', (event) => {
    formInputEl.classList.add('invalid');
    if (Number(event.target.value.length) === Number(formInputEl.dataset.length)) {
        formInputEl.classList.replace('invalid','valid');    
    }
    return
});
