import * as utilities from "./utilities/storage/index.mjs";
import * as management from "./listeners/index.mjs";
import * as templates from "./templates/index.js";
import * as render from "./setupRender/index.mjs";
import { hideSellButton } from "./utilities/sellButton/sellButton.mjs";

switch (window.location.pathname) {
  case "/login/index.html":
  case "/login/":
  case "/login":
    management.loginListener();
    break;
  case "/registration/index.html":
  case "/registration/":
  case "/registration":
    management.regisListener();
    break;
  case "/home/index.html":
  case "/home/":
  case "/home":
    render.renderHome();
    break;
  case "/collection/index.html":
  case "/collection/":
  case "/collection":
    render.renderOwnedCollection();
    render.renderYourBidsCollection();
    render.renderListedItemsCollection();
    hideSellButton();
    break;
  case "/profile/index.html":
  case "/profile/":
  case "/profile":
    templates.renderUserProfile();
    break;
  case "/item/sell/index.html":
  case "/item/sell/":
  case "/item/sell":
    management.createListingItem();
    break;
  case "/profile/edit/index.html":
  case "/profile/edit/":
  case "/profile/edit":
    management.updateProfile();
    break;
  case "/item/view/index.html":
  case "/item/view/":
  case "/item/view":
    render.renderSingleItem();
    break;
}
if (
  window.location.pathname !== "/login/index.html" &&
  window.location.pathname !== "/registration/index.html"
) {
  utilities.navbarResizing();
  management.userCurrencyDisplay();
  management.logoutUser();
}
