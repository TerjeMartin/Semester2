import * as storage from "../../../utilities/storage/index.mjs";

import {
  apiBase,
  listingBid,
  updateProfile,
} from "../../apiEndpoints/apiEndpoints.mjs";

export async function bidOnListing(bid, id) {
  try {
    const listingIdURL = `${id}/bids`;
    const response = await fetch(`${apiBase}${listingBid}${listingIdURL}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storage.load("token")}`,
      },
      body: JSON.stringify({ amount: parseInt(bid) }),
    });
    if (response.ok) {
      const userProfile = JSON.parse(storage.load("userProfile"));
      userProfile.credits -= parseInt(bid);
      storage.save("userProfile", JSON.stringify(userProfile));
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateUserProfile(avatar) {
  try {
    const userProfile = JSON.parse(storage.load("userProfile"));
    const response = await fetch(
      `${apiBase}${updateProfile}${userProfile.name}/media`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storage.load("token")}`,
        },
        body: JSON.stringify({ avatar: avatar }),
      }
    );
    if (response.ok) {
      userProfile.avatar = avatar;
      storage.save("userProfile", JSON.stringify(userProfile));
      return await response.json();
    }
  } catch (error) {
    console.log(error);
  }
}
