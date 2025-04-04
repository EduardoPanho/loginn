const email_correct = "panhoe888@gmail.com";
const password_correct = "12345678";


function vereficarLogin() {
    let input_email = document.getElementById("input_email")
    let input_password = document.getElementById('input_password')

    let email_typed = input_email.value
    let password_typed = input_password.value

    if (email_typed == email_correct) {
        if (password_typed == password_correct) {
            alert("login realizado");
        } else {
            alert("senha incorreta")
        }
    } else {
        alert("e-mail incorreto")
    }
}

function inverterSenhaSkin() {
    let input_password = document.getElementById('input_password');
    let eye_icon = document.getElementById('eye_icon');

    if (password_view) {
        eye_icon.className = "fa-solid fa-eye";
        input_password.type = "password";
    } else {
        eye_icon.className = "fa-solid fa-eye-slash";
        input_senha.type = "text";
    }
    password_view = !password_view
}