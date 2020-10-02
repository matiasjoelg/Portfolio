$(document).ready(function(){

  var formulario = $('#formulario');

  var nombre = $('#nombre');

  var email = $('#email');

  var mensaje = $('#mensaje');

  function validacionNombre(e){

    if(nombre.val() == '' || nombre.val() == null){

      e.preventDefault();

      $('input[type="text"] + .error').css('display', 'block');
    }

    else {

      $('input[type="text"] + .error').css('display', 'none');
    }
  }

  function validacionEmail(e){

    if(email.val() == '' || email.val() == null){

      e.preventDefault();

      $('input[type="email"] + .error').css('display', 'block');
    }

    else {

      $('input[type="email"] + .error').css('display', 'none');
    }
  }

  function validacionMensaje(e){

    if(mensaje.val() == '' || mensaje.val() == null){

      e.preventDefault();

      $('textarea + .error').css('display', 'block');
    }

    else {

      $('textarea + .error').css('display', 'none');
    }
  }

  function validacion(e){
    validacionNombre(e);
    validacionEmail(e);
    validacionMensaje(e);
  }

  formulario.on('submit', validacion);

});
