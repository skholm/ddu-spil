const suspectSelect = document.getElementById("suspect-select");
const submitButton = document.getElementById("submit-guess");

suspectSelect.addEventListener("change", () => {
	submitButton.classList.toggle(
		"disabled-button",
		suspectSelect.value === "vælg",
	);
});
s;

function back() {
	window.location.href = "./game.html" + window.location.hash;
}
function submitGuess() {
	if (suspectSelect.value === "vælg") {
		return;
	}
	switch (suspectSelect.value) {
		case "Petrine Steenstrup":
			window.location.href = "./afslutning-petrine.html";
			break;
		case "Jakob Rasmussen":
			window.location.href = "./afslutning-jakob.html";
			break;
		case "Niels Bindslev":
			window.location.href = "./afslutning-niels.html";
			break;
	}
}
