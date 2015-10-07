 var Havel = ["<ul class=\"headlines\"><li>Exprezident Václav Havel vyzval k boření společenských a politických zdí.</li></ul>"];

var displayHavel = Havel[Math.floor(Math.random() *Havel.length)]; 

var div = document.createElement ("div");
div.innerHTML = displayHavel;

document.getElementsByClassName("headlines")[0].setAttribute("id", "headlines");
var Novinky = document.getElementById("headlines");
Novinky.appendChild(div);
