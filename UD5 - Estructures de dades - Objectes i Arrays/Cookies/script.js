let crearCookie = document.getElementById("crearCookie");
let verCookies = document.getElementById("verCookies");

crearCookie.addEventListener("click", creaCookie, false);

verCookies.addEventListener("click", verTodasLasCookies, false);

function creaCookie() {
	let usuari = "Sergi@sergi.com";
	document.cookie = "usuari=" + encodeURIComponent(usuari) + "; expires=Thu, 18 Dec 2024 12:00:00 UTC";
}

function verTodasLasCookies() {
	console.log(decodeURIComponent(document.cookie));
}
