// Declarando variables 
var tweet = document.getElementById('tweet-box');
var btnTwittear = document.getElementById('sendTwit');
var alltweets = document.getElementById('tweet-content');
var counter = document.getElementById('counter');


window.addEventListener('load', function(event) {
  // Ponemos el foco a la caja de texto del tweet y deshabilitamos el boton twittear
  tweet.focus();
  btnTwittear.disabled = true;

  // Habilitamos y deshabilitamos el boton de acuerdo a la longitud del texto ingresado
  tweet.addEventListener('keyup', function(event) {
    btnTwittear.disabled = false;
    if (event.keyCode === 8) {
      console.log(event.keyCode);
      if (tweet.innerHTML === '') {
        btnTwittear.disabled = true;
      }
    }
  });

  // Habilitamos el contador de acuerdo a la longitud del texto ingresado
  tweet.addEventListener('keypress', function(event) {
    setInterval(
      function() {
        // El color del contador cambiara de acuerdo a la longitud del texto
        counter.innerHTML = 140 - (tweet.innerHTML.length);
        if (tweet.innerHTML.length > 140) {
          counter.classList.add('red');
          counter.classList.remove('orange');
          counter.classList.remove('black');
          btnTwittear.disabled = true;
        }
        if (tweet.innerHTML.length >= 130 && tweet.innerHTML.length <= 140) {
          counter.classList.add('red');
          counter.classList.remove('orange');
          counter.classList.remove('black');
        }
        if (tweet.innerHTML.length >= 120 && tweet.innerHTML.length <= 129) {
          counter.classList.add('orange');
          counter.classList.remove('red');
          counter.classList.remove('black');
        }
        if (tweet.innerHTML.length < 120) {
          counter.classList.add('black');
          counter.classList.remove('red');
          counter.classList.remove('orange');
        }
      }
      , 100
    );
  });


  // En el botón twittear se insertará el tweet en el contenedor
  btnTwittear.addEventListener('click', function(event) {
    // Añadiendo la hora del tweet
    var fecha = new Date();
    var hour = 'Publicado a las ' + fecha.getHours() + ':' + fecha.getMinutes() + ' horas';

    var newHour = document.createElement('div');
    newHour.innerHTML = hour;
    newHour.classList.add('hour');
    alltweets.insertBefore(newHour, alltweets.childNodes[0]);

    // Añadiendo tweet
    var newDiv = document.createElement('div');
    newDiv.innerHTML = tweet.innerHTML;
    newDiv.classList.add('tweet');
    alltweets.insertBefore(newDiv, alltweets.childNodes[0]);

    tweet.innerHTML = '';
  });
});