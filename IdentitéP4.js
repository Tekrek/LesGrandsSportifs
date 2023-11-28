


// Fonction pour afficher la fenêtre modale

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
      window.location.href = "accueil.html";
    }
  });
  
