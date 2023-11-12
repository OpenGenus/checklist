var code = "1";

const checkboxValues = JSON.parse(localStorage.getItem("checkboxValues"+code)) || {},
	buttons = Array.from(document.querySelectorAll(".checklist-item__expand")),
	labels = Array.from(document.querySelectorAll(".checklist-item__title")),
	checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]')),
	checkboxesLength = checkboxes.length,
	progress = document.querySelector(".progress__bar"),
	counter = document.querySelector(".progress__count"),
	reset = document.querySelector(".progress__reset");
function loadIds() {
	for (let a = 0; a < checkboxesLength; a += 1) {
		const b = a => a.replace(/[ ,.!?;:'-]/g, "");
		(checkboxes[a].id = `${b(
			checkboxes[a].nextSibling.nextSibling.innerText
		).toLowerCase()}`), checkboxes[a].nextSibling.setAttribute(
			"for",
			`${b(checkboxes[a].nextSibling.nextSibling.innerText).toLowerCase()}`
		);
	}
}
function updateStorage(a) {
	(checkboxValues[a.id] = a.checked), localStorage.setItem(
		"checkboxValues"+code,
		JSON.stringify(checkboxValues)
	);
}
function countChecked() {
	if ("checkbox" === this.type) {
		const a = this.parentNode.parentNode.parentNode,
			b =
				a.querySelectorAll("input:checked").length /
				a.querySelectorAll(".checklist-item").length;
		a.querySelector(
			".checklist__percentage-border"
		).style.transform = `scaleX(${b})`;
	} else
		Array.from(document.querySelectorAll(".checklist")).forEach(a => {
			const b =
				a.querySelectorAll("input:checked").length /
				a.querySelectorAll(".checklist-item").length;
			a.querySelector(
				".checklist__percentage-border"
			).style.transform = `scaleX(${b})`;
		});
	let a = 0;
	Array.from(document.querySelectorAll("input:checked")).forEach(() => {
		a += 1;
	}), (counter.innerText = `${a}/${checkboxesLength}`), (progress.style.transform = `scaleX(${a /
		checkboxesLength})`), (checkboxValues.globalCounter = a), updateStorage(this);
}
function loadValues() {
	const a = checkboxValues.globalCounter || 0;
	(counter.innerText = `${a}/${checkboxesLength}`), Object.keys(
		checkboxValues
	).forEach(a => {
		"globalCounter" !== a &&
			(document.getElementById(a).checked = checkboxValues[a]);
	}), countChecked();
}
function toggleExpand() {
	const a = this.parentNode;
	a.querySelector(".line").classList.toggle("closed"), a.classList.toggle(
		"open"
	);
}
function resetCheckboxes() {
	this.classList.add("progress__reset--pressed"), checkboxes.forEach(
		a => (a.checked = !1)
	), Object.keys(checkboxValues).forEach(
		a => delete checkboxValues[a]
	), countChecked();
}
window.onload = function() {
	loadIds(), loadValues(), checkboxes.forEach(a =>
		a.addEventListener("click", countChecked)
	), buttons.forEach(a =>
		a.addEventListener("click", toggleExpand)
	), labels.forEach(a =>
		a.addEventListener("click", toggleExpand)
	), reset.addEventListener("click", resetCheckboxes), reset.addEventListener(
		"animationend",
		function() {
			this.classList.remove("progress__reset--pressed");
		},
		!1
	), "serviceWorker" in navigator &&
		navigator.serviceWorker.register("/sw.js", { scope: "/" })
};
window.onclick = function () {
  var total_height = 0;
  var slides = document.getElementsByClassName('checklist');
  for (var i = 0; i < slides.length; i++) {
    total_height += slides.item(i).offsetHeight + 15;
  }
  main_content = document.getElementsByClassName('container')[0];
  if(2 * main_content.offsetHeight - total_height < 400)
  {
  	main_content.style.maxHeight = main_content.offsetHeight + 500;
  }
  /*
  else if(2 * main_content.offsetHeight - total_height >= 1000)
  {
  	main_content.style.maxHeight = main_content.offsetHeight - 500;
  }
  */
}
