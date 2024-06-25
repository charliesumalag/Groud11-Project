const signUpBtnTopEl = document.getElementById("sign-up-text");
const loginBtnTopEl = document.getElementById("login-text");
const forHiddenSignupEl = document.getElementById("for-hidden-signup");
const forHiddenLoginEl = document.getElementById("for-hidden-login");
const signupEl = document.getElementById("signUp");
const signinEl = document.getElementById("sign-in");
const userLoginEl = document.getElementById("userLogin");
const userRegEl = document.getElementById("userRegistration");
const loginBtn = document.getElementById("loginBtn");
const username = "user";
const password = "password";
signUpBtnTopEl.addEventListener("click", signUpClick);
loginBtnTopEl.addEventListener("click", loginClick);

function signUpClick() {
  forHiddenSignupEl.classList.remove("hidden");
  forHiddenLoginEl.classList.add("hidden");
  loginBtnTopEl.style.backgroundColor = "#1D0909";
  signUpBtnTopEl.style.backgroundColor = "#0D54B0";
}
function loginClick() {
  forHiddenSignupEl.classList.add("hidden");
  forHiddenLoginEl.classList.remove("hidden");
  loginBtnTopEl.style.backgroundColor = "#0D54B0";
  signUpBtnTopEl.style.backgroundColor = "#1D0909";
}
signinEl.addEventListener("click", loginClick);
userLoginEl.addEventListener("click", loginClick);
signupEl.addEventListener("click", signUpClick);
userRegEl.addEventListener("click", signUpClick);

loginBtn.addEventListener("click", function () {});
