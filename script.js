function entrerDansLInstitut() {
    var facade = document.getElementById("conteneur-de-facade");
    var hall = document.getElementById("conteneur-de-hall");
    
    if (facade && hall) {
        facade.style.display = "none";   // Masque complètement la façade
        hall.style.display = "flex";     // Affiche le hall en grand format
    }
}
