const formInputEl = document.querySelector('input');

formInputEl.addEventListener('blur', (event) => {
    if (event.target.value.length < formInputEl.dataset.length) {
        formInputEl.classList.add('invalid');  
        
  return
    }
    formInputEl.classList.replace('invalid','valid'); 

});
