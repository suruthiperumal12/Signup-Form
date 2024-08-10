var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (e) => {
  if (!validInputfields()) {
    e.preventDefault();
  }
});

function validInputfields() {
  var usernameval = username.value.trim();
  var emailval = email.value.trim();
  var passwordval = password.value.trim();
  var cpasswordval = cpassword.value.trim();
  let success = true;

  if (usernameval === "") {
    success = false;
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }
  if (emailval === "") {
    success = false;
    setError(email, "Email is required");
  } else if (!validateEmail(emailval)) {
    success = false;
    setError(email, "Please enter valid email");
  } else {
    setSuccess(email);
  }
  if (passwordval === "") {
    success = false;
    setError(password, "Password is required");
  } else if (passwordval.length < 8) {
    success = false;
    setError(password, "Atleast 8 characters required");
  } else {
    setSuccess(password);
  }
  if (cpasswordval === "") {
    success = false;
    setError(cpassword, "Confirm password is required");
  } else if (cpasswordval !== passwordval) {
    success = false;
    setError(cpassword, "Password doesnot match");
  } else {
    setError(cpassword);
  }
  return success;
}

function setError(element, message) {
  var inputGroup = element.parentElement;
  var errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  var inputGroup = element.parentElement;
  var errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
