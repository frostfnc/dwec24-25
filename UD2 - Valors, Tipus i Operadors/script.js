// // NÚMEROS

// let a = 10;
// let b = 9.98;
// let c = 3.756e5;
// const pi = 3.14159;
// console.log(pi + 2);

// // Aritmètica
// console.log(100 + 4);
// console.log(100 - 4);
// console.log(100 * 4);
// console.log(100 / 4);
// console.log(9 % 3);

// // Números especials
// // Infinity i -Infinity
// console.log(Infinity);

// NaN (Not a Number)
// console.log(NaN);
// console.log(100 / 0);

// CADENES (STRING)
// console.log("hola")
// console.log("adios")
// console.log(`hola`)

// Salt de linia
// console.log("Salt\nde linia")

//Concatenar
// let cadena = "nar"
// console.log("con" + "ca" + "te" + cadena)

//template literals
// let calcul = 100 / 2
// console.log(`la meitat de 100 és: ${calcul}`)

// OPERADORS UNARIS
// console.log(typeof 4.5)
// console.log(typeof "x")
// console.log(typeof true)

// BINARIS -> + i *

// - és unari i binari (Un poc Schrödinger

// BOOLEAN
//true i false

// console.log(3 > 2);
// console.log(3 < 2);

// console.log("Azozaiza" > "Zriquete");

// console.log("Hola" == "Hola");
// console.log(5 == "5"); // true
// console.log(5 === "5"); //false

// console.log("hola" != "Hola"); //true

// console.log(NaN == NaN);

// OPERADORS LÓGICS
// AND (i)
// OR (o)
// NOT (negació)
// console.log(true && true);
// console.log(true && false);
// console.log(false || true);
// console.log(false || false);

// OPERADOR TERNARI
// console.log(true ? 1 : 2); //Muestra 1
// console.log(false ? 1 : 2); //Mestra 2

// VALORS BUITS
// null, undefined

// console.log(undefined && 4 < 6 ? 1 : 2);

// console.log(8 * undefined);

// let b;
// console.log(b);

// CONVERSIÓ AUTOMÀTICA DE TIPUS
// console.log(typeof ("5" + 1)); //string
// console.log(typeof (1 + "5")); //string
// console.log(5 - "1"); //number
// console.log("cinco" * 2);
// console.log(false == 0); // true
// console.log(true == 1); // true

// console.log(null == null);
// console.log(null == undefined);
// console.log(null == 0);

// Cortocircuito de los operadores && y ||
// console.log(null || "joan"); // imprime joan
// console.log("pepe" || "joan"); // imprime pepe
// console.log("" || "joan"); // imprime joan

console.log(0 || 100);
console.log(0 && 100);

// ?? -> se elije el lado de la derecha si el izquierdo es null o undefined
console.log(0 ?? 100); // 0
console.log(null ?? 100); // 100
