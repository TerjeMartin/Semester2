import {
  apiBase,
  apiSingleListing,
} from "../../api/apiEndpoints/apiEndpoints.mjs";

export function getId() {
  const param = new URLSearchParams(window.location.search);
  const id = param.get("id");
  return `${apiBase}${apiSingleListing}${id}?_bids=true&_seller=true`;
}
