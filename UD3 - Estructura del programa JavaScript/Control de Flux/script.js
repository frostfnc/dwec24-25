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

// let nombre;
// do {
// 	nombre = prompt("¿Quíen eres?");
// } while (!nombre);

// console.log("Nombre: " + nombre);

// BUCLES FOR

// let numero = 2;
// console.log("Antes del bucle:", numero);
// for (numero = 0; numero <= 12; numero++) {
// 	console.log(numero);
// }
// console.log("Despues del bucle:", numero);

// for (let i = 0; i <= 100; i += 2) {
// 	console.log(i);
// }

// for (let j = 0; j <= 100; j++) {
// 	if (j % 2 == 0) {
// 		console.log(j);
// 	}
// }

// for (let numero = 20; ; numero++) {
// 	if (numero % 7 == 0) {
// 		console.log(numero);
// 	}
// }

//switch - case

// let pregunta = prompt("¿Que tiempo hace?");
// switch (pregunta) {
// 	case "lluvioso":
// 		console.log("Coge un paraguas");
// 		break;
// 	case "soleado":
// 		console.log("Lleva ropa ligera");
// 	case "nublado":
// 		console.log("Puedes salir a la calle");
// 		break;
// 	default:
// 		console.log("Tiempo desconocido");
// }

/*
 Ejercicio 1
 Escribe un bucle que realice siete llamadas a console.log para mostras la siguiente figura:
 #
 ##
 ###
 ####
 #####
 ######
 #######
*/

// let cadena = "#";
// while (cadena.length <= 7) {
// 	console.log(cadena);
// 	cadena += "#";
// }

/* Ejercicio 2
	Escribe un programa que use console.log para imprimir
	todos los números del 1 al 100, con excepciones:
 	- Para los números que sean divisibles por 3, imprime: 
 	"Jander".
 	- Para los números divisibles por 5 (y no por 3), imprime:
 	"Clander".

	Extension Pack
	Modifica tu programa para imprimir "JanderClander" para los números que sean divisible por 3 y por 5 
	(y sigue imprimiendo "Jander o "Clander" para los números que son divisibles solo por uno de esos casos).
	
	*/

// for (let i = 1; i <= 100; i++) {
// 	console.log(i);
// 	if (i % 3 == 0) {
// 		console.log("Jander : 3");
// 	}
// 	if (i % 5 == 0 && !(i % 3 == 0)) {
// 		console.log("Clander : 5");
// 	}
// }

// for (let i = 1; i <= 100; i++) {
// 	if (i % 3 == 0 && !(i % 5 == 0)) {
// 		console.log("Jander");
// 	}
// 	if (i % 5 == 0 && !(i % 3 == 0)) {
// 		console.log("Clander");
// 	}
// 	if (i % 5 == 0 && i % 3 == 0) {
// 		console.log("JanderClander");
// 	}
// 	console.log(i);
// }

/*
	Escribe un programa que cree una cadena que represente un tablero de 8 x 8, usando caracteres de salto de línea para separar las líneas.
	En cada posición del tablero hay que carácter de espacio o un carácter
	"#". Los caracteres deben formar un tablero de ajedrez:
*/

// let tabla = "";
// let col = 4;
// let row = 50;
// for (let i = 0; i < col; i++) {
// 	for (let j = 0; j < row; j++) {
// 		if ((i + j) % 2 == 0) {
// 			tabla += " ";
// 		} else {
// 			tabla += "#";
// 		}
// 	}
// 	tabla += "\n";
// }
// console.log(tabla);

// let pregunta = prompt("¿Que ejercicio quieres hacer?");
// switch (pregunta) {
// 	case "1":
// 		let cadena = "#";
// 		while (cadena.length <= 7) {
// 			console.log(cadena);
// 			cadena += "#";
// 		}
// 		break;
// 	case "2":
// 		for (let i = 1; i <= 100; i++) {
// 			console.log(i);
// 			if (i % 3 == 0) {
// 				console.log("Jander : 3");
// 			}
// 			if (i % 5 == 0 && !(i % 3 == 0)) {
// 				console.log("Clander : 5");
// 			}
// 		}
// 		break;
// 	case "2 Extension Pack":
// 		for (let i = 1; i <= 100; i++) {
// 			if (i % 3 == 0 && !(i % 5 == 0)) {
// 				console.log("Jander");
// 			}
// 			if (i % 5 == 0 && !(i % 3 == 0)) {
// 				console.log("Clander");
// 			}
// 			if (i % 5 == 0 && i % 3 == 0) {
// 				console.log("JanderClander");
// 			}
// 			console.log(i);
// 		}
// 		break;
// 	case "3":
// 		let tabla = "";
// 		let col = prompt("Dime las columnas de la tabla: ");
// 		let row = prompt("Dime las filas de la tabla: ");
// 		for (let i = 0; i < col; i++) {
// 			for (let j = 0; j < row; j++) {
// 				if ((i + j) % 2 == 0) {
// 					tabla += " ";
// 				} else {
// 					tabla += "#";
// 				}
// 			}
// 			tabla += "\n";
// 		}
// 		console.log(tabla);
// 		break;
// 	default:
// 		console.log("No se ha introducido correctamente el nombre de un ejercicio.");
// }
