
// // JS pour la taille :

let taille = document.getElementById("taille");
for (let i = 60; i <= 250; i++) {
    taille.innerHTML += (`<option value="${i}">${i} cm</option>`);
}

taille.addEventListener("change", createLocalStorage);

// // JS pour l'âge :

let age = document.getElementById("age");
for (let i = 15; i <= 99; i++) {
    age.innerHTML += (`<option value="${i}">${i} ans</option>`);
}

age.addEventListener("change", createLocalStorage);



let poids = document.getElementById("poids");
for (let i = 30; i <= 150; i++) {
    poids.innerHTML += (`<option value="${i}">${i} kg</option>`);
}

function poidsValue(){
    console.log(poids.value);
}

poids.addEventListener("change", createLocalStorage);

let identite = {
    poids: poids.value,
    taille: taille.value,
    sexe: sexe.value,
    age: age.value
}

// Stockage local des données pour la page 3 :
function createLocalStorage() {
    
    if (localStorage.getItem("identite")) {
        localStorage.removeItem("identite");
    }
    identite.poids = poids.value;
    identite.taille = taille.value;
    identite.sexe = sexe.value;
    identite.age = age.value;
    localStorage.setItem("identite", JSON.stringify(identite));
}
