
// Récupération de l'objet identité depuis le stockage local
let identiteString = localStorage.getItem("identite");

// Vérification si l'objet identiteString existe avant de le parser
if (identiteString) {
    // Conversion de la chaîne JSON en objet JavaScript
    let identite = JSON.parse(identiteString);

    // Vous pouvez maintenant utiliser l'objet identite comme vous le souhaitez
    console.log("Poids:", identite.poids, "kg");
    console.log("Taille :", identite.taille, "cm");
    console.log("Sexe :", identite.sexe);
    console.log("Âge :", identite.age, "ans");
} else {
    console.log("Aucune information d'identité n'a été trouvée dans le stockage local.");
}




function tableau() {
    var BesoinsCaloriques = document.getElementById("besoins_caloriques");
    var BesoinsConnus = document.getElementById("besoins_connus");
    var CalculBesoins = document.getElementById("calcul_besoins");
    var Frequence_sportive = document.getElementById("Frequence_sportive");
    var Texte_Frequence = document.getElementById("Texte_Frequence");

    if (BesoinsCaloriques.value === "Je_les_connais") {
        BesoinsConnus.style.display = "block";
        CalculBesoins.style.display = "none";
        Frequence_sportive.style.display = "none";
        Texte_Frequence.style.display = "none";


    } else if (BesoinsCaloriques.value === "Je_les_calcule") {
        BesoinsConnus.style.display = "none";
        CalculBesoins.style.display = "flex";
        Frequence_sportive.style.display = "block";
        Texte_Frequence.style.display = "block";

    } else {
        BesoinsConnus.style.display = "none";
        CalculBesoins.style.display = "none";
        Frequence_sportive.style.display = "none";
        Texte_Frequence.style.display = "none";

    }
}

function FrequenceSportive() {
    var Frequence_sportive = document.getElementById("Frequence_sportive");
    var Pourcentages = document.getElementById("pourcentages");


    if (Frequence_sportive.value === "ChoixA" || "ChoixB" || "ChoixC" || "ChoixD" || "ChoixE"){
        Pourcentages.style.display = "block";
        Texte_Pourcentage.style.display = "block";

    }else {
        Pourcentages.style.display = "none";
        Texte_Pourcentage.style.display = "none";
    }
}



function calculerIMG() {

    const tailleEnCm = parseFloat(identite.taille);
    const tailleEnMetres = tailleEnCm / 100;
    const poidsEnKg = parseFloat(identite.poids);
    const âge = parseFloat(identite.age);
    const sexe = identite.sexe;
    const fréquenceSportive = document.getElementById("Frequence_sportive").value;
    const multiplicateur = document.getElementById("pourcentages").value;

    let coefSexe, coefPoids, coefTaille, coefAge, coefSeance, coefSexeimg, coefMultiplicateur

    // 1ère condition : choix du sexe

    if (sexe === "Homme") {
        coefSexeimg = 1
        coefSexe = 77.607;
        coefPoids = 13.707;
        coefTaille = 492.3;
        coefAge = 6.673;
    } else if (sexe === "Femme") {
        coefSexeimg = 0
        coefSexe = 667.051;
        coefPoids = 9.74;
        coefTaille = 172.9;
        coefAge = 4.737;
    }

    // 2ème condition : choix fréquence sportive

    if (fréquenceSportive === "choixA") {
        coefSeance = 1.15;
    } else if (fréquenceSportive === "choixB") {
        coefSeance = 1.25;
    } else if (fréquenceSportive === "choixC") {
        coefSeance = 1.44;
    } else if (fréquenceSportive === "choixD") {
        coefSeance = 1.55;
    } else if (fréquenceSportive === "choixE") {
        coefSeance = 1.7;
    } else {
        coefSeance = 1.0;
    }

    // 3ème condition : choix multiplicateur calorique


    if (multiplicateur === "choix1") {
        coefMultiplicateur = 1.05;
    } else if (multiplicateur === "choix2") {
        coefMultiplicateur = 1.1;
    } else if (multiplicateur === "choix3") {
        coefMultiplicateur = 1.15;
    } else if (multiplicateur === "choix4") {
        coefMultiplicateur = 1.2;
    } else if (multiplicateur === "choix5") {
        coefMultiplicateur = 1.25;
    } else {
        coefMultiplicateur = 1.0; // Valeur par défaut si le multiplicateur n'est pas sélectionné
    }

    // Calcul de l'IMG
    const img = (1.20 * (poidsEnKg / (tailleEnMetres * tailleEnMetres))) + (0.23 * âge) - (10.8 * coefSexeimg) - 5.4;

    // Calcul de la maintenance
    const maintenance = ((coefPoids * poidsEnKg) + (coefTaille * tailleEnMetres) - (coefAge * âge) + coefSexe) * coefSeance * coefMultiplicateur;


    // Affichage des résultats
    document.getElementById("resultatIMG").textContent = `Votre IMG est de : ${img.toFixed(2)}`;
    document.getElementById("resultatMaintenance").textContent = `Votre maintenance est de : ${maintenance.toFixed(2)}`;
}