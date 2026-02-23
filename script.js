document.addEventListener('DOMContentLoaded', function() {
    
    const tabs = document.querySelectorAll('.Tab');
    const cadre = document.querySelector('.cadre');
    
    const contents = [
        '<p>This is the first Tab</p>',
        '<p>This is the second Tab</p>',
        '<p>This is the third Tab</p>',
        '<p>This is the fourth Tab</p>'
    ];
    
    function setActiveTab(index) {
        // Mettre à jour le contenu
        cadre.innerHTML = contents[index];
        
        // Réinitialiser les onglets
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Activer l'onglet courant
        tabs[index].classList.add('active');
    }
    
    // Activer le premier onglet
    setActiveTab(0);
    
    // Ajouter les événements
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            setActiveTab(index);
        });
    });
});