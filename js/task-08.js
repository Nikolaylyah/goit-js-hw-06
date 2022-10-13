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

    if (mail === "" || password === "") {
        return alert("Please fill in all the fields!");
    }

    console.log(`Mail: ${mail}, Password: ${password}`);

    event.currentTarget.reset();

}

