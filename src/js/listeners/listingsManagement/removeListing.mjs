import * as listings from "../../api/listings/index.mjs";

export function removeListedItem(container, id) {
  container.querySelector("button#unListBtn").addEventListener("click", (e) => {
    e.preventDefault();
    listings.removeListing(id).then(() => {
      location.reload();
    });
  });
}
