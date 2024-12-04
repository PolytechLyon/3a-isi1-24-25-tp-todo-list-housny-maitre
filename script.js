document.addEventListener("DOMContentLoaded", () => {
    const listeDeTaches = document.getElementById("todo-list");
    const champNouvelleTache = document.getElementById("new-todo-item-title");
    const boutonAjouterTache = document.getElementById("new-todo-item-add");
    const panneauEdition = document.getElementById("edit-item");
    const champEdition = document.getElementById("edit-todo-item-title");
    const boutonConfirmerEdition = document.getElementById("edit-todo-item-confirm");
    const boutonAnnulerEdition = document.getElementById("edit-todo-item-cancel");
    const panneauAjoutTache = document.getElementById("new-item");
  
    let tacheEnEdition = null;
  
    boutonAjouterTache.addEventListener("click", () => {
      const titre = champNouvelleTache.value.trim();
      if (titre) {
        ajouterTache(titre);
        champNouvelleTache.value = "";
      }
    });
  
    function ajouterTache(titre) {
      const elementListe = document.createElement("li");
      const spanTexte = document.createElement("span");
      spanTexte.textContent = titre;
      elementListe.appendChild(spanTexte);
  
      const boutonModifier = creerBouton("Edit", () => activerModeEdition(elementListe, spanTexte.textContent));
      const boutonSupprimer = creerBouton("Delete", () => elementListe.remove());
  
      elementListe.appendChild(boutonModifier);
      elementListe.appendChild(boutonSupprimer);
      listeDeTaches.appendChild(elementListe);
    }
  
    function creerBouton(texte, onClick) {
      const bouton = document.createElement("button");
      bouton.textContent = texte;
      bouton.addEventListener("click", onClick);
      return bouton;
    }
  
    function activerModeEdition(element, texteActuel) {
      tacheEnEdition = element;
      champEdition.value = texteActuel;
      panneauEdition.hidden = false;
      panneauAjoutTache.hidden = true;  // Masquer le panneau d'ajout de tâche
    }
  
    boutonConfirmerEdition.addEventListener("click", () => {
      if (tacheEnEdition) {
        tacheEnEdition.querySelector("span").textContent = champEdition.value.trim();
        desactiverModeEdition();
      }
    });
  
    boutonAnnulerEdition.addEventListener("click", desactiverModeEdition);
  
    function desactiverModeEdition() {
      panneauEdition.hidden = true;
      panneauAjoutTache.hidden = false;  // Afficher de nouveau le panneau d'ajout de tâche
      tacheEnEdition = null;
    }
  });
  