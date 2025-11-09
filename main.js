// Attend que le DOM (la page) soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {

    // ============ GESTION DU MODE NUIT/JOUR (THEME) ============

    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement; // C'est la balise <html>

    // 1. Vérifier le thème sauvegardé dans le localStorage au chargement
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        // Si un thème est sauvegardé, on l'applique
        htmlElement.setAttribute('data-theme', savedTheme);
        // On met à jour l'icône du bouton
        if (savedTheme === 'dark') {
            themeToggle.textContent = '☀️'; // Icône soleil si le thème est sombre
        } else {
            themeToggle.textContent = '🌙'; // Icône lune si le thème est clair
        }
    } else {
        // S'il n'y a pas de thème sauvegardé, on met 'light' par défaut
        htmlElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
    }

    // 2. Écouteur d'événement sur le bouton de thème
    themeToggle.addEventListener('click', () => {
        // Récupérer le thème actuel
        let currentTheme = htmlElement.getAttribute('data-theme');
        let newTheme;

        // Logique de bascule (toggle)
        if (currentTheme === 'light') {
            newTheme = 'dark';
            themeToggle.textContent = '☀️'; // On affiche le soleil
        } else {
            newTheme = 'light';
            themeToggle.textContent = '🌙'; // On affiche la lune
        }

        // Appliquer le nouveau thème à la balise <html>
        htmlElement.setAttribute('data-theme', newTheme);
        
        // Sauvegarder le nouveau thème dans le localStorage
        localStorage.setItem('theme', newTheme);
    });


    // ============ GESTION DU MENU HAMBURGER (MOBILE) ============

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links'); // Le <ul>

    // 1. Écouteur pour ouvrir/fermer le menu en cliquant sur le hamburger
    menuToggle.addEventListener('click', () => {
        // Ajoute ou retire la classe 'active' sur la liste <ul>
        navLinks.classList.toggle('active');
    });


    // ============ FERMETURE DU MENU AU CLIC SUR UN LIEN ============
    
    // 1. On sélectionne TOUS les liens <a> qui sont dans le menu #nav-links
    const allNavLinks = document.querySelectorAll('#nav-links a');

    // 2. On fait une boucle sur chaque lien
    allNavLinks.forEach(link => {
        
        // 3. On ajoute un écouteur de clic à CHAQUE lien
        link.addEventListener('click', () => {
            
            // 4. Quand un lien est cliqué, on retire la classe 'active' du menu
            navLinks.classList.remove('active');
        });
    });

}); // Fin de l'événement DOMContentLoaded