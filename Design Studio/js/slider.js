$(document).ready(function(){

  var slider = $('#slider');

  var btnAnterior = $('#btnAnterior');

  var btnSiguiente = $('#btnSiguiente');

  //Pasar último slider al primer lugar

  $('#slider .slide:last').insertBefore('#slider .slide:first');

  // Con margen negativo se vuelve a mostrar el primer slide

  slider.css('margin-left', '-43%');

  //Función para que el slide se mueva para la derecha

  function moverDerecha(){

    if (!slider.is(':animated')) {

      slider.animate({
        marginLeft: '-105.6%'
      }, 700, function(){
        $('#slider .slide:first').insertAfter('#slider .slide:last');
        slider.css('margin-left', '-43%');
        resetInterval();
      });
    }
  }

  btnSiguiente.on('click', moverDerecha);

  //Función para que el slide se mueva para la derecha

  function moverIzquierda(){

    if (!slider.is(':animated')) {

      $('#slider .slide:last').insertBefore('#slider .slide:first');

      slider.css('margin-left', '-105.6%');

      slider.animate({
        marginLeft: '-43%'
      }, 700, function(){
        resetInterval();
      });
    }
  }

  btnAnterior.on('click', moverIzquierda);

  var intervalo = setInterval(moverDerecha, 5000);

  function resetInterval(){
    clearInterval(intervalo);

    intervalo = setInterval(moverDerecha, 5000);
  }

});
