import './style.css'

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

    // Vérifier si le filtre est actuellement ouvert avant de supprimer la classe no-scroll
    if (!filtre.classList.contains('filtre_vu')) {
        body.classList.remove('no-scroll');
    }
}

