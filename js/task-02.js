const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients')

console.log(ingredientsEl);
console.log(ingredients);



const makeProduct = ingredients.map((ingredient) => {
  const productEl = document.createElement('li');
  productEl.textContent = ingredient;
  productEl.classList.add('item');
  
  return productEl;
});
ingredientsEl.append(...makeProduct)
