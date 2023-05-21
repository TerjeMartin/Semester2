import { apiBase, apiAuthRegis } from "../../api/apiEndpoints/apiEndpoints.mjs";
import { regiSuccess } from "./successStyle.mjs";

export async function userRegistration(name, email, password) {
  try {
    const response = await fetch(`${apiBase}${apiAuthRegis}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
console.log(response);
    if (response.ok) {
      regiSuccess();
      setTimeout(() => {
        window.location.pathname = "/login/index.html";
      }, 1000);
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
    alert("There was an issue, refresh and try again");
  }
}
