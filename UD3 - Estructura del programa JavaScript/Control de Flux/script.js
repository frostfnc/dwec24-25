// let numero = Number(prompt("Elije tu número: "));

// console.log("Tu número es la raiz cuadrada de " + numero * numero);

// Condicional
// let numero = Number(prompt("Elije tu número: "));

// if (!Number.isNaN(numero)) {
// 	let numMayorQue10 = " y es mayor que 10";
// 	let raizCuadradaNum = "Tu número es la raiz cuadrada de " + numero * numero;
// 	if (numero > 10) console.log(raizCuadradaNum + numMayorQue10);
// 	else console.log(raizCuadradaNum);
// } else console.log("No es un número");

// BUCLES
// WHILE

// let numero = 2;
// let limite = 202;
// let marcador = 0;
// while (numero <= limite) {
// 	console.log(marcador, numero);
// 	marcador++;
// 	numero = numero + 2;
// }

// let suma = 0;
// let numero = 2;
// while (numero <= 200) {
// 	if (numero % 2 == 0) {
// 		suma = suma + numero;
// 	}
// 	numero++;
// }
// console.log(suma);

// let numero = Number(prompt("Elije el primer numero: "));
// let numero2 = Number(prompt("Elije el segundo numero: "));
// let contador = 0;
// let suma = 1;

// if (!Number.isNaN(numero) && !Number.isNaN(numero2)) {
// 	while (contador < numero2) {
// 		suma = suma * numero;
// 		contador++;
// 	}
// 	console.log(suma);
// }

// DO WHILE

let nombre;
do {
	nombre = prompt("¿Quíen eres?");
} while (!nombre);

console.log(nombre);
