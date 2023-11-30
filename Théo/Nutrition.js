let currentPage = 1;

function nextPage() {
    if (currentPage < 5) {
        document.getElementById(`page${currentPage}`).classList.remove('active');
        currentPage++;
        document.getElementById(`page${currentPage}`).classList.add('active');
    }
    if (currentPage === 4) {
        // Récupérer les valeurs sélectionnées dans les éléments select dans les pages précédentes
        var selectedobjectif_personnel = document.getElementById('objectif_personnel').value;
        var donnéeProtéines = document.getElementById("donnée_protéines").value;
        var donnéeGlucides = document.getElementById("donnée_glucides").value;
        var donnéeLipides = document.getElementById("donnée_lipides").value;
        var donnéeCalories = document.getElementById("donnée_calories").value;


        // Afficher les informations dans la page 4
        document.getElementById('infoobjectif_personnel').textContent = selectedobjectif_personnel;
        document.getElementById("infodonnée_protéines").textContent = donnéeProtéines + " ";
        document.getElementById("infodonnée_glucides").textContent = donnéeGlucides + " ";
        document.getElementById("infodonnée_lipides").textContent = donnéeLipides + " ";
        document.getElementById("infodonnée_calories").textContent = donnéeCalories + " ";
        document.getElementById("infomon_menu").textContent = selectedOptionText;

    }
}

function previousPage() {
    if (currentPage > 1) {
        document.getElementById(`page${currentPage}`).classList.remove('active');
        currentPage--;
        document.getElementById(`page${currentPage}`).classList.add('active');
    }
}

function showNextQuestion() {
    var q1Value = document.getElementById("besoins_caloriques").value;
    var jeLesConnais = document.getElementById("je_les_connais");
    var jeLesCalcule = document.getElementById("je_les_calcule");

    if (q1Value === "choix2") {
        jeLesConnais.style.display = "block"; // Affiche le tableau si "je les connais" est sélectionné
        jeLesCalcule.style.display = "none"; // Cache le tableau "je les calcule"
    } else if (q1Value === "choix3") {
        jeLesConnais.style.display = "none"; // Cache le tableau "je les connais"
        jeLesCalcule.style.display = "block"; // Affiche le tableau si "je les calcule" est sélectionné
        showCalculationSection(); // Appel de la fonction showCalculationSection ici
        calculerIMG(); // Appel de la fonction calculerIMG ici
        calculerMaintenance(); // Appel de la fonction calculerMaintenance ici
        showCheckBoxes2()
    } else {
        jeLesConnais.style.display = "none";
        jeLesCalcule.style.display = "none";
    }
}

function showCheckboxes2() {
    var select = document.getElementById("besoins_caloriques");
    var additionalOptions2 = document.getElementById("additionalOptions2");
    if (select.value === "choix3") {
        additionalOptions2.style.display = "inline"; // Affiche la deuxième liste déroulante
    } else {
        additionalOptions2.style.display = "none"; // Cache la deuxième liste déroulante pour les autres options

    }
}

