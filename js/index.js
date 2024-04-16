
window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 0 && !navbar.classList.contains('navbar_dark')) {
        navbar.classList.add('navbar_dark');
    } else if (window.scrollY === 0 && navbar.classList.contains('navbar_dark')) {
        navbar.classList.remove('navbar_dark');
    }
});

/*modal*/

const peli = document.getElementById ('peli');
const modal = document.querySelector('.modal-off');

peli.onclick = mostrarModal ;

function mostrarModal (){
    modal.classList.replace('modal-off' , 'modal-on');
    let modalContainer = document.querySelector('.modal-container');
    modalContainer.appendChild(peli);
};