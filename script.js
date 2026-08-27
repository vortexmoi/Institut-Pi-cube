// Fonction déclenchée lors du clic sur la façade
function entrerDansLInstitut() {
    const facade = document.getElementById('facade-container');
    const hall = document.getElementById('hall-container');

    // Effet visuel de transition
    facade.style.transform = 'scale(1.1)';
    facade.style.opacity = '0';

    setTimeout(() => {
        facade.style.display = 'none';
        hall.classList.remove('hidden');
        console.log("Entrée réussie dans le hall circulaire de l'Institut Picube.");
    }, 500);
}
