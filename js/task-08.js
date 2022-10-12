const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);


function onFormSubmit (event) {
    event.preventDefault();
    const formEl = event.currentTarget.elements;

    const mail = formEl.email.value;
    const password = formEl.password.value;

    const formData = {
        mail, password
    }

    let alert = prompt("Enter your data please");
    let text;
    if (alert == null || alert == "") {
        text = "alert, enter your data";
    } else {
        text = "Thank's for register" + alert;
    }


    form.reset();


    console.log(formData);
}

