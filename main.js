import './style.css'

/*const filtre = document.querySelector('.filtre');
const iconSearch = document.querySelector('.icon_search');
const iconOpen = document.querySelector('.icon_open');
const fermer =  document.querySelector('.fermer');
const body = document.body
//const prixMin = document.querySelector('#prix_min')

filtre.classList.add('filtre_masque')

fermer.addEventListener('click', ()=>{
    filtre.classList.add('filtre_masque')
    filtre.classList.remove('filtre_vu')
    //iconOpen.style.display ="flex"
    iconSearch.style.display ="none"
    body.classList.remove('no-scroll')
})

iconOpen.addEventListener('click', ()=>{
    filtre.classList.remove('filtre_masque')
    filtre.classList.add('filtre_vu')
    iconSearch.style.display ="flex"
    //iconOpen.style.display ="none"
    body.classList.add('no-scroll')
})*/

const filtre = document.querySelector('.filtre');
const iconSearch = document.querySelector('.icon_search');
const iconOpen = document.querySelector('.icon_open');
const fermer = document.querySelector('.fermer');
const body = document.body;

filtre.classList.add('filtre_masque');

fermer.addEventListener('click', () => {
    fermerFiltre();
});

iconOpen.addEventListener('click', () => {
    ouvrirFiltre();
});

// Ajouter un gestionnaire d'événements pour le formulaire
/*document.querySelector('#formulaire').addEventListener('submit', (e) => {
    // Empêcher le rechargement de la page
    e.preventDefault();
    // Continuer le traitement du formulaire si nécessaire
    // ...
    // Fermer la barre de navigation
    fermerFiltre();
});*/

function ouvrirFiltre() {
    filtre.classList.remove('filtre_masque');
    filtre.classList.add('filtre_vu');
    iconSearch.style.display = "flex";
    body.classList.add('no-scroll');
}

function fermerFiltre() {
    filtre.classList.add('filtre_masque');
    filtre.classList.remove('filtre_vu');
    iconSearch.style.display = "none";
    body.classList.remove('no-scroll');
}
