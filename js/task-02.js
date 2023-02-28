const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const listIngridEl = document.querySelector('ul');

const makeListEl = ingredients.map( (element) =>{
  const listEl = document.createElement('li');
  listEl.textContent = element;
  listEl.classList.add('item');
  return listEl
  
});
listIngridEl.append(...makeListEl);