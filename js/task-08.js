const formLoginEl = document.querySelector('.login-form');
const formInputEmailEl = document.querySelector('input[type="email"]');
const formInputPasswordlEl = document.querySelector('input[type="password"]');
const formBtnEl = document.querySelector ('button');

formLoginEl.addEventListener('submit', (event) =>{
event.preventDefault();
const {
    elements: { email, password }
  } = event.currentTarget;


if (formInputEmailEl.value === '' && formInputPasswordlEl.value === ''){
   return alert ('Всі поля повинні бути заповнені');
}
console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
} 
);






