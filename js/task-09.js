// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }

const bodyColor = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const changeBodyColor = document.querySelector('body')

bodyColor.addEventListener('click', ()=>getRandomHexColor());

function getRandomHexColor (event) {

  const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0);
  changeBodyColor.style.backgroundColor = newColor;
  console.log (newColor);
}
