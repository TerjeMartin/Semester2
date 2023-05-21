function itemTemplate(listingData) {
  const placeholderImage = "../../assets/NFT/placeholderImage.png";
  const listingItem = document.createElement("div");
  listingItem.classList.add("col-6", "col-lg-3");
  listingItem.setAttribute("id", listingData.id);
  listingItem.dataset.id = listingData.id;
  listingItem.innerHTML = `
<a class="itemLink" href="">
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
        

        <div class="d-flex align-items-center gap-2">
          <img src="../assets/Icons/timeIcon.png"
              class="img-fluid iconStyle"
              />
          <p class="m-0 lot-deadline subtext"></p>
        </div>

        <div class="d-flex align-items-center gap-2">
          <img src="../assets/Icons/currencyMobileIcon.png"
              class="img-fluid iconStyle"
          />
          <p class="m-0 lot-price subtext"></p>
        </div>
      </div>
      
  </div>
</a>
    `;

  const itemPriceArray = listingData.bids.map((price) => {
    return price.amount;
  });

  const itemPrice = itemPriceArray.pop();
  const itemUrl = listingItem.querySelectorAll(".itemLink");
  itemUrl.forEach((e) => {
    e.href = `../item/view/index.html?id=${listingData.id}`;
  });
  if (listingData.media.length > 0) {
    listingItem.querySelector(".lot-image").src = listingData.media;
  } else {
    listingItem.querySelector(".lot-image").src = `${placeholderImage}`;
  }
  listingItem.querySelector(
    ".sellerName"
  ).innerText = `${listingData.seller.name} - Owner`;
  listingItem.querySelector(".sellerAvatar").src = listingData.seller.avatar;
  listingItem.querySelector(".lot-title").innerText = listingData.title;
  listingItem.querySelector(".lot-description").innerText =
    listingData.description;
  if (!itemPrice) {
    listingItem.querySelector(".lot-price").innerText = `00.00 ,-`;
  } else {
    listingItem.querySelector(".lot-price").innerText = `${itemPrice}.00 ,-`;
  }
  listingItem.querySelector(".lot-deadline").innerText = listingData.endsAt;
  //
  listingData.tags.forEach((e) => {
    listingItem.querySelector(".tag").classList.add("subtext", "tagStyle");
    listingItem.querySelector(".tag").innerText = `${e}`;
  });
  //

  return listingItem;
}

export function renderListingItems(listingDataList, parent) {
  parent.append(...listingDataList.map(itemTemplate));
}
