const correctInput = {
     filledInput: document.querySelector('[id="name-input"]'),
     emptyInput: document.querySelector('[id="name-output"]')
}

correctInput.filledInput.addEventListener('input', onInputChange);


function onInputChange(event) {
    correctInput.emptyInput.textContent = event.currentTarget.value;

    if(event.currentTarget.value === ""){
        correctInput.emptyInput.textContent = 'Anonymous';
    }
} 