const refs = {
    validationInput: document.querySelector('[id="validation-input"]'),
    validationLength: document.querySelector('[data-length]')
}


refs.validationInput.addEventListener('blur', onInputBlur);



function onInputBlur() {

    let inputLength = refs.validationInput.value.length;

    if (inputLength == refs.validationLength.dataset.length) {
        refs.validationInput.classList.remove('invalid');
        refs.validationInput.classList.add('valid');     

    } else {
        refs.validationInput.classList.remove('valid');
        refs.validationInput.classList.add('invalid');
    }
    
}