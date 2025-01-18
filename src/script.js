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

// logic for development & marketing containers slider

// logic for footer dynamic age display
let currentYear = document.getElementById('current-year');
let thisYear = new Date();
const thisDate = thisYear.getFullYear();
currentYear.innerHTML = thisDate;

