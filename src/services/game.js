// Now we define a service for accessing data in game.js:

import axios from "axios";

const API_URL = "http://smarnovativelabs.com/FreeGames/api/";

class gameService {
  getAllGames() {
    return axios.get(API_URL + "home");
  }
  getSearchResult(keyword) {
    console.log(keyword);
    return axios.get(API_URL + "search?keyword=" + keyword);
  }
  getSingleGame(id) {
    return axios.get(API_URL + "game/" + id);
  }
  getAllCategories() {
    return axios.get(API_URL + "categories");
  }
  getSingleCategory(name) {
    return axios.get(API_URL + "category/" + name);
  }
}

export default new gameService();

// You can see that we add a HTTP header with the help of authHeader() function when requesting authorized resource.
