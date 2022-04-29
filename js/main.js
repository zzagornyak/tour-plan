const hotelSwiper = new Swiper('.hotel-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
  });
  const reviewsSwiper = new Swiper('.reviews-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
  });

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function() {
  console.log("Клик по кнопке меню")
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible")
});