const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngr = document.getElementById('ingredients');

const itemsIngr = ingredients.map((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
});

listIngr.append(...itemsIngr);