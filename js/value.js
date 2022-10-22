var red = document.getElementById("_red");
var green = document.getElementById("_green");
var blue = document.getElementById("_blue");

var rrng = document.getElementById("rrng");
var grng = document.getElementById("grng");
var brng = document.getElementById("brng");

red.oninput = function() { rrng.value = this.value; }
green.oninput = function() { grng.value = this.value; }
blue.oninput = function() { brng.value = this.value;}

rrng.oninput = function() { red.value = this.value; }
grng.oninput = function() { green.value = this.value; }
brng.oninput = function() { blue.value = this.value; }