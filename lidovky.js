 var Havel = ["<p>„Člověk prostě není Bůh a hra na něj se mu krutě mstí,“ odpověděl bývalý prezident Václav Havel na žádost redakce o komentář.</p>", "<p>Václav Havel k události podotýká: „Z naší země, budeme-li chtít, může už natrvalo vyzařovat láska, touha po porozumění, síla ducha a myšlenky. Toto záření může být přesně tím, co můžeme nabídnout jako náš osobitý příspěvek světové politice.“</p>", "<p>K vývoji se vyjádřil i bývalý prezident Václav Havel. Připomněl, že podle něj „naděje není přesvědčení, že něco dobře dopadne, ale jistota, že má něco smysl, bez ohledu na to, jak to dopadne.“</p>", "<p>„Život je radostná spoluúčast na zázraku bytí,“ glosoval událost bývalý prezident Václav Havel.</p>", "<p>Redakci se podařilo získat i vyjádření někdejšího prezidenta Václava Havla: „Rozum, pokora a odpovědnost musí zvítězit nad krátkozrakostí, pýchou a svévolí,“ doufá.", "<p>„Zdá se mi, že naší hlavní chybou byla pýcha,“ upozornil na možné jádro celého problému bývalý prezident Václav Havel.</p>"];

var displayHavel = Havel[Math.floor(Math.random() *Havel.length)]; 

var div = document.createElement ("div");
div.innerHTML = displayHavel;

var lidovky = document.getElementById("art-text");
lidovky.appendChild(div);
