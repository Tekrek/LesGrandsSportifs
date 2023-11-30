function Déroulé_PDM() {
    // Réinitialise le style des autres options
    var Déroulé_PDP = document.querySelector(".containerPDP");
    if (Déroulé_PDP) {
        Déroulé_PDP.style.display = "none";
    }

    var Déroulé_S = document.querySelector(".containerS");
    if (Déroulé_S) {
        Déroulé_S.style.display = "none";
    }

    // Détermine l'état actuel de containerPDM
    var Déroulé_PDM = document.querySelector(".containerPDM");

    if (Déroulé_PDM) {
        // Si containerPDM est déjà affiché, le masquer
        Déroulé_PDM.style.display = (Déroulé_PDM.style.display === "none" || Déroulé_PDM.style.display === "") ? "block" : "none";
    } else {
        console.error("Erreur : Élément avec la classe 'containerPDM' non trouvé.");
    }
}


function Déroulé_PDP() {
    // Réinitialise le style des autres options
    var Déroulé_PDM = document.querySelector(".containerPDM");
    if (Déroulé_PDM) {
        Déroulé_PDM.style.display = "none";
    }

    var Déroulé_S = document.querySelector(".containerS");
    if (Déroulé_S) {
        Déroulé_S.style.display = "none";
    }

    // Détermine l'état actuel de containerPDM
    var Déroulé_PDP = document.querySelector(".containerPDP");

    if (Déroulé_PDP) {
        // Si containerPDM est déjà affiché, le masquer
        Déroulé_PDP.style.display = (Déroulé_PDP.style.display === "none" || Déroulé_PDP.style.display === "") ? "block" : "none";
    } else {
        console.error("Erreur : Élément avec la classe 'containerPDP' non trouvé.");
    }
}

function Déroulé_S() {
    // Réinitialise le style des autres options
    var Déroulé_PDP = document.querySelector(".containerPDP");
    if (Déroulé_PDP) {
        Déroulé_PDP.style.display = "none";
    }

    var Déroulé_PDM = document.querySelector(".containerPDM");
    if (Déroulé_PDM) {
        Déroulé_PDM.style.display = "none";
    }

    // Détermine l'état actuel de containerPDM
    var Déroulé_S = document.querySelector(".containerS");

    if (Déroulé_S) {
        // Si containerPDM est déjà affiché, le masquer
        Déroulé_S.style.display = (Déroulé_S.style.display === "none" || Déroulé_S.style.display === "") ? "block" : "none";
    } else {
        console.error("Erreur : Élément avec la classe 'containerS' non trouvé.");
    }
}