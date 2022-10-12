const inputEl = document.querySelector('[id="font-size-control"]');
const textEl = document.querySelector('#text');


inputEl.addEventListener('input', changeFontSize);

textEl.style.fontSize = `${inputEl.value}px`

function changeFontSize () {

    const fontSizeRange = Number(inputEl.value);

    textEl.style.fontSize = `${fontSizeRange}px`
}