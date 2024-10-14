// let numeros = [1, 2, 3, 4]; // 4 elementos
// console.log(numeros[0]); // 1
// console.log(numeros[3]); // 4
// console.log(numeros[4]); // undefined
// console.log(numeros.length); // 4
// console.log(numeros[numeros.length - 1]); // 4

// let noms = ["Pau", "Maria", "Eduardo", "Joan"];
// console.log(noms[0]); // Pau
// console.log(noms[3]); // Joan
// console.log(noms[4]); // undefined
// console.log(noms.length); // 4
// console.log(noms[noms.length - 1]); // Joan

// let mesclar = [1, "Pau", true, 3.14];
// console.log(typeof mesclar[0]); // 1
// console.log(typeof mesclar[1]); // Pau
// console.log(typeof mesclar[2]); // true
// console.log(typeof mesclar[3]); // 3.14

// console.log(mesclar); // []

// let numeros = new Array();
// numeros[0] = 1;
// numeros[1] = 2;
// numeros[3] = 3;
// console.log(numeros); // [1, 2, empty, 3]

// let noms = new Array("Pau", "Maria", "Eduardo", "Joan");
// console.log(noms);

// let numeros = new Array(5).fill(5);
// console.log(numeros);

// Métodos de los arrays
// push() : Agrega un o més elements al final de l'array
const fruites = ["Poma", "Peres"];
// fruites.push("Plàtan");
// console.log(fruites); // ["Poma", "Peres", "Plàtan"]

// // pop() : Elimina l'últim element de l'array
// let platan = fruites.pop();
// console.log(fruites); // ["Poma", "Peres"]
// fruites.push(platan);
// console.log(fruites);

// // shift() : Elimina el primer element de l'array
// let poma = fruites.shift();
// console.log(fruites); // ["Peres", "Plàtan"]

// // unshift() : Afegeix un o més elements al principi de l'array
// fruites.unshift(poma);
// console.log(fruites); // ["Poma", "Peres", "Plàtan"]

// // concat() : Retorna un nou array amb els elements del array original i els elements afegits
// const fruites2 = ["Taronges", "Mandarines"];
// const fruites3 = fruites.concat(fruites2);
// console.log(fruites3); // ["Poma", "Peres", "Plàtan", "Taronges", "Mandarines"]

// slice() : Retorna un nou array amb els elements seleccionats
fruites.push("Plàtan", "Taronges", "Mandarines");
// console.log(fruites);
// const fruites2 = fruites.slice(1, 3);
// console.log(fruites2);

// splice() : Canvia el contingut d'un array eliminant, reemplaçant o afegint elements
// fruites2.splice(1, 0, "Uva", "Kiwi");
// console.log(fruites2);

// indexOf() : Retorna la primera posició d'un element en l'array o -1 si no existeix
// console.log(fruites);
// console.log(fruites.indexOf("Peres")); // 1
// console.log(fruites.indexOf("Taronges")); // 3
// console.log(fruites.indexOf("Kiwi")); // -1

// // join() : Retorna un string amb els elements de l'array separats per un separador
// console.log(fruites.join(" - ")); // Poma - Peres - Plàtan - Taronges - Mandarines

// // sort() : Ordena els elements de l'array alfabèticament (si són strings) o numèricament (si són números)
// console.log(fruites.sort());
// const numeros = [1, 5, 3, 2, 4, 10];
// console.log(numeros.sort()); // [1, 10, 2, 3, 4, 5]

// const cuidades = ["Barcelona", "madrid", "Zaragoza", "Tarragona"];
// cuidades.sort();
// console.log(cuidades); // ["Barcelona", "Tarragona", "Zaragoza", "madrid"]

// Afortunadamente sort() tiene un parámetro opcional que es una función de comparación que define el criterio de ordenación
// const numeros = [1, 5, 3, 2, 4, 10];
// console.log(
// 	numeros.sort(function (a, b) {
// 		return a - b;
// 	})
// ); // [1, 2, 3, 4, 5, 10]

// console.log(numeros.sort((a, b) => a - b)); // [1, 2, 3, 4, 5, 10]

// const cuidades = ["Barcelona", "madrid", "Zaragoza", "Tarragona", "Ávila"];
// cuidades.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : a.toLowerCase() < b.toLowerCase() ? -1 : 0));
// console.log(cuidades); // ["Barcelona", "madrid", "Tarragona", "Zaragoza"]

// cuidades.sort((a, b) => a.localeCompare(b));
// console.log(cuidades);

// Desestructuración de arrays
const numeros = [1, 2, 3];
const [a, b, c] = numeros;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
