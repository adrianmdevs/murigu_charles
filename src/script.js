// Logic for toggling theme modes
document.addEventListener('DOMContentLoaded',()=>{
    const toggleButton = document.getElementById('theme-toggle');
    const rootDocument = document.documentElement;

    //Icons for dark & light modes respectively
    const moonIcon = document.getElementById('dark-mode');
    const sunIcon = document.getElementById('light-mode');

    //Save Theme to localStorage and 'remember' on refresh or re-visits
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
// Toggle icons on mode change
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

// Logic for carousel slider
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
    const updateActiveSlide = index => {
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
      //Display previous slide
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateActiveSlide(currentIndex);
    };
  
    // Function to jump to a specific slide
    const goToSlide = index => {
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
  
    // Pause auto-slide on hover and resume on mouseout
    carousel.addEventListener("mouseenter", stopAutoSlide);
    carousel.addEventListener("mouseleave", startAutoSlide);
  
    // Initialize the carousel
    updateActiveSlide(currentIndex);
    startAutoSlide();
  });
  
// Modal logic
document.addEventListener('DOMContentLoaded', ()=>{
    const mobileButton = document.getElementById('mobileBtn');
    const desktopButton = document.getElementById('desktopBtn')
    const modalOverlay = document.getElementById('overlay');
    const mainModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    const main = document.getElementById('main');
    const content = document.getElementById('content')
    
    //Raise modal anytime button is clicked
    mobileButton.addEventListener('click', ()=>{
      //console.log('clicked');
      modalOverlay.classList.remove('hidden');
      modalOverlay.classList.add('flex');
      content.classList.add('blur-sm');
    });
     desktopButton.addEventListener('click', ()=>{
      //console.log('clicked');
      modalOverlay.classList.remove('hidden');
      modalOverlay.classList.add('flex');
      content.classList.add('blur-sm');
    });
    closeModal.addEventListener('click',() =>{
      modalOverlay.classList.remove('flex');
      modalOverlay.classList.add('hidden');
      content.classList.remove('blur-sm');
    })
  });

// logic for development & marketing containers slider


// logic for footer dynamic age display
let currentYear = document.getElementById('current-year');
let thisYear = new Date();
const thisDate = thisYear.getFullYear();
currentYear.innerHTML = thisDate;




