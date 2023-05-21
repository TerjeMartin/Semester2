import {
  apiBase,
  apiAllListings,
} from "../../api/apiEndpoints/apiEndpoints.mjs";
import * as listings from "../../api/listings/index.mjs";
import * as templates from "../../templates/index.js";
import * as search from "../../utilities/search/index.mjs";
const getAllUrl = `${apiBase}${apiAllListings}?_bids=true&_seller=true&_active=true`;

export async function renderHome() {
  const allListings = await listings.getListings(getAllUrl);
  const sortListings = allListings.sort(
    (a, b) => new Date(b.created) - new Date(a.created)
  );
  const searchForm = document.querySelector("input#searchInput");
  const container = document.querySelector("#listingsContainer");
  templates.renderListingItems(sortListings, container);
  //
  searchForm.addEventListener("input", onSearch);
  //
  function onSearch(e) {
    e.preventDefault();
    const searchTerm = e.target.value;
    const term = searchTerm.toLowerCase();
    if (!term.length) {
      container.innerHTML = "";
      return templates.renderListingItems(allListings, container);
    }
    //
    if (term.length < 3) {
      return;
    }
    //
    container.innerHTML = "";
    //
    if (search.getSearchTerms(allListings, term).length) {
      return templates.renderListingItems(
        search.getSearchTerms(allListings, term),
        container
      );
    } else {
      return search.listingNotFound(container);
    }
  }
}
