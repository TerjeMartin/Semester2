import { load } from "../../../utilities/storage/load/load.mjs";
import { apiBase, purgeListing } from "../../apiEndpoints/apiEndpoints.mjs";

export async function removeListing(id) {
  try {
    const response = await fetch(`${apiBase}${purgeListing}${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${load("token")}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
