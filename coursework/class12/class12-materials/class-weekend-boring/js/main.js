document.querySelector("#check").addEventListener("click", check);
const display = document.querySelector("#placeToSee");
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function check() {
	const day = document.querySelector("#day").value;
	if (day === "" || !days.includes(day)) {
		alert(`Please input a day of the week: ${days.join(", ")}`);
	} else if (day.toLowerCase() === "tuesday" || day.toLowerCase() === "thursday") {
		display.innerText = "IT'S TIME FOR CLASS";
	} else if (day.toLowerCase() === "sunday") {
		display.innerText = "IT'S TIME FOR CHILL OFFICE HOURS";
	} else {
		display.innerText = "THERE'S NO CLASS TODAY";
	}
}
