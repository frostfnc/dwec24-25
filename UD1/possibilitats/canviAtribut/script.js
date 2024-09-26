let winnie = document.getElementById("winnie");

function canviaImatge() {
	if (winnie.src.match("feo")) {
		winnie.src = "img/winnie.jfif";
		winnie.style.width = "1000px";
		winnie.style.height = "400px";
	} else {
		winnie.src = "img/feo.jpeg";
		winnie.style.width = "400px";
		winnie.style.height = "100px";
	}
}

console.dir(winnie);
