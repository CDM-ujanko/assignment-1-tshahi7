console.log('The new file!');

var x = 'a string variable';
console.log(x);

//console.log(document);

//console.log($(document));
console.log($('#myID p'));
var $mydiv = $('#myID');
var mydiv = document.getElementById('#myId');
mydiv.setAttribute('style', 'color: #0FFFFF');

console.log($mydiv.css("color"));

$mydiv..css("color");

console.log(mydiv);

 // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
 //   <script src="index.js"></script>

// console.log($);
$( document ).ready(function() {
//handler for .ready() called.
console.log('I am ready');
});