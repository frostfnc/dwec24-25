let addCookieBtn = document.getElementById("addCookieBtn");
let timerDisplay = document.getElementById("timerDisplay");
let showCookiesBtn = document.getElementById("showCookiesBtn");

time = 5;
let timer = time;
let interval;
timerDisplay.innerText = timer;

addCookieBtn.addEventListener("click", function () {
	timer = time;
	interval = setInterval(function () {
		timer--;
		timerDisplay.innerText = timer;
		if (timer == 0) {
			stopTimer();
		}
	}, 1000);

	addCookieBtn.disabled = true;

	document.cookie = "username=Sergi; max-age=10";
	console.log(document.cookie);
});

showCookiesBtn.addEventListener("click", function () {
	let cookies = document.cookie;
	if (cookies == "") {
		console.log("No hay cookies");
	} else {
		console.log(cookies);
	}
});

function stopTimer() {
	clearInterval(interval);
	timer = time;
	timerDisplay.innerHTML = timer;
}
