// import * as tondeuses from './tondeuses.json';
// 5 5
// 1 2 N
// GAGAGAGAA
// 3 3 E
// AADAADADDA

// 1 3 N
// 5 1 E

//obj = JSON.parse(json);


//console.log(tondeuses)

let coinX = 5
let coinY = 5


let code = "GAGAGAGAA"

let x = 1
let y = 2
let p = 'N'




// let code = "AADAADADDA"
//
// let x = 3
// let y = 3
// let p = 'E'
// let tmp = ''



// for (var i = 0; i < tondeuses.length; i++) {
// 	tondeuses[i]
// }


init();

for (var i = 0; i < code.length; i++) {

	if(code[i] == 'A') {
		if(p == 'N' && y+1 <= coinY ){
			console.log('avance HAUT')
			y++
		}else if(p == 'S' && y-1 >= 0){
			console.log('avance BAS')
			y--
		}
		if(p == 'E' && x+1 <= coinX){
			console.log('avance DROITE')
			x++
		}else if(p == 'W' && x-1 >= 0){
			console.log('avance GAUCHE')
			x--
		}


	} else if(code[i] == 'D'){
		if(p == 'N'){
			console.log('tourne EST')
			tmp = 'E'
		}else if(p == 'S'){
			console.log('tourne OUEST')
			tmp = 'W'
		}
		if(p == 'E'){
			console.log('tourne SUD')
			tmp = 'S'
		}else if(p == 'W'){
			console.log('tourne NORD')
			tmp = 'N'
		}
		p = tmp


	}else if(code[i] == 'G'){
		if(p == 'N'){
			console.log('tourne OUEST')
			tmp = 'W'
		}else if(p == 'S'){
			console.log('tourne EST')
			tmp = 'E'
		}
		if(p == 'E'){
			console.log('tourne NORD')
			tmp = 'N'
		}else if(p == 'W'){
			console.log('tourne SUD')
			tmp = 'S'
		}
		p = tmp
	}else{

	}
	console.log('p = ' + p)
}

console.log("fin : "+ x +" "+ y +" "+ p)


function init() {
 loadJSON(function(response) {
    var actual_JSON = JSON.parse(response);
		console.log(actual_JSON)
 });
}

function loadJSON(callback) {

	 var xobj = new XMLHttpRequest();
	 xobj.overrideMimeType("application/json");
	 xobj.open('GET', 'tondeuses.json', true);
	 xobj.onreadystatechange = function () {
				 if (xobj.readyState == 4 && xobj.status == "200") {
					 // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
					 callback(xobj.responseText);
				 }
	 };
	 xobj.send(null);
}
