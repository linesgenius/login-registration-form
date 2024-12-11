const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const toRegisterLink = document.getElementById("to-register");
const toLoginLink = document.getElementById("to-login");

toRegisterLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
});

toLoginLink.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
});
