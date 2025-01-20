//logic for toggling theme modes
document.addEventListener('DOMContentLoaded',()=>{
    const toggleButton = document.getElementById('theme-toggle');
    const rootDocument = document.documentElement;

    const moonIcon = document.getElementById('dark-mode');
    const sunIcon = document.getElementById('light-mode');

    const savedTheme = localStorage.getItem('theme');
    if(savedTheme){
        rootDocument.classList.add(savedTheme);
        updateIcons();
    }

    toggleButton.addEventListener('click',()=>{
        if(rootDocument.classList.contains('dark')){
            rootDocument.classList.remove('dark');
            localStorage.setItem('theme','light');
        }else{
            rootDocument.classList.add('dark');
            localStorage.setItem('theme','dark');
        };
        updateIcons();
    });

    function updateIcons() {
        if (rootDocument.classList.contains('dark')) {
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        }else{
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        }
    }
});

// logic for carousel slider
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("image-slider");
    const slides = carousel.querySelectorAll("[image-carousel-item] img");
    const prevButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    const indicators = carousel.querySelectorAll(".absolute button");
    const slideInterval = 5000; // 5 seconds per slide
    let currentIndex = 0;
    let autoSlide;
  
    // Function to update the active slide
    const updateActiveSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle("hidden", i !== index);
        slide.classList.toggle("block", i === index);
      });
      indicators.forEach((indicator, i) => {
        indicator.setAttribute("aria-current", i === index ? "true" : "false");
        indicator.classList.toggle("ring-0", i === index);
      });
    };
  
    // Function to move to the next slide
    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateActiveSlide(currentIndex);
    };
  
    // Function to move to the previous slide
    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateActiveSlide(currentIndex);
    };
  
    // Function to jump to a specific slide
    const goToSlide = (index) => {
      currentIndex = index;
      updateActiveSlide(currentIndex);
    };
  
    // Start the automatic slider
    const startAutoSlide = () => {
      autoSlide = setInterval(nextSlide, slideInterval);
    };
  
    // Stop the automatic slider
    const stopAutoSlide = () => {
      clearInterval(autoSlide);
    };
  
    // Event listeners
    prevButton.addEventListener("click", () => {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });
  
    nextButton.addEventListener("click", () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        stopAutoSlide();
        goToSlide(index);
        startAutoSlide();
      });
    });
  
    // Pause auto-slide on hover and resume on mouse leave
    carousel.addEventListener("mouseenter", stopAutoSlide);
    carousel.addEventListener("mouseleave", startAutoSlide);
  
    // Initialize the carousel
    updateActiveSlide(currentIndex);
    startAutoSlide();
  });
  

// logic for development & marketing containers slider

// logic for footer dynamic age display
let currentYear = document.getElementById('current-year');
let thisYear = new Date();
const thisDate = thisYear.getFullYear();
currentYear.innerHTML = thisDate;

