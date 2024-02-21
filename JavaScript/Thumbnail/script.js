const center = document.getElementById("center");
const petals = document.querySelectorAll(".petal");
const button = document.getElementById("changeColor");
let colorIndex = 0;

button.addEventListener("click", () => {
	if (colorIndex % 2 === 0) {
		center.style.backgroundColor = getRandomColor();
	} else {
		petals.forEach((petal, index) => {
			petal.style.backgroundColor = getRandomColor();
		});
	}
	colorIndex++;
});

function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
}