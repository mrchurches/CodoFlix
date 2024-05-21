
window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 0 && !navbar.classList.contains('navbar_dark')) {
        navbar.classList.add('navbar_dark');
    } else if (window.scrollY === 0 && navbar.classList.contains('navbar_dark')) {
        navbar.classList.remove('navbar_dark');
    }
});

/*modal*/
let iframe = document.createElement('iframe');
iframe.src = 'https://www.youtube.com/embed/_0fADAoqo10?si=nMqkXObUgbdy8dh_';
iframe.title = 'YouTube video player';

/* iframe.width = '100%';
iframe.height = '50%'; */
iframe.allowFullscreen = true;
const PELI = document.getElementById ('peli');
let modal = document.querySelector('.modal-off');

PELI.onclick = mostrarModal ;

let modalContainer = document.querySelector('.modal-container');
let fichaTecnica = document.createElement('div');

fichaTecnica.classList.add('ficha-tecnica');
fichaTecnica.innerHTML = `
    <button id="boton-volver">volver</button>
    <h2 class="titulo">Los muchachos de antes no usaban gomina</h2>
          
    <div class="argumento">
    <p>Un joven de buena familia, aconsejado por su padre, rompe con su novia para casarse con una chica de la alta sociedad.
     Ya en la madurez, casado, viejo y aburrido, rememora con tristeza el pasado. Se realza aquí también el valor de la amistad,
      aquella que tiene el joven de buena familia con su inseparable "Mocho".</p>
    </div>


    <div class="elenco">
    <h3>Elenco</h3>
    <ul>
        <li>Florencio Parravicini</li>
        <li>Mecha Ortiz</li>
        <li>Santiago Arrieta</li>
        <li>Irma Córdoba</li>
    </ul>
    </div>

    
    <div class="tecnicos">
    
    <table>
        <tr>
            <td><span>País: </span></td>
            <td>Argentina</td>
        </tr>
        <tr>
            <td><span>Año: </span></td>
            <td>1937</td>
        </tr>
        <tr>
            <td><span>Género: </span></td>
            <td>Comedia</td>
        </tr>
        <tr>
            <td><span>Duración: </span></td>
            <td>90 minutos</td>
        </tr>
        <tr>
            <td><span>Idioma(s): </span></td>
            <td>Argentino Rioplatense</td>
        </tr>
    </table>
    </div>
`;

modalContainer.appendChild(iframe);
modalContainer.appendChild(fichaTecnica);
const BOTON = document.getElementById('boton-volver');

BOTON.onclick = ocultarModal ;

function mostrarModal (){
    modal.classList.replace('modal-off' , 'modal-on');        
};

function ocultarModal () {
    modal.classList.replace('modal-on','modal-off');
};

let dato =123+"1";
console.log(typeof(dato));

//media my list


