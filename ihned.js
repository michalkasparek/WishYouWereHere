 var Havel = ["<ul class=\"headlines\"><li>Václav Havel vyzývá k boření společenských a politických zdí.</li></ul>", "<ul class=\"headlines\"><li>Jako mediátor sporu se nabídl exprezident Václav Havel.</li></ul>", "<ul class=\"headlines\"><li>Podle Václava Havla musíme této výzvě čelit s pokorou i sebevědomím.</li></ul>"];

var displayHavel = Havel[Math.floor(Math.random() *Havel.length)]; 

var div = document.createElement ("div");
div.innerHTML = displayHavel;

document.getElementsByClassName("headlines")[0].setAttribute("id", "headlines");
var Novinky = document.getElementById("headlines");
Novinky.appendChild(div);
