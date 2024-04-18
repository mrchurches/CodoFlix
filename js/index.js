
window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 0 && !navbar.classList.contains('navbar_dark')) {
        navbar.classList.add('navbar_dark');
    } else if (window.scrollY === 0 && navbar.classList.contains('navbar_dark')) {
        navbar.classList.remove('navbar_dark');
    }
});

/*modal*/
var iframe = document.createElement('iframe');
iframe.src = 'https://www.youtube.com/embed/_0fADAoqo10?si=nMqkXObUgbdy8dh_';
iframe.title = 'YouTube video player';
/* iframe.width = '100%';
iframe.height = '50%'; */
iframe.allowFullscreen = true;
const peli = document.getElementById ('peli');
const modal = document.querySelector('.modal-off');

peli.onclick = mostrarModal ;

function mostrarModal (){
    modal.classList.replace('modal-off' , 'modal-on');
    let modalContainer = document.querySelector('.modal-container');
    modalContainer.appendChild(iframe);

    var fichaTecnica = document.createElement('div');
    fichaTecnica.classList.add('ficha-tecnica');
    fichaTecnica.innerHTML = `
    <h2 class="titulo">Los muchachos de antes no usaban gomina</h2>
          
    <div class="argumento">
    <h3>Argumento</h3>
    <p>Un joven de buena familia, aconsejado por su padre, rompe con su novia para casarse con una chica de la alta sociedad. Ya en la madurez, casado, viejo y aburrido, rememora con tristeza el pasado. Se realza aquí también el valor de la amistad, aquella que tiene el joven de buena familia con su inseparable "Mocho".</p>
    </div>


    <div class="elenco">
    <h3>Elenco</h3>
    <ul>
        <li>Rodolfo Bebán</li>
        <li>Susana Campos</li>
        <li>Osvaldo Miranda</li>
    </ul>
    </div>

    
    <div class="tecnicos">
    <h3>Detalles Técnicos</h3>
    <table>
        <tr>
            <td>País</td>
            <td>Argentina</td>
        </tr>
        <tr>
            <td>Año</td>
            <td>1969</td>
        </tr>
        <tr>
            <td>Género</td>
            <td>Comedia</td>
        </tr>
        <tr>
            <td>Duración</td>
            <td>115 minutos</td>
        </tr>
        <tr>
            <td>Idioma(s)</td>
            <td>Español</td>
        </tr>
    </table>
    </div>`
        
    ;
    modalContainer.appendChild(fichaTecnica);
    
};