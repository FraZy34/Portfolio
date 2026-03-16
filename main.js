document.addEventListener('DOMContentLoaded', () => {


    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement; 

    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'dark') {
            themeToggle.textContent = '☀️'; 
        } else {
            themeToggle.textContent = '🌙'; 
        }
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
        let currentTheme = htmlElement.getAttribute('data-theme');
        let newTheme;

        if (currentTheme === 'light') {
            newTheme = 'dark';
            themeToggle.textContent = '☀️'; 
        } else {
            newTheme = 'light';
            themeToggle.textContent = '🌙'; 
        }

        htmlElement.setAttribute('data-theme', newTheme);
        
        localStorage.setItem('theme', newTheme);
    });



    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links'); 

    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


    
    const allNavLinks = document.querySelectorAll('#nav-links a');

    allNavLinks.forEach(link => {
        
        link.addEventListener('click', () => {
            
            navLinks.classList.remove('active');
        });
    });

});