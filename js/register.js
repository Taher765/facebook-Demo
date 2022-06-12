let form = document.querySelector("#form");
let lbFirstName = document.querySelector(".first-name");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let lbLastName = document.querySelector(".last-name");
let mail = document.querySelector("#email");
let lbMail = document.querySelector(".mail");
let phone = document.querySelector("#phone");
let lbPhone = document.querySelector(".phone");
let pass = document.querySelector("#password");
let lbPass = document.querySelector(".pass");
let lbConfPass = document.querySelector(".conf-pass");
let confPass = document.querySelector("#confPass");
let reset = document.querySelector("#reset");
let alertRadio = document.querySelector(".alert");
let male = document.querySelector("#male");
let female = document.querySelector("#female");
let date = document.querySelector("#date");
let liDate = document.querySelector("#liDate");


// submit
form.addEventListener("submit", (e) => {
  if (
    firstNameValid() === false ||
    lastNameValid() === false ||
    validEmail() === false ||
    validPhone() === false ||
    validPassword() === false ||
    validConfPass() === false ||
    gender() === false ||
    dateValid === false
  ) {
    e.preventDefault();
  }
});

// First Name
firstName.addEventListener("keyup", firstNameValid);
function firstNameValid() {
  if (firstName.value.length < 3 || firstName.value.includes(" ") == true || !isNaN(firstName.value) || !isNaN(firstName.value[0] ) ){
    firstName.style.borderColor = "red";
    lbFirstName.innerHTML = `<span class="error"> First Name Not Is Valid <i class="fa-solid fa-circle-exclamation"></i></span>`;
    return false
  } else {
    firstName.style.borderColor = "green";
    lbFirstName.innerHTML = `<span class="true"> First Name Is Valid <i class="fa-solid fa-circle-check"></i> </span>`;
    return true
  }
}

// Last Name
lastName.addEventListener("keyup", lastNameValid);
function lastNameValid() {
  if (lastName.value.length < 3 || lastName.value.includes(" ") == true || !isNaN(lastName.value) || !isNaN(lastName.value[0])) {
    lastName.style.borderColor = "red";
    lbLastName.innerHTML = `<span class="error"> Last Name Not Is Valid <i class="fa-solid fa-circle-exclamation"></i></span>`;
    return false
  } else {
    lastName.style.borderColor = "green";
    lbLastName.innerHTML = `<span class="true"> Last Name Is Vaalid <i class="fa-solid fa-circle-check"></i> </span>`;
    return true
  }
}

// Email 
mail.addEventListener("blur", validEmail);
function validEmail() {
  let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.value.match(regx)) {
    mail.style.borderColor = "green";
    lbMail.innerHTML = `<span class="true"> Email Is Valid  <i class="fa-solid fa-circle-check"></i> </span>`;
    return true;
  } else {
    mail.style.borderColor = "red";
    lbMail.innerHTML = `<span class="error"> Email Not Is Valid <i class="fa-solid fa-circle-exclamation"></i></span>`;
    return false;
  }
}

// phone 
phone.addEventListener("keyup", validPhone);
function validPhone() {
  let regx = /^\d{11}$/;
  if (phone.value.match(regx)) {
    phone.style.borderColor = "green";
    lbPhone.innerHTML = `<span class="true"> Phone Is Valid <i class="fa-solid fa-circle-check"></i> </span>`;
    return true;
  } else {
      phone.style.borderColor = "red";
      lbPhone.innerHTML = `<span class="error"> Phone Not Is Valid <i class="fa-solid fa-circle-exclamation"></i></span>`;
      return false;
  }
}

// Password
pass.addEventListener("keyup", validPassword);
function validPassword() {
  if (pass.value == "" || pass.value.length < 6 ) {
    pass.style.borderColor = "red";
    lbPass.innerHTML = `<span class="error"> Password Not IS Valid <i class="fa-solid fa-circle-exclamation"> </span>`;
    return false;
  } else {
    pass.style.borderColor = "green";
    lbPass.innerHTML = `<span class="true"> Password valid <i class="fa-solid fa-circle-check"></i> </span>`;
    return true;
  }
}

// Confirm Password
confPass.addEventListener("keyup", validConfPass);
function validConfPass() {
  if (confPass.value !== pass.value) {
    confPass.style.borderColor = "red";
    lbConfPass.innerHTML = `<span class="error"> Password does not match <i class="fa-solid fa-circle-exclamation"> </span>`;
    return false;
  } else {
    confPass.style.borderColor = "green";
    lbConfPass.innerHTML = `<span class="true"> Valid <i class="fa-solid fa-circle-check"></i> </span>`;
    return true;
  }
}

// Gender
male.addEventListener("change", gender);
female.addEventListener("change", gender);
function gender() {
  if (male.checked || female.checked) {
    alertRadio.innerHTML = `<span class="true">Valid <i class="fa-solid fa-circle-check"></i> </span>`;
    return true

  } else {
    alertRadio.innerHTML = `<span class="error">Please select your gender <i class="fa-solid fa-circle-exclamation"> </span>`;
    return false
  }
}

// Date

date.addEventListener('change', selectDate)
let dateValid = false
function selectDate() {
  if (parseInt(date.value) > 2016) {
    date.style.borderColor = "red";
    liDate.innerHTML = `<span class="error">date is Not Valid <i class="fa-solid fa-circle-exclamation"> </span>`;
  dateValid = false;

  } else {
    date.style.borderColor = "green";
    liDate.innerHTML = `<span class="true">Valid <i class="fa-solid fa-circle-check"></i> </span>`;
  dateValid = true;

  }
}
// Reset
reset.addEventListener('click', () => {
  window.location.reload();
})