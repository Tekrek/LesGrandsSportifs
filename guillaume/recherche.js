const decouverte = document.getElementById("decouverte");

console.log(decouverte);

const titresImportant = document.getElementsByClassName("titreImportant");

console.log(titresImportant);

const pseudo = document.getElementsByName("pseudo")[0];

const mdp = document.getElementsByName("mdp")[0];

console.log(pseudo);
console.log(mdp);

const inputs = document.getElementsByTagName("input");

const lesH2 = document.getElementsByTagName("h2");

console.log(inputs);
console.log(lesH2);

const deuxiemeH2 = document.querySelector("h2.titreImportant");

console.log(deuxiemeH2);

const inputSubmit = document.querySelector("input[type=submit]");

console.log(inputSubmit);

const toutLesInputs = document.querySelectorAll("input");

console.log(toutLesInputs);



const toutLesTitres = document.querySelectorAll("h1,h2");

for (const item of toutLesTitres) {
    item.classList.add("centre");
    item.classList.remove("centre");
    item.classList.toggle("centre");
}

decouverte.style.color = "blue";

mdp.setAttribute("type", "text");

const ul = document.querySelector("ul");

const li = document.createElement("li");
li.textContent = "";

ul.appendChild(li);

const fruits = ["", "", ""];

fruits.map(fruit => {
    const li2 = document.createElement("li");
    li2.textContent = fruit;
    ul.appendChild(li2);
});

const fruits2 = [
    {
        nom:"Maillot RC LENS ",
        prix: 9,
        image: "Maillot LENS 90e.png"
    },
    {
        nom: "Maillot LOSC",
        prix: 9,
        image: "maillot losc.png"
    },
    {
        nom: "Maillot SA Spurs",
        prix: 9,
        image: "spurs_1.png"
    },
    {
        nom: "Tapis de course",
        prix: 8.5,
        image: "tapis_de_course.png"
    },
    {
        nom: "Maillot Manchester City",
        prix: 9,
        image: "maillot_city_90e.png"
    },

    {
        nom: "Lot de 40 coupelles",
        prix: 8.5,
        image: "lot_40_coupelles_avec_support.png"
    },

    {
        nom: "Machine multistation",
        prix: 8.5,
        image: "machine-multistation-musculation.png"
    },

    {
        nom: "2 Haltères vert pomme 2kg",
        prix: 8.5,
        image: "haltères.png"
    },


    {
        nom: "Basket running / trail",
        prix: 8.5,
        image: "basket_trail.png"
    },

 
]
const section = document.querySelector("section");
const recherche = document.getElementById("recherche");
const inputRecherche = document.getElementById("inputRecherche");

const displayArticles = (fruits) => {

    section.innerHTML = "";

    fruits.map(fruit => {
        const lienDetailFruit = document.createElement("a");
        lienDetailFruit.href = `maillot-spurs.html?nom=${fruit.nom}`
        const card = document.createElement("article");
        const image = document.createElement("img");
        image.src = fruit.image;
        const nomFruit = document.createElement("h3");
        nomFruit.textContent = fruit.nom;
        const prix = document.createElement("p");
        prix.textContent = `${fruit.prix}0 €`;

        // card.addEventListener("click", e => {
        //     e.preventDefault();
        //     // alert("Vous avez clické sur " + fruit.nom);

        // })

        card.appendChild(image);
        card.appendChild(nomFruit);
        card.appendChild(prix);

        lienDetailFruit.appendChild(card);

        section.appendChild(lienDetailFruit);
    })
}

displayArticles(fruits2);

let fruitFiltre = fruits2;

recherche.addEventListener("click", e => {
    e.preventDefault();
    if (inputRecherche != "") {
        console.log(inputRecherche.value);
        fruitFiltre = fruits2.filter(fruit => fruit.nom.toLowerCase().includes(inputRecherche.value.toLowerCase()))
    } else {
        fruitFiltre = fruits2;
    }
    displayArticles(fruitFiltre);
})