function calculerIMG() {
    // Récupérer les valeurs depuis les éléments HTML
    const tailleEnCm = parseFloat(document.getElementById("taille").value);
    const poidsEnKg = parseFloat(document.getElementById("poids").value);
    const âge = parseFloat(document.getElementById("âge").value);
    const sexe = document.getElementById("sexe").options[document.getElementById("sexe").selectedIndex].value;
    const fréquenceSportive = document.getElementById("options_je_les_calcule").value;
    const multiplicateur = document.getElementById("pourcentages").value;

    // Convertir la taille de cm en mètres
    const tailleEnMetres = tailleEnCm / 100;

    // Déclarer les coefficients
    let coefSexe, coefPoids, coefTaille, coefAge, coefSeance, coefSexeimg, coefMultiplicateur

    // Définir les coefficients en fonction du sexe
    if (sexe === "choix1") {
        coefSexeimg = 1
        coefSexe = 77.607;
        coefPoids = 13.707;
        coefTaille = 492.3;
        coefAge = 6.673;
    } else if (sexe === "choix2") {
        coefSexeimg = 0
        coefSexe = 667.051;
        coefPoids = 9.74;
        coefTaille = 172.9;
        coefAge = 4.737;
    }

    // Définir les coefficients en fonction de la fréquence sportive
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
        coefSeance = 1.0; // Valeur par défaut si la fréquence sportive n'est pas sélectionnée
    }

    if (multiplicateur === "choixA") {
        coefMultiplicateur = 1.05;
    } else if (multiplicateur === "choixB") {
        coefMultiplicateur = 1.1;
    } else if (multiplicateur === "choixC") {
        coefMultiplicateur = 1.15;
    } else if (multiplicateur === "choixD") {
        coefMultiplicateur = 1.2;
    } else if (multiplicateur === "choixE") {
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



function showCalculationSection() {
    document.getElementById("je_les_connais").style.display = "none"; // Masquer la section "Je les connais"
    document.getElementById("je_les_calcule").style.display = "block"; // Afficher la section "Je les calcule"
    document.getElementById("options_je_les_calcule").style.display = "inline";
    document.getElementsBy("pourcentages").style.display = "inline"

    calculerIMG(); // Calculer l'IMG dès que l'utilisateur bascule vers cette section
    calculerMaintenance(); // Calculer maintenance dès que l'utilisateur bascule vers cette section
}

function handleBesoinsCaloriques() {
    var besoinsCaloriquesSelect = document.getElementById("besoins_caloriques");
    var jeLesConnais = document.getElementById("je_les_connais");
    var jeLesCalcule = document.getElementById("je_les_calcule");

    if (besoinsCaloriquesSelect.value === "choix2") {
        jeLesConnais.style.display = "block";
        jeLesCalcule.style.display = "none";
        clearResultatIMG();
        clearResultatMaintenance();
    } else if (besoinsCaloriquesSelect.value === "choix3") {
        jeLesConnais.style.display = "none";
        jeLesCalcule.style.display = "block";
        showJeLesCalculeOptions();
        showPourcentages();
        calculerIMG();
        calculerMaintenance();
    } else {
        jeLesConnais.style.display = "none";
        jeLesCalcule.style.display = "none";
    }
}

function showJeLesCalculeOptions() {
    var optionsJeLesCalculeSelect = document.getElementById("options_je_les_calcule");
    optionsJeLesCalculeSelect.style.display = "inline";
}

function showPourcentages() {
    var optionsPourcentagesSelect = document.getElementById("pourcentages");
    optionsPourcentagesSelect.style.display = "inline";
}

function clearResultatIMG() {
    document.getElementById("resultatIMG").textContent = "";
}

function clearResultatMaintenance() {
    document.getElementById("resultatMaintenance").textContent = "";
}

function updateMaintenance() {
    calculerIMG(); // Appelez la fonction pour recalculer les valeurs
}

// Récupérez l'élément du menu déroulant
const selectElement = document.getElementById("options_je_les_calcule");

// Ajoutez un gestionnaire d'événement "change" sur le menu déroulant
selectElement.addEventListener("change", updateMaintenance);

function showPourcentages() {
    const selectElement = document.getElementById("options_je_les_calcule");
    const pourcentages = document.getElementById("pourcentages");

    // Vérifie si "je_les_calcule" a une option parmi "choixA" à "choixE" et affiche "pourcentages" en conséquence
    if (selectElement.value === "choixA" || selectElement.value === "choixB" || selectElement.value === "choixC" || selectElement.value === "choixD" || selectElement.value === "choixE") {
        pourcentages.style.display = "inline";
    } else {
        pourcentages.style.display = "none";
    }
}



function openModal() {
    var modal = document.getElementById("myModal");
    var modalContent = document.querySelector(".modal-content");
  
    // Effet d'apparition progressive avec une transition de 2 secondes
    modal.style.display = "block";
  
    modalContent.style.opacity = 0;
    setTimeout(function () {
      modalContent.style.opacity = 1;
    }, 10);
  }
  
  
  // Fonction pour fermer la fenêtre modale
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Attachez ces fonctions à votre bouton "submit"
  var submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", function () {
    var suivipersonnaliseRadio = document.getElementById("demo2-a");
    var nosprogrammesRadio = document.getElementById("demo2-b");
  
    if (suivipersonnaliseRadio.checked) {
      openModal();
    } else if (nosprogrammesRadio.checked) {
      window.location.href = "ProgrammeP1.html";
    }
  });
  
