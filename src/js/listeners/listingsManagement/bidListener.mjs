import * as listings from "../../api/listings/index.mjs";

export function userBid(container, id) {
  container.querySelector("form#bidForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const bidAmount = formData.get("amount");
    listings.bidOnListing(bidAmount, id).then(() => {
      location.reload()
    });
  });
}
