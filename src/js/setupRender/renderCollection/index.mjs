import {
  apiBase,
  ownedListings,
} from "../../api/apiEndpoints/apiEndpoints.mjs";
import * as listings from "../../api/listings/index.mjs";
import * as templates from "../../templates/index.js";
import * as storage from "../../utilities/storage/index.mjs";
const profile = JSON.parse(storage.load("userProfile"));

export async function renderOwnedCollection() {
  if (profile) {
    const ownedListingURL = `${apiBase}${ownedListings}${profile.name}/listings?_listings=true&_bids=true&_seller=true`;
    const allListings = await listings.getListings(ownedListingURL);
    const container = document.querySelector("div#ownedItemsContainer");
    templates.renderOwnedListingItems(allListings, container);
  } else {
    const container = document.querySelector("div#ownedItemsContainer");
    container.append(templates.userProfileNotExist());
  }
}

export async function renderYourBidsCollection() {
  if (profile) {
    const yourBidsURL = `${apiBase}${ownedListings}${profile.name}/bids?_listings=true&_bids=true&_seller=true`;
    const allListings = await listings.getListings(yourBidsURL);
    const container = document.querySelector("div#yourBidsContainer");
    templates.renderYourBidsItems(allListings, container);
  } else {
    const container = document.querySelector("div#yourBidsContainer");
    container.append(templates.userProfileNotExist());
  }
}

export async function renderListedItemsCollection() {
  if (profile) {
    const listedItemsURL = `${apiBase}${ownedListings}${profile.name}/listings?_bids=true&_seller=true`;
    const allListings = await listings.getListings(listedItemsURL);
    const container = document.querySelector("div#listedItemsContainer");
    templates.renderListedItems(allListings, container);
  } else {
    const container = document.querySelector("div#listedItemsContainer");
    container.append(templates.userProfileNotExist());
  }
}
