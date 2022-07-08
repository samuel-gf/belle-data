const T_PRECISION = 20;
var svg;	// 360x640
var arrItems = [];
var yPos = [];
var arrMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
	"Septiembre", "Octubre", "Noviembre", "Diciembre"];


window.addEventListener("DOMContentLoaded", function() {
	setup();
	main();
});


async function main(){
	var maxVal = 0;
	for (var i=json.dates.length-2; i>=0; i--){
		var arrDate = json.dates[i].split("M");
		document.getElementById("fecha").innerHTML = arrDate[0]+" "+arrMes[Number.parseInt(arrDate[1])-1];
		var arrVal = [];
		for (var serie=0; serie<arrItems.length; serie++){
			arrVal[serie] = json.data[serie][i];
		}
		var arrSortedKeys = mySort(arrVal);
		var maxVal = json.data[arrSortedKeys[0]][i];
		for (var serie=0; serie<arrItems.length; serie++){
			var val = json.data[serie][i];
			arrItems[serie].newVal(val);
			arrItems[serie].change(null, yPos[arrSortedKeys.indexOf(serie)], 
				(val/maxVal)*svg.width-2*svg.margin, null, 500);
		}
		await sleep(600);
	}
}

function setup(){
	var w = window.innerWidth;
	var h = window.innerHeight;
	svg = new SvgCanvas(w, h);
	const margin = 40;
	svg.margin = margin;
	svg.line("OX", margin, h-margin, w-margin, h-margin, "stroke:black; stroke-width: 2;");
	svg.line("OY", margin, margin, margin, h-margin, "stroke:black; stroke-width: 2;");

	for (var i=0; i<json.names.length; i++){
		yPos[i] = 4*margin+33*i;
		var r = Math.random()*4+1;
		arrItems[i] = new Item(i, margin, yPos[i], 0.5*w-2*margin, 30, json.names[i], 'rgb('+r*64+',0,'+(63+16*i)+')');
	}
	svg.text("fecha", 4*margin, 2*margin, "", "grey", "1rem", "bold", "");
	svg.text("titulo", 2*margin, 2*margin, "", "black", "2rem", "bold", "");
	document.getElementById("titulo").innerHTML = "IPC";
}

function mySort(arrInput){
	var arrOutput = [];	// Array of keys
	for (var n=0; n<arrInput.length; n++){
		var mayor = 0;
		var key = -1;
		for (var i=0; i<arrInput.length; i++){
			if (arrInput[i]!=null && arrInput[i]>mayor) {
				mayor = arrInput[i];
				key = i;
			}
		}
		arrOutput.push(key);
		delete arrInput[key];
	}
	return arrOutput;	// Array of keys
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
