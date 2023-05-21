// Base Api URL
export const apiBase = "https://api.noroff.dev/api/v1";

// POST
export const apiAuthRegis = "/auction/auth/register";
export const apiAuthLogin = "/auction/auth/login";
export const postListing = "/auction/listings";
export const listingBid = "/auction/listings/";

// GET
export const apiAllListings = "/auction/listings";
export const apiSingleListing = "/auction/listings/";
export const listingFiltering = "/auction/listings?_tag=my_tag&_active=true";
export const ownedListings = "/auction/profiles/";
export const listedListings = "/auction/profiles/<name>/listings";
export const userBiddedListings = "/auction/profiles/<name>/bids";

// PUT
export const updateProfile = "/auction/profiles/";

//DELETE
export const purgeListing = "/auction/listings/";
