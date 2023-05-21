import * as storage from "../../../utilities/storage/index.mjs"
import { apiBase, postListing } from "../../apiEndpoints/apiEndpoints.mjs";


export async function createListing(listingData) {
  const response = await fetch(`${apiBase}${postListing}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${storage.load("token")}`,
    },
    body: JSON.stringify(listingData),
  });

  return await response.json();
}
