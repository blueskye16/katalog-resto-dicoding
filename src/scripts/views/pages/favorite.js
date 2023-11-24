import FavoriteRestaurantIdb from "../../data/favorite-resto-idb";
import { createRestaurantItemTemplate } from "../template/template-creator";

const Favorite = {
  async render() {
    return `
    <main tabindex="0" id="mainContent" class="main-resto_container">
    <h2 tabindex="0" class="main-resto_label">
      Favorite Restaurant
    </h2>
    <h2 class="restaurant-item__not__found"></h2>
    <div id="main-resto_list" class="list-resto"></div>        
</main>
            `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllResto();
    const restaurantContainer = document.getElementById("main-resto_list");
    const empty = document.querySelector(".restaurant-item__not__found");
    if (restaurants.length === 0) {
      empty.innerHTML = `
      <h3>Empty favorite Resto. Put one, by clicking heart button in the detail page.</h3>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
