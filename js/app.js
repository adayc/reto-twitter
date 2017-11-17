// Declarando variables 
var tweet = document.getElementById('tweet-box');
var btnTwittear = document.getElementById('sendTwit');
var alltweets = document.getElementById('tweet-content');


window.addEventListener('load', function(event) {
 


  btnTwittear.addEventListener('click', function(event) {
    var newDiv = document.createElement('div');
    newDiv.innerHTML = tweet.innerHTML;
    newDiv.classList.add('tweet');
    alltweets.insertBefore(newDiv, alltweets.childNodes[0]);
    tweet.innerHTML ='';
  });

  
});