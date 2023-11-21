
// // JS pour la taille :

let taille = document.getElementById("taille");
for (let i = 60; i <= 250; i++) {
    taille.innerHTML += (`<option value="${i}">${i} cm</option>`);
}

// // JS pour l'âge :

let age = document.getElementById("âge");
for (let i = 15; i <= 99; i++) {
    age.innerHTML += (`<option value="${i}">${i} ans</option>`);
}

let poids = document.getElementById("poids");
for (let i = 30; i <= 150; i++) {
    poids.innerHTML += (`<option value="${i}">${i} kg</option>`);
}