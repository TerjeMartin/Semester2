import * as listings from "../../api/listings/index.mjs";
import * as templates from "../../templates/index.js";
import * as storage from "../../utilities/storage/index.mjs";
import { getId } from "../../utilities/ID/getID.mjs";
const profile = JSON.parse(storage.load("userProfile"));

export async function renderSingleItem() {
  if (profile) {
    const newUrl = getId();
    const singleItem = await listings.getListing(newUrl);
    const container = document.querySelector("div#listingsViewContainer");
    templates.renderListingItem(singleItem, container);
  } else {
    const container = document.querySelector("div#listingsViewContainer");
    container.append(templates.userProfileNotExist());
  }
}
