import './style.css'

const filtre = document.querySelector('.filtre');
const iconSearch = document.querySelector('.icon_search');
const iconOpen = document.querySelector('.icon_open');
const fermer = document.querySelector('.fermer');
//const body = document.body;
const annuaire = document.querySelector('#annuaire')

filtre.classList.add('filtre_masque');

fermer.addEventListener('click', () => {
    fermerFiltre();
});

iconOpen.addEventListener('click', () => {
    ouvrirFiltre();
});

function ouvrirFiltre() {
    filtre.classList.remove('filtre_masque');
    filtre.classList.add('filtre_vu');
    iconSearch.style.display = "flex";
    //body.classList.add('no-scroll');
    //filtre.style.position ='fixed'
    annuaire.classList.add('masque_annuaire');
   
}

function fermerFiltre() {
    filtre.classList.add('filtre_masque');
    filtre.classList.remove('filtre_vu');
    iconSearch.style.display = "none";
    //filtre.style.position ='static'
    annuaire.classList.remove('masque_annuaire');
}

