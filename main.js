import './style.css'

const filtre = document.querySelector('.filtre');
const iconSearch = document.querySelector('.icon_search');
const iconOpen = document.querySelector('.icon_open');
const fermer =  document.querySelector('.fermer');

//const prixMin = document.querySelector('#prix_min')

filtre.classList.add('filtre_masque')

fermer.addEventListener('click', ()=>{
    filtre.classList.add('filtre_masque')
    filtre.classList.remove('filtre_vu')
    //iconOpen.style.display ="flex"
    iconSearch.style.display ="none"
})

iconOpen.addEventListener('click', ()=>{
    filtre.classList.remove('filtre_masque')
    filtre.classList.add('filtre_vu')
    iconSearch.style.display ="flex"
    //iconOpen.style.display ="none"
})
