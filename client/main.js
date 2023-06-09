// main.js

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  const loginData = {
    username: username,
    password: password,
  }

  fetch('http://localhost:9000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("You have successfully logged in.");
        // window.location.href = "/home";
        // location.reload();
      } 
      // else {
      //   // loginErrorMsg.style.opacity = 1;
      // }
    })
    .catch(error => {
      console.log(error);
    });

  if (username === "user" && password === "user") {
      location.reload();
  } else {
      loginErrorMsg.style.opacity = 1;
  }
})
