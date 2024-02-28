// --- Page-Specific Logic

var pages = ["index", "about", "projects", "experience", "contact"];
var currentPage = findCurrentPage();

function findCurrentPage() {
	var path = window.location.pathname;
	var page = path.split("/").pop();
	var pageName = page.split(".")[0];
	for (var i = 0; i < pages.length; i++) {
		if (pageName === pages[i]) {
			return i;
		}
	}
}

// inject navbar.html into the navbar div
window.onload = function () {
	var navbar = document.getElementById("navbar");

	fetch("navbar.html")
		.then((response) => response.text())
		.then((data) => {
			navbar.innerHTML = data;

			// Remove the id from the previous active tab
			var previousActiveTab = document.getElementById("active-tab");
			if (previousActiveTab) {
				previousActiveTab.removeAttribute("id");
			}

			// Add the id to the current active tab
			var currentActiveTab =
				document.querySelectorAll("nav ul li")[currentPage];
			currentActiveTab.id = "active-tab";
		});
};

// Set active tab to the navbar

// --- Background Scrolling Text Color

const p = document.querySelector("#background-text p");
if (p) {
	const parts = p.textContent.split(";");
	// Wrap each part in a span with a different color
	let colorClasses = ["violet", "blue", "yellow"];
	let lastColorIndex = -1;

	for (let i = 0; i < parts.length; i++) {
		let randomIndex;

		do {
			randomIndex = Math.floor(Math.random() * colorClasses.length);
		} while (randomIndex === lastColorIndex);

		let colorClass = colorClasses[randomIndex];
		parts[i] = `<span class="${colorClass}">${parts[i]}</span>`;
		lastColorIndex = randomIndex;
	}
	// Rejoin the parts and update the p element
	p.innerHTML = parts.join(";");
}

// --- Scroll Transition (WIP, needs additional scrollable content)
/*
var currentPage = 0;
var pages = ["index", "about", "projects", "experience", "contact"];

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", addScrollListener);
} else {
	addScrollListener();
}

var lastScrollTop = 0;

function addScrollListener() {
	window.addEventListener("scroll", function () {
		var threshold = window.innerHeight / 2;
		var st = window.pageYOffset || document.documentElement.scrollTop;
		var direction;

		if (st > lastScrollTop) {
			direction = "down";
		} else {
			direction = "up";
		}
		lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

		if (window.scrollY > threshold) {
			navigateToNextPage(direction);
		} else {
			navigateToNextPage(direction);
		}
	});
}

function navigateToNextPage(direction) {
	var nextPage;
	switch (direction) {
		case "down":
			console.log("Down");
			nextPage = pages[currentPage + 1] || pages.length - 1;
		case "up":
			console.log("Up");
			nextPage = pages[currentPage - 1] || 0;
	}
	//window.location.href = pages[nextPage] + ".html";
}
*/
