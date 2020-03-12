$(document).ready(function () {
    //VARIABLES
    let id = "";
    let pagina;
    let pila = [];

    /*
Lógica de la web
se muestra el álbum con una página a la izquierda con el título "álbum de fotos",
y a la izquierda la primera foto.
Al hacer click en la página de la foto, se "pasa" de página, y ocurre lo siguiente:
    - La página de la izquierda se oculta
    - La página hace la animación de pasarse

PILA DE PÁGINAS:
Al pasar la página, añado la página a la pila, en la primera posición
Al ir hacia atrás, uso el método pop(), que me devuelve la última página en la pila, es decir, la que quiero borrar.


    */

    $('.pag').click(function () {
        // Si tiene la clase 'inicial' o 'anterior', hay que ir a la página siguiente. Si no,
        //ir a la anterior
        ($(this).hasClass('inicial')) || ($(this).hasClass('anterior')) ?
        pasarPagina(this): retrodecerPagina();
    });

    //Funcion pasar página
    function pasarPagina(pagina) {
        console.log("pasar página");
        if ($(pagina).hasClass('anterior')) {
            $(pagina).removeClass('anterior');

        } else if ($(pagina).hasClass('inicial')) {
            $(pagina).removeClass('inicial');
        }
        //Avanzo una página
        $(pagina).addClass('siguiente');
        //Meto la página en la pila
        pila.push(pagina);
    }

    function retrodecerPagina() {
        console.log("retroceder página");

        //Obtengo la página que quiero, y la borro de la pila
        let pagina = pila.pop();

        //console.log (getId(pagina));
        if ($(pagina).hasClass('siguiente')) {
            $(pagina).removeClass('siguiente');
        }

        $(pagina).addClass('anterior');

        if (pila.length == 0) {
            $('#fondo').animate({
                opacity: 0
            }, 1000);
        }

    }

    function getPagina(id) {
        return pagina = $('#' + id)
    }

    function getId(imagen) {
        id = $(imagen).attr('id');
        console.log(id);
        return id;
    }
});