$(document).ready(function () {
    //VARIABLES

    /*
Lógica de la web
se muestra el álbum con una página a la izquierda con el título "álbum de fotos",
y a la izquierda la primera foto.
Al hacer click en la página de la foto, se "pasa" de página, y ocurre lo siguiente:
    - La página de la izquierda se oculta
    - La página hace la animación de pasarse

    */

    $('.pag').click(function () {
        // Si tiene la clase 'inicial' o 'anterior', hay que ir a la página siguiente. Si no,
        //ir a la anterior
        ($(this).hasClass('inicial')) || ($(this).hasClass('anterior'))  ? 
        pasarPagina(this) : retrodecerPagina(this);
    });

    //Funcion pasar página
    function pasarPagina(pagina) {
        console.log("pasar página");
        if ($(pagina).hasClass('anterior')) {
            $(pagina).removeClass('anterior');
        } else if ($(pagina).hasClass('inicial')){
            $(pagina).removeClass('inicial');
        }
        //Avanzo una página
        $(pagina).addClass('siguiente');
    }

    function retrodecerPagina(pagina) {
        console.log("retroceder página");
        if ($(pagina).hasClass('siguiente')) {
            $(pagina).removeClass('siguiente')
        }
        $(pagina).addClass('anterior');

    }
});