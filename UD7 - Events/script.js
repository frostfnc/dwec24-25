// Show position of mouse in console when mouse is moved
// window.addEventListener("mousemove", (e) => {
// 	console.log(e.clientX, e.clientY);
// });

// let button = document.querySelector("button");
// button.addEventListener("mousedown", (e) => {
// 	console.log(e);
// 	if (e.button == 0) {
// 		console.log("Left");
// 	} else if (e.button == 1) {
// 		console.log("Middle");
// 	} else if (e.button == 2) {
// 		console.log("Right");
// 	}
// });

// let paragraph = document.getElementsByTagName("p")[0];
// let button = document.querySelector("button");

// paragraph.addEventListener("mousedown", () => {
// 	console.log("Handler for paragraph");
// });

// button.addEventListener("mousedown", (e) => {
// 	console.log("Handler for button");
// 	if (e.button == 2) {
// 		e.stopPropagation();
// 	}
// });

// document.addEventListener("click", (e) => {
// 	console.log(e.target);
// 	if (e.target.nodeName.toLowerCase() == "button") {
// 		console.log("Clicked on " + e.target.textContent);
// 	}
// });

// let enlace = document.querySelector("a");

// enlace.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	console.log("You clicked on the link");
// });

// window.addEventListener("keydown", (e) => {
// 	if (e.key == "v") {
// 		document.body.style.background = "violet";
// 	}
// });

// window.addEventListener("keyup", (e) => {
// 	if (e.key == "v") {
// 		document.body.style.background = "";
// 	}
// });

// window.addEventListener("keydown", (e) => {
// 	if (e.ctrlKey && e.key == " ") {
// 		console.log("Opening the menu");
// 	}
// });

let isMouseDown = false;

window.addEventListener("mousedown", (e) => {
	isMouseDown = true;
	createDot(e);
});

window.addEventListener("mousemove", (e) => {
	if (isMouseDown) {
		createDot(e);
	}
});

window.addEventListener("mouseup", () => {
	isMouseDown = false;
});

function createDot(e) {
	let dot = document.createElement("div");
	dot.className = "dot";
	dot.style.left = e.pageX - 4 + "px";
	dot.style.top = e.pageY - 4 + "px";
	document.body.appendChild(dot);
}

// let isDrawing = false;
// let lastX = 0;
// let lastY = 0;
// let canvas = document.createElement("canvas");
// let ctx = canvas.getContext("2d");

// document.body.appendChild(canvas);
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// canvas.style.position = "absolute";
// canvas.style.top = 0;
// canvas.style.left = 0;
// canvas.style.zIndex = -1;

// window.addEventListener("resize", () => {
// 	canvas.width = window.innerWidth;
// 	canvas.height = window.innerHeight;
// });

// canvas.addEventListener("mousedown", (e) => {
// 	isDrawing = true;
// 	[lastX, lastY] = [e.offsetX, e.offsetY];
// });

// canvas.addEventListener("mousemove", (e) => {
// 	if (!isDrawing) return;
// 	ctx.beginPath();
// 	ctx.moveTo(lastX, lastY);
// 	ctx.lineTo(e.offsetX, e.offsetY);
// 	ctx.stroke();
// 	[lastX, lastY] = [e.offsetX, e.offsetY];
// });

// canvas.addEventListener("mouseup", () => {
// 	isDrawing = false;
// });

// canvas.addEventListener("mouseout", () => {
// 	isDrawing = false;
// });
