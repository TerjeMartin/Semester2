export function logoutUser() {
  const logoutBtn = document.querySelector("a#logoutBtn");
  logoutBtn.addEventListener("click", (e) => {
    localStorage.clear();
    window.location.pathname = "/login/index.html";
  });
}
