const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const counter = document.getElementById("counter");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

// Prices of selected movies
let ticketPrice = movieSelect.value;
populateUI();

// Function
function updateSelectionSeats() {
	const selectedSeats = document.querySelectorAll(".row .seat.selected");
	console.log(selectedSeats);

	const seatIndex = [...selectedSeats].map(function (seat) {
		return [...seats].indexOf(seat);
	});
	console.log(seatIndex);

	localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));

	const counterSelectedSeats = selectedSeats.length;
	counter.innerText = counterSelectedSeats;

	total.innerText = counterSelectedSeats * ticketPrice;
}

function populateUI() {
	const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
	if (selectedSeats !== null && selectedSeats.length > 0) {
		seats.forEach((seat, index) => {
			if (selectedSeats.indexOf(index) > -1) {
				seat.classList.add("selected");
			}
		});
	}

	const indexSelectedMovie = localStorage.getItem("indexSelectedMovie");
	if (indexSelectedMovie !== null) {
		movieSelect.selectedIndex = indexSelectedMovie;
	}

	const priceSelectedMovie = localStorage.getItem("priceSelectedMovie");
	if (priceSelectedMovie !== null) {
		ticketPrice = priceSelectedMovie;
	}

	updateSelectionSeats();
}

// Events
container.addEventListener("click", (e) => {
	if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
		console.log(e.target.classList);
		e.target.classList.toggle("selected");
		updateSelectionSeats();
	}
});

movieSelect.addEventListener("change", (e) => {
	ticketPrice = +e.target.value;
	localStorage.setItem("indexSelectedMovie", e.target.selectedIndex);
	localStorage.setItem("priceSelectedMovie", e.target.value);
	updateSelectionSeats();
});

// Ahorcado, ABECEDARIO (como un teclado, si haces clic ya no puedes hacer mas clic), sistema de puntuacion (max 7 errores por ejemplo), per cada error que surti un ahorcado, registrar usuarios, el jugador tindra el propi registre de records, cada palabra tiene que tener un record, añadir tiempo y errores por tiempo.
