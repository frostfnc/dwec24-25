// Definir funcions

// const quadrat = function (n) {
// 	return n * n;
// };

// const mensaje = function () {
// 	console.log("funcio que no retorna res, però que mostra un missatge");
// };

// mensaje()
// console.log(quadrat(3));

// const redondeaN = function (n, r) {
// 	let resto = n % r;
// 	return n - resto + (resto < r / 2 ? 0 : r);
// };

// console.log(redondeaN(23, 10));

// Ámbitos

// let x = 10; // Global
// if (true) {
// 	let y = 20; // Local respecto al bloque
// 	console.log(x);
// 	// var z = 30; // Global
// }

// console.log(z);

// const mitad = function (n) {
// 	return n / 2;
// };

// let n = 10;
// console.log(mitad(100));
// console.log(n);

// Ámbito anidado

// const humus = function (factor) {
// 	const ingrediente = function (cantidad, unidad, nombre) {
// 		let cantidadIngrediente = cantidad * factor;
// 		if (cantidadIngrediente > 1 || (cantidadIngrediente >= 0.25 && cantidadIngrediente < 1)) {
// 			unidad += "s";
// 		}
// 		console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
// 	};
// 	ingrediente(1, "lata", "garbanzos");
// 	ingrediente(0.25, "taza", "tahini");
// 	ingrediente(0.25, "taza", "jugo de limón");
// 	ingrediente(1, "diente", "ajo");
// 	ingrediente(2, "cucharada", "aceite de oliva");
// 	ingrediente(0.5, "cucharadita", "comino");
// };

// humus(1);

// const redondeaN = (n, r) => {
// 	let resto = n % r;
// 	return n - resto + (resto < r / 2 ? 0 : r);
// };

// let nombre = "";
// const saluda = () => "Hola ";

// console.log(saluda());

// Pila de llamadas
// function saludar(nombre) {
// 	console.log("hola " + nombre);
// }
// saludar("Joan");
// console.log("Adios");

// no en funcion
// en saludar
// en clg
// en saludar
//no en funcion
// en clg
// no en funcion

// function gallina() {
// 	return huevo();
// }
// function huevo() {
// 	return gallina();
// }

// Parametros Opcionales

// const quadrat = function (n, b = "n/a") {
// 	console.log(b);
// 	return n * n;
// };
// console.log(quadrat(3));

// function valor(n) {
// 	let local = n;
// 	return () => local;
// }

// let valor1 = valor(1); // valor1, es una función
// let valor2 = valor(2); // valor2, es una función

// console.log(valor1());
// console.log(valor2());

// Recursividad
// function exponencial(base, exponente) {
// 	if (exponente == 0) {
// 		return 1;
// 	} else {
// 		return base * exponencial(base, exponente - 1);
// 	}
// }

// console.log(exponencial(2, 3));

// Factorial de n: n! = n * (n-1) * (n-2)... * 1
// Ej: 4! = 4 * 3 * 2 * 1 = 24

// function factorial(n) {
// 	if (n == 1) {
// 		return 1;
// 	} else {
// 		return n * factorial(n - 1);
// 	}
// }
// console.log(factorial(4));

// function imprimirInventarioGranja(vacas, pollos) {
// 	let cadenaVaca = String(vacas);

// 	while (cadenaVaca.length < 3) {
// 		cadenaVaca = "0" + cadenaVaca;
// 	}

// 	console.log(`${cadenaVaca} Vacas`);

// 	let cadenaPollo = String(pollos);

// 	while (cadenaPollo.length < 3) {
// 		cadenaPollo = "0" + cadenaPollo;
// 	}

// 	console.log(`${cadenaPollo} Pollos`);
// }

// imprimirInventarioGranja(2, 15);

// FUNCTION para rellenar con ceros un numero.
function rellenarConCeros(numero, longitud) {
	let cadenaNumero = String(numero);
	while (cadenaNumero.length < longitud) {
		cadenaNumero = "0" + cadenaNumero;
	}
	return cadenaNumero;
}

// function imprimirInventarioGranja(vacas, pollos, cerdos) {
// 	console.log(`${rellenarConCeros(vacas, 3)} Vacas`);
// 	console.log(`${rellenarConCeros(pollos, 3)} Pollos`);
// 	console.log(`${rellenarConCeros(cerdos, 3)} Cerdos`);
// }

// imprimirInventarioGranja(7, 12, 26);

// Math.min();
// let a = Math.min(2, 4);
// console.log(a);
//  Escribe una función que devuelva el mínimo de 3 números.

// Ejercicio recursividad:
/*  Podemos usar % para verificar si un número es par o impar
	al usar el %2 para ver si es divisible por dos.
	Existe otra manera de definir si un número es par o impar:
	- 0 es PAR
	- 1 es IMPAR
	- N: su paridad es la misma que N - 2
	Define la función recursiva esPar que corresponda a esta
	descripción. La función debe aceptar un solo parámetro (número
	entero positivo) y devolver un booleano.
	Probar con 50 y 75.
*/

// function esPar(n) {
// 	if (Number.isNaN(n) || n < 0) {
// 		return "No es un número o no és positivo.";
// 	}
// 	if (n == 0) {
// 		return false;
// 	}
// 	if (n == 1) {
// 		return true;
// 	}
// 	return esPar(n - 2);
// }

// console.log(esPar(2));
// console.log(esPar(3));

function esKaprekar(numero) {
	if (typeof numero != "number" || numero < 0 || numero > 9999) {
		return "El numero ha de ser un enter positiu de 4 dígits o menys";
	}

	let numeroString = String(numero).padStart(4, "0");

	let i = 0;
	console.log(`Número inicial: ${numeroString}`);
	while (numeroString != "6174" && i < 40) {
		let ascendent = ordenarAscendent(numeroString);
		let descendent = ordenarDescendent(numeroString);

		let resultat = restarNumeros(descendent, ascendent);

		console.log(`Iteració ${i + 1}: ${descendent} - ${ascendent} = ${resultat}`);

		numeroString = resultat;
		i++;
	}

	if (numeroString == "6174") {
		console.log(`Kaprekar trobat en ${i} iteracions.`);
	} else {
		console.log(`No s'ha trobat Kaprekar en 40 iteracions.`);
	}
}

function ordenarAscendent(numero) {
	let arr = [];
	for (let i = 0; i < numero.length; i++) {
		arr[i] = numero[i];
	}
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	let resultat = "";
	for (let i = 0; i < arr.length; i++) {
		resultat += arr[i];
	}
	return resultat;
}

function ordenarDescendent(numero) {
	let arr = [];
	for (let i = 0; i < numero.length; i++) {
		arr.push(numero[i]);
	}
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] < arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	let resultado = "";
	for (let i = 0; i < arr.length; i++) {
		resultado += arr[i];
	}
	return resultado;
}

function restarNumeros(descendent, ascendent) {
	let numDesc = parseInt(descendent, 10);
	let numAsc = parseInt(ascendent, 10);
	let resultado = numDesc - numAsc;
	let resultatString = String(resultado);
	while (resultatString.length < 4) {
		resultatString = "0" + resultatString;
	}
	return resultatString;
}

console.log(esKaprekar(435));
