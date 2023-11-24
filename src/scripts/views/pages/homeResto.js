import RestaurantSource from "../../data/katalogRestoDb-source";
import { createRestaurantItemTemplate } from "../template/template-creator";

const Restaurant = {
  async render() {
    return `
      <main tabindex="0" id="mainContent" class="main-resto_container">
        <h2 tabindex="0" class="main-resto_label">
          Explore Restaurant
        </h2>
        <div id="main-resto_list" class="list-resto"></div>        
    </main>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.homeRestoKatalog();
    const restaurantContainer = document.querySelector(".list-resto");

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurant;
