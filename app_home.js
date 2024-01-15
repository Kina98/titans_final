function Slider() {
    const carouselSlides = document.querySelectorAll('.slide');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    const dotsSlide = document.querySelector('.dots-container');
    let currentSlide = 0;
  
    const activeDot = function (slide) {
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
    };
    activeDot(currentSlide);

    const changeSlide = function (slides) {
        carouselSlides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
    };
    changeSlide(currentSlide);

    btnNext.addEventListener('click', function () {
        currentSlide++; 
        if (carouselSlides.length - 1 < currentSlide) {
            currentSlide = 0;
        };
        changeSlide(currentSlide);
        activeDot(currentSlide);
});
    btnPrev.addEventListener('click', function () {
        currentSlide--;
        if (0 >= currentSlide) {
            currentSlide = 0;
        }; 
        changeSlide(currentSlide);
        activeDot(currentSlide);
    });

    dotsSlide.addEventListener('click', function (e) {
        if (e.target.classList.contains('dot')) {
            const slide = e.target.dataset.slide;
            changeSlide(slide);
            activeDot(slide);
        }
    });
  };
Slider();

/* ================Cookie================ */
let popUp = document.getElementById("cookiePopup");

// Function to set a flag in local storage indicating the acceptance of the cookie
const setCookieAccepted = () => {
  localStorage.setItem("cookieAccepted", "true");
};

// Function to check if the cookie has been accepted
const isCookieAccepted = () => {
  return localStorage.getItem("cookieAccepted") === "true";
};

// When user clicks the accept button
document.getElementById("acceptCookie").addEventListener("click", () => {
  // Set the flag in local storage
  setCookieAccepted();
  // Hide the popup
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});

// Check if cookie is already accepted
const checkCookie = () => {
  if (isCookieAccepted()) {
    // Hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    // Show the popup
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};

// Check if cookie is accepted when the page loads
window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 2000);
};
