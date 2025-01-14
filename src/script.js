//Javascript for reactive Components

//Code for toggling dark mode
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