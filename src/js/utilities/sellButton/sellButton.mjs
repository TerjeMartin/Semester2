import * as storage from "../storage/index.mjs";
const buttonContainer = document.querySelector("div#sellButton");
const profile = JSON.parse(storage.load("userProfile"));

export function hideSellButton() {
  if (!profile) {
    return buttonContainer.classList.add("d-none");
  }
}
