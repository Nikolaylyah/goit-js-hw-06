const amountCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${amountCategoriesEl.length}`);

const breakdownOfCategoriesEl = [...amountCategoriesEl]
.map(categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`)
.join('\n')

console.log(breakdownOfCategoriesEl);