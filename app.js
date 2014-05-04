// Hello, welcome to your new Framer project. This is where you should 
// start coding. Feel free to remove all of this code.
// 
// Just to rehash: Framer just converted all your layer groups into framer
// views. Just drop index.html (next to this file) on your browser to see
// the result. Every view is available under the global PSD object, so if you
// had a layer group called MyPhoto you can find it under PSD["MyPhoto"].
// 
// You can safely re-run the Framer app any time and this code will stay 
// intact. Framer will only update the graphics.
// 
// Some links that could come in handy:
// 
// 	- Docs: 	http://www.framer.com/documentation
// 	- Examples: http://www.framer.com/examples


// ==============================================================
// Example: bounce all the views!


// Simple reusable function that binds a bounce to a click on a view
function openCell(cell) {
	
	cell.animate({
			properties:{y:cell.superView.y},
			curve: "spring(1000,15,500)"
	});
}


// Loop through all the exported views
for (var index in PSD["List scroll"].subViews) {

	var cell = PSD["List scroll"].subViews[index];
	debugger;
	cell.on("click", function(ev) {
		openCell(cell);
	});
}

console.log(PSD);

PSD["AjustesGray"].visible = true;
PSD["AjustesPink"].visible = false;

PSD["AgendarPink"].visible = true;
PSD["AgendarGray"].visible = false;

PSD["HistoricoPink"].visible = false;
PSD["HistoricoGray"].visible = true;

PSD["List scroll"].visible = true;

PSD["AjustesGray"].on("click", function(ev) {

	PSD["AjustesGray"].visible = false;
	PSD["AjustesPink"].visible = true;

	PSD["AgendarPink"].visible = false;
	PSD["AgendarGray"].visible = true;

	PSD["HistoricoPink"].visible = false;
	PSD["HistoricoGray"].visible = true;

	PSD["List scroll"].visible = false;
});

PSD["AgendarGray"].on("click", function(ev) {

	PSD["AjustesGray"].visible = true;
	PSD["AjustesPink"].visible = false;

	PSD["AgendarPink"].visible = true;
	PSD["AgendarGray"].visible = false;

	PSD["HistoricoPink"].visible = false;
	PSD["HistoricoGray"].visible = true;

	PSD["List scroll"].visible = true;
});

PSD["HistoricoGray"].on("click", function(ev) {

	PSD["AjustesGray"].visible = true;
	PSD["AjustesPink"].visible = false;

	PSD["AgendarPink"].visible = false;
	PSD["AgendarGray"].visible = true;

	PSD["HistoricoPink"].visible = true;
	PSD["HistoricoGray"].visible = false;

	PSD["List scroll"].visible = false;
});


// PSD["List"].on("click", function(ev) {
// 	console.log(PSD["Cell 7"]);

// 	PSD["Cell 7"].animate({
// 					properties:{y:-400},
// 					curve: "spring(1000,15,500)",
// 					time: 7000
// 	});
// });


