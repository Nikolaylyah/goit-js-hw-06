const correctInput = {
     filledInput: document.querySelector('[id="name-input"]'),
     emptyInput: document.querySelector('[id="name-output"]')
}

correctInput.filledInput.addEventListener('input', onInputChange);


function onInputChange() {
    if(filledInput === null){
        emptyInput.textContent("Anonymous");
    }
    emptyInput.textContent(filledInput);
} 
     
