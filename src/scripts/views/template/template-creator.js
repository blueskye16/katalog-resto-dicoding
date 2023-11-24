import CONFIG from "../../globals/config";

const createRestaurantItemTemplate = (restaurant) => `
<article tabindex="0" class="resto-item">
  <a href="/#/detail/${restaurant.id}" class="restaurant-card">
    <img class="restaurant-image lazyload" src="${
      CONFIG.BASE_IMAGE_URL + restaurant.pictureId
    }" alt="Gambar ${restaurant.name}" tabindex="0" />
    <div class="restaurant-info">
      <p tabindex="0" class="restaurant-city" alt="kota restoran">${
        restaurant.city
      }<span class="resto-item-rating" aria-label="rating resto ${
  restaurant.rating
}">&star; ${restaurant.rating}</span>
      </p>
      <p tabindex="0" class="restaurant-title" alt="nama restoran">${
        restaurant.name
      }</p>
      <p class="restaurant-description" alt="deskripsi restoran">${
        restaurant.description
      }</p>
    </div>
  </a>
</article>

`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">
<h2>${restaurant.name}</h2>
<div class="img-container">
      <img class="resto-item_image-container lazyload" src="${
        CONFIG.BASE_IMAGE_URL + restaurant.pictureId
      }" alt="Gambar ${restaurant.name}" tabindex="0"/>
    </div>
  <div class="container-info">
    
    <ul class="detail-info">
      <li class="resto-name">
        <i class="fa fa-cutlery"></i>
        <p class="detail-name">${restaurant.name}</p>
      </li>
      <li class="resto-address">
        <i class="fa fa-building"></i>
        <p class="detail-address">${restaurant.address}, ${restaurant.city}</p>
      </li>
      <li class="resto-rating">
        <i class="fa fa-star"></i>
        <p class="detail-rating">&star; ${restaurant.rating}</p>
      </li>
      <h4>Description:</h4>
      <li>
        <p class="detail-desc">${restaurant.description}</p>
      </li>
      <li class="resto-category">
        ${restaurant.categories
          .map((category) => `<span class="category">${category.name}</span>`)
          .join("")}
      </li>
    </ul>
  </div>

  <h2 tabindex="0" id="resto-detail-form-review-title"><span>List Menu</span></h2>
  <div class="restaurant-detail__menu-list">
    <div class="foods">
      <h3>Food</h3>
      <ul class="restaurant-detail__foods">
        ${restaurant.menus.foods
          .map((food) => `<li><i class="fa fa-cutlery"></i> ${food.name}</li>`)
          .join("")}
      </ul>
    </div>
    <div class="drinks">
      <h3>Drink</h3>
      <ul class="restaurant-detail__drinks">
        ${restaurant.menus.drinks
          .map((drink) => `<li><i class="fa fa-coffee"></i> ${drink.name}</li>`)
          .join("")}
      </ul>
    </div>
  </div>
  

  <h2 tabindex="0" id="resto-detail-form-review-title"><span>Reviews</span></h2>
  <div class="detail-review">
  ${restaurant.customerReviews
    .map(
      (review) => `
  <div class="detail-review-item card">
    <div class="header-review">
      <p class="name-review"><i class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>
      <p class="date-review">${review.date}</p>
    </div>
    <div class="body-review">
      ${review.review}
    </div>
  </div>
  `
    )
    .join("")}
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
