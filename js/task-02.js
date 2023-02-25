const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const listIngridEl = document.querySelector('ul');

const makeListEl = ingredients.map( (element, i) =>{
  const listEl = document.createElement('li');
  listEl.textContent = element;
  listEl.classList.add('item');
  listIngridEl.append(listEl);

});