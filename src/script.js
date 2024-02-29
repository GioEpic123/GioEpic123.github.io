// --- Page-Specific Logic

var pages = ["home", "about", "projects", "experience", "contact"];
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

// --- Navbar
window.onload = function () {
	var navbar = document.getElementById("navbar");

	fetch("components/navbar.html")
		.then((response) => response.text())
		.then((data) => {
			// -- Inject the navbar into the navbar div
			navbar.innerHTML = data;

			// -- Set active tab to the navbar
			// Remove old active tab
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

// --- Background Scrolling Text
// Makes a massive block of text to scroll in the background
// takes the form of various print statements in different languages, with different colors
function generateScrollingText() {
	const printStatements = [
		"System.out.println",
		"console.log",
		"document.write",
		"print",
		"printf",
		"Debug.Log",
		"SELECT",
		"NSLog",
	];
	const internalStrings = [
		"Hello there!",
		"Hia :)",
		"How's it going?",
		"Hey, what's up?",
		"Hiya!",
		"Greetings!",
		"Hey there!",
		"Server running on port <3<3",
		"Hi there!",
		"Nice weather we're having",
		"You look great today!",
		"Everything is going to be alright!",
		"...help me...",
		"Good day!",
		"Hello, world!",
		"Hello, user!",
		"Welcome back!",
		"Long time no see!",
		"Good to see you again!",
	];
	let text = "";
	let colorClasses = ["violet", "blue", "yellow"];
	let lastColorIndex = -1;

	for (let i = 0; i < 200; i++) {
		let printStatement =
			printStatements[Math.floor(Math.random() * printStatements.length)];
		let internalString =
			internalStrings[Math.floor(Math.random() * internalStrings.length)];

		let randomIndex;
		do {
			randomIndex = Math.floor(Math.random() * colorClasses.length);
		} while (randomIndex === lastColorIndex);

		let colorClass = colorClasses[randomIndex];
		lastColorIndex = randomIndex;

		if (printStatement === "SELECT") {
			text += `<span class="${colorClass}">${printStatement} '${internalString}' AS greeting;</span> `;
		} else if (printStatement === "NSLog") {
			text += `<span class="${colorClass}">${printStatement}(@"${internalString}");</span> `;
		} else {
			text += `<span class="${colorClass}">${printStatement}("${internalString}");</span> `;
		}
	}

	return text;
}

// Actually generate text & colorize
const p = document.querySelector("#background-text p");
if (p) {
	p.innerHTML = generateScrollingText();
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
