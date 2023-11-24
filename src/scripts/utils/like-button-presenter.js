import {
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
} from "../views/template/template-creator";

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;
    await this._renderButton();
  },

  async _renderButton() {
    try {
      const { id } = this._restaurant;

      if (await this._isRestaurantExist(id)) {
        this._renderLikedButton();
      } else {
        this._renderLikeButton();
      }
    } catch (err) {
      console.error(err);

      throw new Error(err);
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getResto(id);
    return !!restaurant;
  },

  _renderLikeButton() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.getElementById("likeButton");
    likeButton.addEventListener("click", async () => {
      await this._favoriteRestaurants.putResto(this._restaurant);
      this._renderButton();
    });
  },

  _renderLikedButton() {
    this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate();

    const likedButton = document.getElementById("likeButton");
    likedButton.addEventListener("click", async () => {
      await this._favoriteRestaurants.deleteResto(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
