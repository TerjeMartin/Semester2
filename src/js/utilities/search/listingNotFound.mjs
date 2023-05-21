export function listingNotFound(container) {
    //
    container.innerHTML = `<div class="container vh-100">
                              <div class="row text-center my-3">
                                  <div>
                                      <img class="img-fluid" src="" alt="">
                                  </div>
                                  <h3 class="">Something went wrong</h3>
                                  <p>The listing/author you are looking for was not found in our database, please try again.</p>
                              </div>
                          </div>`;
  }