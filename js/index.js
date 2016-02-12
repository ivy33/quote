var quotes=[["Not everyone is meant to be in your future. Some people are just passing through to teach you lessons in life.", "Unknown"],["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.","Helen Keller"],["Perfection is not attainable, but if we chase perfection we can catch excellence","Vince Lombardi"] ];

var quotes=[{text:"Not everyone is meant to be in your future. Some people are just passing through to teach you lessons in life.", author:"Unknown"},{text:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",author:"Helen Keller"},{text:"Perfection is not attainable, but if we chase perfection we can catch excellence",author:"Vince Lombardi"} ];

var lastIndex = quotes.length-1;
$(".new").click(function(){
  getRandomQuote();
});
$(window).load(function(){
  getRandomQuote();
});

function getRandomQuote(){
var i=getRandomInt(0, quotes.length-1);
$(".text").text(quotes[i].text);
$(".author").text("~ "+quotes[i].author);
};


function getRandomInt(min, max) {
  var curIndex=lastIndex;
  while (curIndex===lastIndex){
  curIndex=Math.floor(Math.random() * (max - min + 1)) + min;
  }
  lastIndex=curIndex;
  return curIndex;
};