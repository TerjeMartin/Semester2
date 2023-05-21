import * as storage from "../../../utilities/storage/index.mjs";

export async function getListings(url) {
  try {
    const response = await fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storage.load("token")}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getListing(url) {
  try {
    const response = await fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storage.load("token")}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
