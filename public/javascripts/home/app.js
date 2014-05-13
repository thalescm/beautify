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

	for (var index in PSD["List scroll"].subViews) {
		var otherCell = PSD["List scroll"].subViews[index];
		otherCell.visible = false;
	}

	cell.visible = true;

	var lastPosition = cell.y;

	cell.animate({
			properties:{y: (PSD["List scroll"].scrollPoint)},
			curve: "spring(100,10,500)",
			time: 1000
	});

	PSD[cell.name + "Bg"].animate({
		properties:{height: 900},
		time: 100
	})

	PSD["List scroll"].scrollVertical = false;

	PSD["BackIcon"].once("click", function(ev) {
		closeCell(cell, lastPosition);
	});

	PSD["BackIcon"].visible = true;
}

// Simple reusable function that binds a bounce to a click on a view
function closeCell(cell, lastPosition) {

	animation1 = new Animation({
		view: cell,
		properties:{y: lastPosition},
		curve: "spring(100,10,500)"
	});

	for (var index in PSD["List scroll"].subViews) {
			var otherCell = PSD["List scroll"].subViews[index];
			otherCell.visible = true;
	}

	animation1.on("end", function() {
		PSD["List scroll"].scrollVertical = true;
		configureCell(cell);
	});


	PSD["BackIcon"].visible = false;

	animation1.start();

	PSD[cell.name + "Bg"].animate({
		properties:{height: 193},
		time: 100
	})
}

function configureCell(cell) {
	cell.once("click", function(ev) {
		openCell(cell);
	});
}


// Loop through all the exported views
for (var index in PSD["List scroll"].subViews) {
	configureCell(PSD["List scroll"].subViews[index]);
}

console.log(PSD);

PSD["BackIcon"].visible = false;

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


