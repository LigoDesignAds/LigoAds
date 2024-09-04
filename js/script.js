//testimonials
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  margin: 2,
  loop: false,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

document.querySelector(".swiper-button-next").style.color = "#3369e9"; // Active color for next button
document.querySelector(".swiper-button-prev").style.color = "#c9c9c9"; // Inactive color for prev button

swiper.on("slideChange", function () {
  var totalSlides = swiper.slides.length; // Total number of slides
  var currentSlideIndex = swiper.realIndex + 1; // Active slide index plus one (adjusting for 1-based indexing)

  // Update next button color
  if (!swiper.isEnd) {
    document.querySelector(".swiper-button-next").style.color = "#3369e9"; // Active color
  } else {
    document.querySelector(".swiper-button-next").style.color = "#c9c9c9"; // Inactive color
  }

  // Update prev button color
  if (currentSlideIndex > 1) {
    document.querySelector(".swiper-button-prev").style.color = "#3369e9"; // Active color
  } else {
    document.querySelector(".swiper-button-prev").style.color = "#c9c9c9"; // Inactive color
  }
});

//testimonials

// Teams
var swiper2 = new Swiper(".slide-content2", {
  slidesPerView: 4,
  spaceBetween: 10,
  centerSlide: true,
  loop: false,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

document.querySelector(".swiper-button-next2").style.color = "#3369e9"; // Active color for next button
document.querySelector(".swiper-button-prev2").style.color = "#c9c9c9"; // Inactive color for prev button

swiper2.on("slideChange", function () {
  var totalSlides = swiper2.slides.length; // Total number of slides
  var currentSlideIndex = swiper2.realIndex + 1; // Active slide index plus one (adjusting for 1-based indexing)

  // Update next button color
  if (!swiper2.isEnd) {
    document.querySelector(".swiper-button-next2").style.color = "#3369e9"; // Active color
  } else {
    document.querySelector(".swiper-button-next2").style.color = "#c9c9c9"; // Inactive color
  }

  // Update prev button color
  if (currentSlideIndex > 1) {
    document.querySelector(".swiper-button-prev2").style.color = "#3369e9"; // Active color
  } else {
    document.querySelector(".swiper-button-prev2").style.color = "#c9c9c9"; // Inactive color
  }
});

// Teams
