import { userRegistration } from "../../auth/registration/userRegis.mjs";

export function regisListener() {
  const regisForm = document.querySelector("form#registrationForm");
  if (regisForm) {
    regisForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const userData = Object.fromEntries(formData.entries());
      const { username, email, password } = userData;
      userRegistration(username, email, password);
    });
  }
}
