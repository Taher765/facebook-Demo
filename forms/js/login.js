let form = document.querySelector("#form");
let emailAddress = document.querySelector(".email-adderss");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let pass = document.querySelector(".pass");
let showPassword = document.querySelector(".show-pass")
let show = document.querySelector("#show")
let alertDivEmail = document.createElement("div");
let errorMessegeEmail = document.createTextNode("البريد الإلكتروني غير صالح");
let alertDivPassword = document.createElement("div");
let errorMessegePassword = document.createTextNode("كلمة السر التي أدخلتها غير صحيحة");

// submit
form.addEventListener("submit", (e) => {
  if (validEmail() === false || passwordValid() === false) {
    e.preventDefault();
  }
});

// email
email.addEventListener('keyup' ,validEmail)
function validEmail() {
  let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(regx)) {
    email.style.borderColor = "green"
    emailAddress.appendChild(alertDivEmail).remove();
    return true
  } else {
    alertDivEmail.appendChild(errorMessegeEmail);
    alertDivEmail.setAttribute("class", "error");
    emailAddress.appendChild(alertDivEmail);
    email.style.borderColor = "red";
    return false
  }
}

// password
password.addEventListener('focus', passwordValid);
  password.addEventListener("keyup", () => {
    passwordValid();
  });

function passwordValid() {
  if (password.value.length > 5) {
    pass.appendChild(alertDivPassword).remove();
    password.style.borderColor = "green";
    return true
  } else {
    alertDivPassword.appendChild(errorMessegePassword);
    alertDivPassword.setAttribute("class", "error");
    pass.appendChild(alertDivPassword);
    password.style.borderColor = "red";
    return false;
  }
}

// show password
password.addEventListener('keyup', () => {
  if (password.value.length > 0) {
    showPassword.style.display = "block"
  } else {
    showPassword.style.display = "none"
  }
})
show.addEventListener('change', () => {
  if (show.checked === true) {
    password.setAttribute('type', 'text');
    showPassword.classList.toggle("fa-eye-slash");
  } else {
    password.setAttribute("type", "password");
    showPassword.classList.remove("fa-eye-slash");
  }
})