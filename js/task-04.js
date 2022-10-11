const refs = {
    increaseBtn: document.querySelector('[data-action="increment"]'),
    decreaseBtn: document.querySelector('[data-action="decrement"]'),
    output: document.querySelector('[id="value"] ')
}


refs.increaseBtn.addEventListener('click', onIncreaseNumber);
refs.decreaseBtn.addEventListener('click', onDecreaseNumber);

let counterValue = 0;

function onIncreaseNumber () {

    counterValue += 1;
    refs.output.textContent = counterValue;
}

function onDecreaseNumber () {

    counterValue -= 1;
    refs.output.textContent = counterValue;
}
