let allLogin = document.getElementById("all");
let image = document.getElementById("images");
let box0 = document.getElementById("box0")
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let username = document.getElementById("email");
let password = document.getElementById("password");

image.style.display = "none"


function onLogin() {
    // all true
  if (
    email.value == "najwaputri123syahrani@gmail.com" &&
    password.value == "123"
  ) {
    window.location.href = "https://yepawyeezy.github.io/pages/";
  } else if (email.value == "farizjf34@gmail.com" && password.value == "123") {
    window.location.href = "https://yepawyeezy.github.io/pages/";
  }
//   ada salah password
  else if (email.value == "najwaputri123syahrani@gmail.com") {
    window.location.href = "https://yepawyeezy.github.io/not-found/"
  } else if (email.value == "farizjf34@gmail.com") {
    window.location.href = "https://yepawyeezy.github.io/not-found/"
  } 
//  ada salah email
  else if (password.value == "123") {
    window.location.href = "https://yepawyeezy.github.io/not-found1/"
  } 
//   salah semua
  else {
    window.location.href = "https://yepawyeezy.github.io/not-found2/"
  }
}
