// Declarando variables 
var tweet = document.getElementById('tweet-box');
var btnTwittear = document.getElementById('sendTwit');
var alltweets = document.getElementById('tweet-content');
var counter = document.getElementById('counter');


window.addEventListener('load', function(event) {
  // Habilitando y deshabilitando el boton
  tweet.addEventListener('keyup', function(event) {
    btnTwittear.disabled = false;
    if (event.keyCode == 8) {
      console.log(event.keyCode);
      if (tweet.innerHTML === '') {
        btnTwittear.disabled = true;
      }
    }
  });

  tweet.addEventListener('keypress', function(event) {
    // longitud de texto tweet.innerHTML.length
    setInterval(
      function() {
        counter.innerHTML = 140-(tweet.innerHTML.length);
        if (tweet.innerHTML.length > 140) {
          counter.classList.add('red');
          counter.classList.remove('orange');
          counter.classList.remove('black');
          btnTwittear.disabled = true;
        }
        if (tweet.innerHTML.length >= 130 && tweet.innerHTML.length<=140) {
          counter.classList.add('red');
          counter.classList.remove('orange');
          counter.classList.remove('black');
        }
        if (tweet.innerHTML.length >= 120 && tweet.innerHTML.length<=129 ) {
          counter.classList.add('orange');
          counter.classList.remove('red');
          counter.classList.remove('black');
          
        }
        if (tweet.innerHTML.length <120 ) {
          counter.classList.add('black');
          counter.classList.remove('red');
          counter.classList.remove('orange');
          
        }

      }
      , 100
    );
  });


  btnTwittear.addEventListener('click', function(event) {
    // vamos a igualar al div o label que tiene la cantidad de caracteres
    var newDiv = document.createElement('div');
    newDiv.innerHTML = tweet.innerHTML;
    newDiv.classList.add('tweet');
    alltweets.insertBefore(newDiv, alltweets.childNodes[0]);
    tweet.innerHTML = '';
  });
});