//Login Page

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.href = './enrollment.html';
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})



//Enrollment page

function showForm() {
  var selopt = document.getElementById("opts").value;

  if (selopt == 0) {
    document.getElementById("f2").style.display = "none";
    document.getElementById("f1").style.display = "none";
    document.getElementById("f4").style.display = "none"
    document.getElementById("f3").style.display = "none";
    document.getElementById("f5").style.display = "none";
    document.getElementById("f6").style.display = "none";
}
  if (selopt == 2) {
      document.getElementById("f2").style.display = "block";
      document.getElementById("f1").style.display = "none";
      document.getElementById("f3").style.display = "none";
      document.getElementById("f4").style.display = "none";
      document.getElementById("f5").style.display = "none";
      document.getElementById("f6").style.display = "none";
  }

  if (selopt == 1) {
    document.getElementById("f2").style.display = "block";
    document.getElementById("f1").style.display = "none";
    document.getElementById("f3").style.display = "none";
    document.getElementById("f4").style.display = "none";
    document.getElementById("f5").style.display = "none";
    document.getElementById("f6").style.display = "none";
}
  
  if (selopt == 3) {
    document.getElementById("f2").style.display = "none";
    document.getElementById("f1").style.display = "none";
    document.getElementById("f3").style.display = "block";
    document.getElementById("f4").style.display = "none";
    document.getElementById("f5").style.display = "none";
    document.getElementById("f6").style.display = "none";
}


}

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  
})

function nextPage() {
  alert("You have successfully enrolled.");
  location.href = './homepage.html';
}