const PhotoQuestion = function(image, answer) {
	this.image = image;
	this.answers = answer;
};

const firstPhoto = new PhotoQuestion(
	"http://footbik.narod.ru/IGROKY/B/izo/BUTT_NICKY_jpg.jpg",
	["Nicky Butt", "Butt Nicky", "Butt"]
);

const secondPhoto = new PhotoQuestion(
	"https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0001/06/thumb_5142_default_news_size_5.jpeg",
	["Ian Rush", "Rush Ian", "Rush"]
);
const thirdPhoto = new PhotoQuestion(
	"http://e2.365dm.com/07/11/800x600/DionDublin_598753.jpg?20071121115730",
	["Dion Dublin", "Dublin Dion", "Dublin"]
);
const photoArr = [firstPhoto, secondPhoto, thirdPhoto];

function renderQuestions(arr) {
	for (var i = 0; i < arr.length; i++) {
		let questionsDiv = document.getElementById("photo-questions");
		let divElement = document.createElement("div");
		divElement.setAttribute("id", `question-${i}`);

		questionsDiv.appendChild(divElement).innerHTML = `
		<h5>Question ${i + 1}:</h5>
			<img class="img-question" src=${arr[i].image}><br>
			<div class="question" id="q-${i}"><label for='answer'> Type his name here:</label><input type="text" name="answer"></div>`;
	}
}
renderQuestions(photoArr);

let score = 0;

function checkAnswers() {
	const inputs = document.querySelectorAll("input");
	const inputsAnswers = Array.from(inputs);

	inputsAnswers.map((el, i = 0) => {
		let ans = el.value.toLowerCase();

		if (photoArr[i].answers.map(e => e.toLowerCase()).includes(ans)) {
			score++;
			i++;
		}
	});
	return score;
}

function clearInputs() {
	const inputs = document.querySelectorAll("input");
	const inputsAnswers = Array.from(inputs);
	inputsAnswers.map(el => (el.value = ""));
	document.getElementById("score").innerHTML = "";
}

function displayScore(sco) {
	let result;
	if (sco === 1) {
		result = `${sco}! Dude you're funny!`;
	} else if (sco === 2) {
		result = `${sco}. You need to watch more matches.`;
	} else if (sco === 3) {
		result = `${sco}. Nice!`;
	} else {
		result = `0. Did you even try?`;
	}
	document.getElementById("score").innerHTML = `Your score is ${result}`;
}

function scoreButtonHandler(ev) {
	ev.stopPropagation();
	checkAnswers();
	displayScore(score);
	score = 0;
}

function resetButtonHandler(ev) {
	clearInputs();
	score = 0;
}
const scoreBtn = document.getElementById("score-button");
scoreBtn.addEventListener("click", scoreButtonHandler);

const resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener("click", resetButtonHandler);

// Not a ton of code, but hard to

const nav = document.querySelector("#main");
let topOfNav = nav.offsetTop;

function fixNav() {
	if (window.scrollY >= topOfNav) {
		document.body.style.paddingTop = nav.offsetHeight + "px";
		document.body.classList.add("fixed-nav");
	} else {
		document.body.classList.remove("fixed-nav");
		document.body.style.paddingTop = 0;
	}
}

window.addEventListener("scroll", fixNav);
