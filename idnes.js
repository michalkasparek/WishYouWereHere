 var Havel = ["<p>„Člověk prostě není Bůh a hra na něj se mu krutě mstí,“ reagoval bývalý prezident Václav Havel na žádost iDnesu o komentář.</p>", "<p>Václav Havel k tématu podotýká: „Z naší země, budeme-li chtít, může už natrvalo vyzařovat láska, touha po porozumění, síla ducha a myšlenky. Toto záření může být přesně tím, co můžeme nabídnout jako náš osobitý příspěvek světové politice.“</p>", "<p>K vývoji se odpoledne vyjádřil i bývalý prezident Václav Havel. Připomněl, že „naděje není přesvědčení, že něco dobře dopadne, ale jistota, že má něco smysl, bez ohledu na to, jak to dopadne.“</p>", "<p>„Život je radostná spoluúčast na zázraku bytí,“ glosoval událost bývalý prezident Václav Havel.</p>"];

var displayHavel = Havel[Math.floor(Math.random() *Havel.length)]; 

var div = document.createElement ("div");
div.innerHTML = displayHavel;

var iDnes = document.getElementById("art-text");
iDnes.appendChild(div);
