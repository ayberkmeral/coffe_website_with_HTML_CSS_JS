// =======================
// 1. SELECT ELEMENTS
// =======================

// Mobile menu buttons
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


// =======================
// 2. MOBILE MENU HANDLING
// =======================

// When hamburger icon is clicked → open/close menu
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// When close icon (X) is clicked → close menu
menuCloseButton.addEventListener("click", () => {
    // Reuse the open button toggle logic
    menuOpenButton.click();
});


// =======================
// 3. INITIALIZE SWIPER (Testimonial Slider)
// =======================

const swiper = new Swiper('.slider-wrapper', {

    loop: true,   // Enable infinite looping of slides

    // Pagination dots under slider
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Next / Prev arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // RESPONSIVENESS:
    // Number of visible slides based on screen size
    breakpoints: {
        0: {            // Mobile
            slidesPerView: 1
        },
        768: {          // Tablet
            slidesPerView: 2
        },
        1024: {         // Desktop
            slidesPerView: 3
        }
    }
});
