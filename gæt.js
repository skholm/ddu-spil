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
	if (suspectSelect.value === "Petrine Steenstrup") {
		window.location.href = "./correct.html";
	} else {
		window.location.href = "./wrong.html";
	}
}
