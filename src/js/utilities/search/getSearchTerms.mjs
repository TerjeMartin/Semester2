export function getSearchTerms(listingData, term) {
  return listingData.filter((listing) => {
    const listingTitle = listing.title.toLowerCase();
    const listingOwner = listing.seller.name.toLowerCase();
    return listingTitle.includes(term) || listingOwner.includes(term);
  });
}
