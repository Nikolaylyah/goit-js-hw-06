const refs = {
    increaseBtn: document.querySelector('[data-action="increment"]'),
    decreaseBtn: document.querySelector('[data-action="decrement"]')
}


refs.increaseBtn.addEventListener('click', onIncreaseNumber);
refs.decreaseBtn.removeEventListener('click', onDecreaseNumber);

const counterValue = 0;

function onIncreaseNumber () {

    counterValue += 1;
}

function onDecreaseNumber () {

    counterValue -= 1;
}