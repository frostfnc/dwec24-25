// let clock = new Date();

// console.log(clock);

// let hours = clock.getHours();

// let minutes = clock.getMinutes();

// let seconds = clock.getSeconds();

// let ampm = "";
// if (hours > 12) {
// 	hours -= 12;
// 	ampm = "pm";
// } else {
// 	ampm = "am";
// }

// if (hours < 10) {
// 	hours = "0" + hours;
// }
// if (minutes < 10) {
// 	minutes = "0" + seconds;
// }
// if (seconds < 10) {
// 	seconds = "0" + seconds;
// }

// let horaActual = console.log(hours + ":" + minutes + ":" + seconds + " " + ampm);

// setTimeout(function_a_llamar, millisegundos)
// setInterval(function_a_llamar, milisegundos)
// clearTimeout()
// clearInterval()

// function crono() {
// 	let clock = new Date();

// 	let hours = clock.getHours();

// 	let minutes = clock.getMinutes();

// 	let seconds = clock.getSeconds();

// 	let ampm = "";

// 	let laHora = document.getElementById("laHora");
// 	if (hours > 12) {
// 		hours -= 12;
// 		ampm = "pm";
// 	} else {
// 		ampm = "am";
// 	}

// 	if (hours < 10) {
// 		hours = "0" + hours;
// 	}
// 	if (minutes < 10) {
// 		minutes = "0" + seconds;
// 	}
// 	if (seconds < 10) {
// 		seconds = "0" + seconds;
// 	}

// 	let horaActual = hours + ":" + minutes + ":" + seconds + " " + ampm;

// 	laHora.innerHTML = horaActual;
// }

// let elCrono;

// window.onload = function () {
// 	elCrono = setInterval(crono, 1000);
// };

function padZero(num) {
	if (num < 10) {
		return "0" + num;
	}
	return num;
}

// CRONO
let laHora = document.getElementById("laHora");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let restart = document.getElementById("restart");

// Variables
let elCrono;
let laMevaData = new Date();
restartCrono();

// Events
start.addEventListener(
	"click",
	function () {
		elCrono = setInterval(crono, 1000);
		this.disabled = true;
		stop.disabled = false;
		this.innerHTML = "START";
	},
	false
);

stop.addEventListener(
	"click",
	function () {
		clearInterval(elCrono);
		start.disabled = false;
		start.innerHTML = "CONTINUE";
		this.disabled = true;
		restart.disabled = false;
	},
	false
);

restart.addEventListener(
	"click",
	function () {
		restartCrono();
		start.innerHTML = "START";
		start.disabled = false;
		this.disabled = true;
		stop.disabled = false;
	},
	false
);

// Functions
function crono() {
	let hours = laMevaData.getHours();
	let minutes = laMevaData.getMinutes();
	let seconds = laMevaData.getSeconds();

	seconds++;

	laMevaData.setSeconds(seconds);

	if (seconds == 60) {
		seconds = 0;
		minutes++;
		laMevaData.setMinutes(minutes);
	} else if (minutes == 60) {
		minutes = 0;
		hours++;
		laMevaData.setHours(hours);
	} else if (hours == 24) {
		hours = 0;
	}

	hours = padZero(hours);
	minutes = padZero(minutes);
	seconds = padZero(seconds);

	laHora.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function restartCrono() {
	laMevaData.setHours(0, 0, 0, 0);
	laHora.innerHTML = "00:00:00";
	start.innerHTML = "START";
	start.disabled = false;
}
