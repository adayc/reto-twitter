// Declarando variables 
var tweet = document.getElementById('tweet-box');
var btnTwittear = document.getElementById('sendTwit');
var alltweets = document.getElementById('tweet-content');


window.addEventListener('load', function(event) {
 
  function addTweet(text) {
    var newDiv = document.createElement('div');
    newDiv.innerHTML = text;
    newDiv.classList.add('tweet');
    alltweets.insertBefore(newDiv, alltweets.childNodes[0]);
    tweet.innerHTML ='';
  }



  btnTwittear.addEventListener('click', function(event) {
    addTweet(tweet.innerHTML);
  });
});