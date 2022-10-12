const refs = {
    validationInput: document.querySelector('[id="validation-input"]'),
    validationInputColorValid: document.querySelector('#validation-input.valid'),
    validationInputColorInValid: document.querySelector('#validation-input.invalid'),
    validationLength: document.querySelector('[data-length]')
}


refs.validationInput.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    refs.validationInput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === refs.validationLength.length) {
        validationInputColorValid;
    }
    validationInputColorInValid;
}