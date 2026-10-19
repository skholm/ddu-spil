const correctCode = "KOM HJEM";

function testCode(buttonElement) {
	let code = document.getElementById("usb-codeInput").value;
	buttonElement.disabled = true;
	let countdown = 3;
	buttonElement.textContent = ".";

	let interval = setInterval(function () {
		if (countdown > 0) {
			buttonElement.textContent += ".";
			countdown--;
		} else {
			clearInterval(interval);
		}
	}, 1000);
	setTimeout(
		function () {
			if (code === correctCode) {
				buttonElement.style.backgroundColor = "green";
				buttonElement.textContent = "Korrekt, dekrypterer...!";
				setTimeout(function () {
					buttonElement.style.backgroundColor = "";
					buttonElement.textContent = "Dekrypter USB";
					buttonElement.disabled = false;
					changePage("video");
				}, 2000);
			} else {
				buttonElement.style.backgroundColor = "red";
				buttonElement.textContent = "Forkert!";
				buttonElement.color = "var(--beige-light)";
				setTimeout(function () {
					buttonElement.style.backgroundColor = "";
					buttonElement.textContent = "Dekrypter USB";
					buttonElement.disabled = false;
				}, 2000);
			}
		},
		(countdown + 1) * 1000,
	);
}

window.addEventListener("DOMContentLoaded", function () {
	if (window.location.hash === "#usb-indhold") {
		changePage("video");
	}
});

function changePage(newPage) {
	let startPage = document.getElementById("start-page");
	let videoPage = document.getElementById("video-page");
	switch (newPage) {
		case "start":
			startPage.style.display = "block";
			videoPage.style.display = "none";
			window.location.hash = "";
			s;
			break;
		case "video":
			startPage.style.display = "none";
			videoPage.style.display = "block";
			window.location.hash = "#usb-indhold";
			break;
		default:
			console.error("Unknown page: " + newPage);
	}
}

function sendGuess() {
	//redirect
	window.location.href = "./gæt.html" + window.location.hash;
}
