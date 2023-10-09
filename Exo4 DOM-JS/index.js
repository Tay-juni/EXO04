// console.log(chanson);
// Structure de Chanson:
// - auteur: string
// - titre: string
// - paroles : [Couplet, Couplet, ...]

// Structure de Couplet:
// id : string
// type : string
// chanteur : string
// contenu: tableau contenant les lignes du couplet

// 1. Ajout de titre à la page
const titre = document.createElement('h1');
const auteurElement = document.createElement('small');
auteurElement.textContent = chanson.auteur + " -";
const titreChansonElement = document.createTextNode(chanson.titre);
titre.appendChild(auteurElement);
titre.appendChild(titreChansonElement);
document.body.appendChild(titre);


// 2. Créer une div avec la classe paroles contenue dans le fichie chanson.js
const parolesTest = document.createElement('div');
parolesTest.className ="paroles"
document.body.appendChild(parolesTest)
chanson.paroles.forEach(element => {
    const paragraphAjout = document.createElement('p');
    paragraphAjout.classList = 'refrain';
    const span = document.createElement('span');
    span.classList = 'contenu';
    const hidden = document.createElement('span');
    
        if (element.type === 'choeur') {
            hidden.classList = 'choeur hidden';
            hidden.innerHTML = "[Choeur]<br>";
        } else {
            hidden.classList = element.type;
        }
    
    const lignes = element.contenu.map(ligne => ligne + "<br>").join("");
    parolesTest.appendChild(paragraphAjout);
    paragraphAjout.append(span);
    paragraphAjout.prepend(hidden);
    span.innerHTML = lignes;

});


// 3.
const footerPage = "© Copyright 2023 - Codeloccol"
const footer = document.createElement("footer");
footer.innerText = footerPage;

let body = document.querySelector("body");
body.appendChild(footer);
// 4.
//j'ajouter des cases à cocher dans le HTML'
const caseCheck1 = document.createElement('input');
caseCheck1.setAttribute('type', 'checkbox');
caseCheck1.setAttribute('id', 'masquer-paroles');
caseCheck1.setAttribute('name', 'refrain');



const caseCheck2 = document.createElement('input');
caseCheck2.setAttribute('type', 'checkbox');
caseCheck2.setAttribute('id', 'masquer-refrains');
caseCheck2.setAttribute('name', 'refrain');

const label1 = document.createElement('label');
const label2 = document.createElement('label');
const hrr = document.createElement('hr');
document.body.insertBefore(hrr, parolesTest);

label1.innerText = "Masquer les Paroles";
label2.innerText = "Masquer les Choeurs";

label1.prepend(caseCheck1);
label2.prepend(caseCheck2);

document.body.insertBefore(label1, hrr);
document.body.insertBefore(label2, hrr);


// Récupere la case "masquer les paroles"
 const checkboxParoles = document.getElementById('masquer-paroles');
const divParoles = document.getElementById('paroles');
const labelParoles = checkboxParoles.nextSibling;
const hr = document.querySelector('hr');

caseCheck1.addEventListener('click', function() {
  if (checkboxParoles.checked) {
    parolesTest.style.display = 'none';
    labelParoles.textContent = 'Afficher les paroles';
    hr.style.display = 'none';
  } else {
    parolesTest.style.display = 'block';
    labelParoles.textContent = 'Masquer les paroles';
    hr.style.display = 'block';
  }
});
 

const checkboxRefrains = document.getElementById('masquer-refrains');
const refrains = document.querySelectorAll('p');
console.log(refrains);
const newText = checkboxRefrains.nextSibling;
const classListAjout = document.querySelectorAll('.choeur');
const contenu = document.querySelectorAll('.contenu');

caseCheck2.addEventListener('click', function(event) {
  for (let i = 1; i < refrains.length; i++) {
    if (event.target.checked) {
      contenu[i].classList.add('hidden');
      classListAjout[i].classList.remove('hidden');
      newText.textContent = 'Masquer les Choeurs';

      classListAjout[i].addEventListener('mouseenter', () => {
          contenu[i].classList.remove('hidden');
          });
      classListAjout[i].addEventListener('mouseleave', () => {
        contenu[i].classList.add('hidden');
        });
    } else {
      contenu[i].classList.remove('hidden');
      classListAjout[i].classList.add('hidden');
      newText.textContent = 'Afficher les Choeurs';
    }
    
  }
})

 const paragraph = document.querySelectorAll('p');
 console.log(paragraph);
 paragraph.forEach(element => {
   element.setAttribute('style', 'margin: 20px');
 });

