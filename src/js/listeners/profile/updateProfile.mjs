import { updateUserProfile } from "../../api/listings/index.mjs";

export function updateProfile() {
  const updateForm = document.querySelector("form#updateUserInformation");

  if (updateForm) {
    updateForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const updateForm = e.target;
      const formData = new FormData(updateForm);
      const avatarUrl = formData.get("avatar");
      updateUserProfile(avatarUrl).then(() => {
          window.location.pathname = "/profile/index.html";
      });
    });
  }
}
