let guardarLocalStorage = document.getElementById("guardarLocalStorage");
let recuperarLocalStorage = document.getElementById("recuperarLocalStorage");
let valorsLocalStorage = document.getElementById("valorsLocalStorage");
let netejarLocalStorage = document.getElementById("netejarLocalStorage");

let diHola = "Hola";
let diAdios = "Adiós";
let numeros = [1, 2, 3, 4, 5];
let factura = {
	numero: 1,
	descripcion: "Compra de material",
	importe: 100,
	metodoDePago: {
		tipo: "Tarjeta",
		numero: "1234567890",
	},
};

guardarLocalStorage.addEventListener("click", () => {
	localStorage.setItem("diHola", diHola);
	localStorage.setItem("diAdios", diAdios);
	localStorage.setItem("numeros", JSON.stringify(numeros));
	localStorage.setItem("numeros2", numeros);
	localStorage.setItem("factura", JSON.stringify(factura));
});

recuperarLocalStorage.addEventListener("click", () => {
	// let lsDiHola = localStorage.getItem("diHola");
	// let lsDiAdios = localStorage.getItem("diAdios");
	// if (lsDiHola) {
	// 	valorsLocalStorage.innerHTML = lsDiHola;
	// }
	// if (lsDiAdios) {
	// 	valorsLocalStorage.innerHTML += " " + lsDiAdios;
	// }

	let lsNumeros = localStorage.getItem("numeros");
	lsNumeros = JSON.parse(lsNumeros);
	let lsNumeros2 = localStorage.getItem("numeros2");
	lsFactura = JSON.parse(localStorage.getItem("factura"));
	console.log(typeof lsNumeros[0]);
	console.log(typeof lsNumeros);
	console.log(lsFactura);
	console.log(lsNumeros2);
});

netejarLocalStorage.addEventListener("click", () => {
	localStorage.clear();
	localStorage.removeItem("diHola");
});
