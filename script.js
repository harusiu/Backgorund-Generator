var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var randomColorBtn = document.getElementById("randomColorBtn");
var copyBtn = document.getElementById("copyBtn");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ", " + color3.value + ")";

	css.textContent = body.style.background + ";";
}

function getColorInHex() {
	var colorInHex = Math.floor((Math.random() * 255) + 1).toString(16);
	if (colorInHex < 10) {
		colorInHex = "0" + colorInHex.toString();
	};
	return colorInHex;
}

function randomSingleColor() {
	var rr = getColorInHex();
	var gg = getColorInHex();
	var bb = getColorInHex();
	var randomColorInHex = "#" + rr + gg + bb;
	return randomColorInHex;
}

function randomColors() {
	color1.value = randomSingleColor();
	color2.value = randomSingleColor();
	color3.value = randomSingleColor();
	setGradient();
}

function copyCssBackground() {
	//copy text to clipboard without user selecting it
	//Reference from https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
	var temp = document.createElement('textarea');
	temp.value = css.textContent;
	temp.setAttribute("readonly", "");	//||||||||||||||||||||||||||||||||
	temp.style.position = "absolute";	//without the textarea being shown
	temp.style.left = "-9999px";		//||||||||||||||||||||||||||||||||
	document.body.appendChild(temp);
	temp.select();
	document.execCommand("copy");
	document.body.removeChild(temp);

	alert("You've copied this: \n" + css.textContent + "\n Just paste it in your css code!");
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);

randomColorBtn.addEventListener("click", randomColors);

copyBtn.addEventListener("click", copyCssBackground);