export function navbarResizing() {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 710) {
      document.querySelector(".navbar").classList.remove("fixed-bottom");
    } else {
      document.querySelector(".navbar").classList.add("fixed-bottom");
    }
  });
}
