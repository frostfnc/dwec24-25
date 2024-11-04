let miCrono = document.getElementById("miCrono");
let horas = "00";
let minutos = "00";
let segundos = "00";
// let milisegundos = "00";
let cronoInterval;

window.onload = function () {
	// miCrono.innerHTML = horas + ":" + minutos + ":" + segundos + ":" + milisegundos;
	miCrono.innerHTML = horas + ":" + minutos + ":" + segundos;
};

function startCrono() {
	cronoInterval = setInterval(crono, 1000);
}

function stopCrono() {
	clearInterval(cronoInterval);
}

function restartCrono() {
	horas = "00";
	mintutos = "00";
	segundos = "00";
	// milisegundos = "00";
	// miCrono.innerHTML = horas + ":" + minutos + ":" + segundos + ":" + milisegundos;
	miCrono.innerHTML = horas + ":" + minutos + ":" + segundos;
}

function crono() {
	// milisegundos = parseInt(milisegundos) + 1;
	// if (milisegundos < 10) {
	// 	milisegundos = "0" + milisegundos;
	// } else if (milisegundos >= 60) {
	// 	milisegundos = "00";
	segundos = parseInt(segundos) + 1;
	if (segundos < 10) {
		segundos = "0" + segundos;
	} else if (segundos >= 60) {
		segundos = "00";
		minutos = parseInt(minutos) + 1;
		if (minutos < 10) {
			minutos = "0" + minutos;
		} else if (minutos >= 60) {
			minutos = "00";
			horas = parseInt(horas) + 1;
			if (horas < 10) {
				horas = "0" + horas;
			}
		}
	}
	miCrono.innerHTML = horas + ":" + minutos + ":" + segundos;
	// miCrono.innerHTML = horas + ":" + minutos + ":" + segundos + ":" + milisegundos;
}
// }
