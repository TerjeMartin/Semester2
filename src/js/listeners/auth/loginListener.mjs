import { userLogin } from "../../auth/login/userLogin.mjs";
export function loginListener() {
  const loginForm = document.querySelector("form#loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const loginForm = e.target;
      const formData = new FormData(loginForm);
      const userData = Object.fromEntries(formData.entries());
      const { email, password } = userData;
      userLogin(email, password);
    });
  }
}
