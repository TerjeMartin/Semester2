export function userProfileNotExist() {
  const userPage = document.createElement("div");
  const placeholderImage = `../../assets/NFT/profileNotFound.png`;
  userPage.classList.add(
    "row",
    "col-lg-4",
    "m-auto",
    "mt-2",
    "mt-lg-3",
    "gap-3"
  );
  userPage.innerHTML = `
      <div class="d-flex flex-column text-center gap-3 gap-lg-5">
        <img class="profileNotFound" src="../assets/NFT/profileNotFound.png" alt="Profile Not Found">
        <h1>You do not have a profile on this website.</h1>
        <a
          href="/registration/index.html"
          class="rounded-2 btn btn-secondary border-primary">Register Now for Full Access</a>
      </div>
    `;
  userPage.querySelector(".profileNotFound").src = `${placeholderImage}`;
  return userPage;
}
