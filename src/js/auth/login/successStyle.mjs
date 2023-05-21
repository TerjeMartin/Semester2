export function loginSuccess() {
  const loginBtn = document.querySelector("button#loginBtn");
  loginBtn.style.border = "none";
  loginBtn.style.backgroundColor = `#61BF73`;
  loginBtn.innerText = `Redirecting...`;
}
