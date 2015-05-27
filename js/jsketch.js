$(document).ready(function() {
	generateGrid(16);
});

function generateGrid(size) {
	
	$("#etch").empty();
	$("#etch").css("width", size * 20 + "px");
	$("#etch").css("height", size * 20 + "px");

	for (i = 0; i < size; i++) {
		var row = document.createElement("div");
		row.className = "row";

		for (j = 0; j < size; j++) {
			var temp = document.createElement("div");
			temp.className = "square";
			//temp.id = "R" + i + " C" + j;
			$("#etch").append(temp);
		}
	}

	$("div.square").hover(function() {
		$(this).addClass("hover");
	});
}

function clickClear() {
	var gridSize = prompt("Enter size of new grid", "16");
	generateGrid(gridSize);
}