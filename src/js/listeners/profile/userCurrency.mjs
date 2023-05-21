import * as storage from "../../utilities/storage/index.mjs";
const userCurrency = document.querySelectorAll(".userCurrency");

export function userCurrencyDisplay() {
  const userProfile = JSON.parse(storage.load("userProfile"));
  if (userProfile) {
    userCurrency.forEach((e) => {
      return (e.innerHTML = JSON.stringify(userProfile.credits));
    });
  } else {
    userCurrency.forEach((e) => {
      return (e.innerHTML = "00.00 .-");
    });
  }
}
