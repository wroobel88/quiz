const Question = function(question, answers, correctAnswer) {
	this.question = question;
	this.answers = [];
	for (let i = 0; i < answers.length; i++) {
		this.answers.push(answers[i]);
	}
	this.correctAnswer = correctAnswer;
};

const firstQuestion = new Question(
	"Who is the Chelsea manager?",
	["Jose Mourinho", "Antonio Conte", "Mauricio Poccetino"],
	1
);
const secondQuestion = new Question(
	"What is the most popular football club in the world?",
	["Real Madrit", "Barcelona", "Manchester Utd.", "Bayern Munchen"],
	2
);

const thirdQuestion = new Question(
	"Which midfield player scored most goals in Premier League history?",
	["Paul Gascoine", "Steven Gerrard", "Ryan Giggs", "Frank Lampard"],
	3
);

const fourthQuestion = new Question(
	"Who scored the most goals in Premiere League history?",
	["Andy Cole", "Alan Shearer", "Wayne Rooney", "Thierry Henry"],
	1
);
const fifthQuestion = new Question(
	"How many years Alex Ferguson was Man Utd. manager?",
	["25", "27", "29", "26"],
	1
);

const questionsArr = [
	firstQuestion,
	secondQuestion,
	thirdQuestion,
	fourthQuestion,
	fifthQuestion
];

function renderQuestions(arr) {
	for (var i = 0; i < arr.length; i++) {
		let questionsDiv = document.getElementById("questions");
		let divElement = document.createElement("div");
		divElement.setAttribute("id", `question-${i}`);
		if (arr[i].answers.length === 3) {
			questionsDiv.appendChild(divElement).innerHTML = `
		<h5>Question ${i + 1}:</h5>
			<p class="question">${arr[i].question}</p>
			<form class="question" id="q-${i}">
			<input type="radio" name="answer" value="${arr[i].answers[0]}"> ${arr[i]
				.answers[0]}<br>
			<input type="radio" name="answer" value="${arr[i].answers[1]}"> ${arr[i]
				.answers[1]}<br>
			<input type="radio" name="answer" value="${arr[i].answers[2]}"> ${arr[i]
				.answers[2]}</form>`;
		} else if (arr[i].answers.length === 4) {
			questionsDiv.appendChild(divElement).innerHTML = `
			<h5>Question ${i + 1}:</h5>
				<p class="question">${arr[i].question}</p>
				<form class="question" id="q-${i}">	
				<input type="radio" name="answer" value="${arr[i].answers[0]}"> ${arr[i]
				.answers[0]}<br>
				<input type="radio" name="answer" value="${arr[i].answers[1]}"> ${arr[i]
				.answers[1]}<br>
				<input type="radio" name="answer" value="${arr[i].answers[2]}"> ${arr[i]
				.answers[2]}<br>
				<input type="radio" name="answer" value="${arr[i].answers[3]}"> ${arr[i]
				.answers[3]}
				</form>`;
		}
	}
}

renderQuestions(questionsArr);

// const q1 = document.getElementById("q-1");
// console.log(q1.elements["answer"].value);
// answer = q1.elements["answer"].value;
let score = 0;
function checkAnswers() {
	score = 0;
	for (let i = 0; i < questionsArr.length; i++) {
		const q = document.getElementById(`q-${i}`);
		const ans = q.elements["answer"].value;
		if (ans === questionsArr[i].answers[questionsArr[i].correctAnswer]) {
			score++;
		}
	}
	return score;
}
function displayScore(sco) {
	let result;
	if (sco < 2) {
		result = `${sco}! Dude you're funny!`;
	} else if (sco > 1 && sco < 4) {
		result = `${sco}. You need to watch more matches.`;
	} else if (sco > 3) {
		result = `${sco}. Nice!`;
	} else {
		result = 0;
	}
	document.getElementById("score").innerHTML = `Your score is ${result}`;
}

function clearInputs() {
	const inputs = document.querySelectorAll("input");
	const inputsAnswers = Array.from(inputs);
	inputsAnswers.map(el => (el.checked = false));
	document.getElementById("score").innerHTML = "";
}

function scoreButtonHandler() {
	console.log("clicked");
	checkAnswers();
	displayScore(score);
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
