const amountCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${amountCategoriesEl.length}`);

const breakdownOfCategoriesEl = [...amountCategoriesEl]
.map(categories => `Category: ${categories.firstElementChild.textContent}
Elements: ${categories.lastElementChild.children.length}`)
.join('\n')

console.log(breakdownOfCategoriesEl);