function capturarArticulo() {
	const inicio = Date.now();

	// Esperar 10 segundos
	while (Date.now() - inicio < 10000) {
		// No hacer nada
	}

	return [
		{ id: 1, nombre: "Camiseta", precio: 10 },
		{ id: 2, nombre: "Pantalón", precio: 20 },
	];
}

function mostrarArticulos() {
	const articulos = document.getElementById("articulos");
	articulos.innerHTML = "<p> Cargando... </p>";
	setTimeout(() => {
		const articulosRecuperados = capturarArticulo();
		articulos.innerHTML = articulosRecuperados
			.map((articulo) => `<li>${articulo.nombre} - ${articulo.precio}€ <button onclick="agregarAlCarrito(${articulo.id})">Añadir al carrito</button></li>`)
			.join("");
	}, 10000);
}
