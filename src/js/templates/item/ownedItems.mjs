function ownedItemTemplate(listingData) {
  const placeholderImage = "../../assets/NFT/placeholderImage.png";
  const listingItem = document.createElement("div");
  listingItem.classList.add("col-6", "col-lg-3");
  listingItem.setAttribute("id", listingData.id);
  listingItem.dataset.id = listingData.id;
  listingItem.innerHTML = `
<div class="card h-100">

  <img
    href=""
    src=""
    class="image-fluid card-img lot-image"
  />

  <div class="card-body d-flex flex-column gap-2">
    <div>
      <h3 class="card-title lot-title">Test Title</h3>
      <p class="card-text lot-description">Test Item Description</p>
    </div>
    
    <div class="d-flex align-items-center gap-2">
      <img
        href=""
        src=""
        class="image-fluid sellerAvatar"
      />
      <p class="m-0 sellerName subtext"></p>
    </div>
    
    <div class="d-flex gap-1">
      <p class="tag m-0"></p>
    </div>
  </div>

</div>
      `;

  if (listingData.media.length > 0) {
    listingItem.querySelector(".lot-image").src = listingData.media;
  } else {
    listingItem.querySelector(".lot-image").src = `${placeholderImage}`;
  }
  listingItem.querySelector(".lot-title").innerText = listingData.title;
  listingItem.querySelector(".lot-description").innerText =
    listingData.description;
//
  return listingItem;
}

export function renderOwnedListingItems(listingDataList, parent) {
  parent.append(...listingDataList.map(ownedItemTemplate));
}
