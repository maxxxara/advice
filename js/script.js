var button = document.getElementById("button");
var title = document.querySelector(".title");
var number = document.querySelector(".number");


var info = [];



function f() {
	fetch("https://api.adviceslip.com/advice")
	.then(function(response) {
		return response.json();
	})
	.then(function(result) {
		var info = result.slip;
		newElement(info.advice, info.id);

	})
	.catch(function(error) {
		console.log(error);
	})	
}


button.onclick = function() {
	f();
}

function newElement(tit, num) {
	var appDiv = document.querySelector(".append");
	appDiv.innerHTML = ".";
	var numElem = document.createElement("p");
	numElem.setAttribute("class", "number");
	numElem.innerText = "ADVICE " +  num;
	var titleElem = document.createElement("p");
	titleElem.setAttribute("class", "title");
	titleElem.innerText = tit;
	appDiv.appendChild(numElem);
	appDiv.appendChild(titleElem);
}
