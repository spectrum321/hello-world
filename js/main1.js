let quiz = [];
let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];
let answeredIncorrectly = false;

function loadQuestions(category) {
    switch (category) {
        case 'tema2':
            quiz = tema2;
            break;
        case 'tema4':
            quiz = tema4;
            break;
		case 'tema6':
            quiz = tema6;
            break;
        case 'random':
            quiz = [...tema2, ...tema4, ...tema6].sort(() => Math.random() - 0.5).slice(0, 50);
            break;
        default:
            quiz = [];
    }
    document.getElementById("categories").classList.add("hidden");
    document.getElementById("question").classList.remove("hidden");
    document.getElementById("answers").classList.remove("hidden");
    incorrectAnswers = [];
    answeredIncorrectly = false;
    showQuestion();
}

function showQuestion() {
    const q = quiz[currentQuestion];
    document.getElementById("question").textContent = q.question;
    const answersElement = document.getElementById("answers");
    answersElement.innerHTML = "";
    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(button, index);
        answersElement.appendChild(button);
    });
}

function checkAnswer(button, index) {
    if (index === quiz[currentQuestion].correct) {
        button.classList.add("correct");
        if (!answeredIncorrectly) {
            score++;
        }
        setTimeout(() => {
            currentQuestion++;
            answeredIncorrectly = false;
            if (currentQuestion < quiz.length) {
                showQuestion();
            } else {
                showScore();
            }
        }, 1000);
    } else {
        button.classList.add("incorrect");
        incorrectAnswers.push(currentQuestion);
        answeredIncorrectly = true;
    }
}

function showScore() {
    document.getElementById("question").textContent = "¡Quiz terminado!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("score").textContent = `Puntuación: ${score} de ${quiz.length}`;
    document.getElementById("score").classList.remove("hidden");

    let correctAnswersHTML = "<h4>Respuestas correctas:</h4><ul>";
    quiz.forEach((q, index) => {
        let isIncorrect = incorrectAnswers.includes(index);
        correctAnswersHTML += `<li${isIncorrect ? ' class="wrong-answer"' : ''}>${q.question} - <strong>${q.answers[q.correct]}</strong></li>`;
    });
    correctAnswersHTML += "</ul>";
    document.getElementById("correct-answers").innerHTML = correctAnswersHTML;
    document.getElementById("correct-answers").classList.remove("hidden");
    document.getElementById("restart").classList.remove("hidden");
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    answeredIncorrectly = false;
    document.getElementById("question").classList.add("hidden");
    document.getElementById("answers").classList.add("hidden");
    document.getElementById("score").classList.add("hidden");
    document.getElementById("correct-answers").classList.add("hidden");
    document.getElementById("restart").classList.add("hidden");
    document.getElementById("categories").classList.remove("hidden");
}
