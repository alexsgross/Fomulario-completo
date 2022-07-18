const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === '') {
        setErrorFor(username, "O nome é obrigatório.");
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Email inválido.");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, "A senha é obrigatória.");
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha deve ter no mínimo 7 caracteres.");
    } else {
        setSuccessFor(password);
    }

    if (passwordConfirmationValue === '') {
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "A senha e a confirmação de senha não conferem.");
    } else {
        setSuccessFor(passwordConfirmation);
    }

    const formControls = document.querySelectorAll('.form-control')
        const formIsValid = [ ... formControls].every(formControl => {
            return (formControl.className = "form-control success");
        });
        if (formIsValid) {
            alert("Cadastro realizado com sucesso!");
        }else{
            alert("Cadastro não realizado!");
        }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // Add mensagem de erro
    small.inertText = message;

    // Add classe de erro
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    //Add classe de sucesso
    formControl.className = "form-control success";

}
//# sourceMappingURL=script.js.map
function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}