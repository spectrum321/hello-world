let quiz = [];
let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];
let unansweredQuestions = [];
let answeredIncorrectly = false;
let answered = false;
let testTitle = "";

 document.body.style.backgroundColor = "#ffffee"; // Color suave para la vista

document.getElementById("answers").style.textAlign = "center"; // Centra las respuestas
document.getElementById("test-title").classList.remove("hidden");
function loadQuestions(category) {
    switch (category) {
        case 'tema2': testTitle = 'TEST TEMA 2';
            quiz = tema2;
            break;
        case 'tema4': testTitle = 'TEST TEMA 4';
            quiz = tema4;
            break;
        case 'tema6': testTitle = 'TEST TEMA 6';
            quiz = tema6;
            break;
		case 'tema7': testTitle = 'TEST TEMA 7';
            quiz = tema7;
            break;
		case 'tema8': testTitle = 'TEST TEMA 8';
            quiz = tema8;
            break;
		case 'tema9': testTitle = 'TEST TEMA 9';
            quiz = tema9;
            break;
		case 'tema10': testTitle = 'TEST TEMA 10';
            quiz = tema10;
            break;
		case 'tema11': testTitle = 'TEST TEMA 11';
            quiz = tema11;
            break;
		case 'tema12': testTitle = 'TEST TEMA 12';
            quiz = tema12;
            break;
		case 'tema1202': testTitle = 'TEST TEMA 12-02';
            quiz = tema1202;
            break;
		case 'tema13': testTitle = 'TEST TEMA 13';
            quiz = tema13;
            break;
		case 'tema14': testTitle = 'TEST TEMA 14';
            quiz = tema14;
            break;
		case 'tema15': testTitle = 'TEST TEMA 15';
            quiz = tema15;
            break;
		case 'tema18': testTitle = 'TEST TEMA 18';
            quiz = tema18;
            break;
		case 'tema1802': testTitle = 'TEST TEMA 18-2';
            quiz = tema1802;
            break;
		case 'tema19': testTitle = 'TEST TEMA 19';
            quiz = tema19;
            break;
		case 'tema1902': testTitle = 'TEST TEMA 19-2';
            quiz = tema1902;
            break;
		case 'tema23': testTitle = 'TEST TEMA 23';
            quiz = tema23;
            break;
		case 'tema24': testTitle = 'TEST TEMA 24';
            quiz = tema24;
            break;
		case 'tema25': testTitle = 'TEST TEMA 25';
            quiz = tema25;
            break;
		case 'tema2502': testTitle = 'TEST TEMA 25-2';
            quiz = tema2502;
            break;
		case 'tema31': testTitle = 'TEST TEMA 31';
            quiz = tema31;
            break;		
		case 'tema33': testTitle = 'TEST TEMA 33';
            quiz = tema33;
            break;	
		case 'tema34': testTitle = 'TEST TEMA 34';
            quiz = tema34;
            break;		
		case 'tema35': testTitle = 'TEST TEMA 35';
            quiz = tema35;
            break;		
		case 'tema36': testTitle = 'TEST TEMA 36';
            quiz = tema36;
            break;
		case 'tema3602': testTitle = 'TEST TEMA 36-2';
            quiz = tema3602;
            break;
		case 'tema37': testTitle = 'TEST TEMA 37';
            quiz = tema37;
            break;				
		case 'tema3702': testTitle = 'TEST TEMA 37-2';
            quiz = tema3702;
            break;
		case 'tema40': testTitle = 'TEST TEMA 40';
            quiz = tema40;
            break;
		case 'tema402': testTitle = 'TEST TEMA 402';
            quiz = tema402;
            break;
		/* case 'tema41': testTitle = 'TEST TEMA 41';
            quiz = tema41;
           break; */
		case 'tema42': testTitle = 'TEST TEMA 42';
            quiz = tema42;
           break;
		case 'tema4202': testTitle = 'TEST TEMA 42-2';
            quiz = tema4202;
           break;
		case 'tema43': testTitle = 'TEST TEMA 43';
            quiz = tema43;
           break;
		case 'tema4302': testTitle = 'TEST TEMA 43-2';
            quiz = tema4302;
           break;
		case 'tema44': testTitle = 'TEST TEMA 44';
            quiz = tema44;
           break;
		case 'tema4402': testTitle = 'TEST TEMA 44-2';
            quiz = tema4402;
           break;
		case 'tema45': testTitle = 'TEST TEMA 45';
            quiz = tema45;
           break;
		case 'tema46': testTitle = 'TEST TEMA 46';
            quiz = tema46;
           break;
		case 'tema47': testTitle = 'TEST TEMA 47';
            quiz = tema47;
           break;  
		case 'tema48': testTitle = 'TEST TEMA 48';
            quiz = tema48;
           break; 	
		case 'tema4802': testTitle = 'TEST TEMA 48-2';
            quiz = tema4802;
           break;
		case 'tema1opo': testTitle = 'TEST TEMA 1 OPO';
            quiz = tema1opo;
           break; 
		case 'tema2opo': testTitle = 'TEST TEMA 2 OPO';
            quiz = tema2opo;
           break; 
		case 'tema3opo': testTitle = 'TEST TEMA 3 OPO';
            quiz = tema3opo;
           break; 
		case 'tema4opo': testTitle = 'TEST TEMA 4 OPO';
            quiz = tema4opo;
           break;		   
        case 'tema5opo': testTitle = 'TEST TEMA 5 OPO';
            quiz = tema5opo;
           break; 
        case 'tema6opo': testTitle = 'TEST TEMA 6 OPO';
            quiz = tema6opo;
           break; 
        case 'tema7opo': testTitle = 'TEST TEMA 7 OPO';
            quiz = tema7opo;
           break; 
		case 'tema8opo': testTitle = 'TEST TEMA 8 OPO';
            quiz = tema8opo;
           break;
        case 'tema9opo': testTitle = 'TEST TEMA 9 OPO';
            quiz = tema9opo;
           break; 
		case 'tema10opo': testTitle = 'TEST TEMA 10 OPO';
            quiz = tema10opo;
           break;
		case 'tai2024': testTitle = 'TEST TAI 2024';
            quiz = tai2024;
           break;	
		case 'tailibre2024': testTitle = 'TEST TAI LIBRE 2024';
            quiz = tailibre2024;
           break;	
		case 'tailibre2023': testTitle = 'TEST TAI LIBRE 2023';
            quiz = tailibre2023;
           break;		   
        case 'random':
            quiz = [...tema2, ...tema4, ...tema6, ...tema7, ...tema8, ...tema9, ...tema10, ...tema11, ...tema12, ...tema13, ...tema14, ...tema15, ...tema18, ...tema19, ...tema23,
			 ...tema24, ...tema25, ...tema31, ...tema33, ...tema34, ...tema35, ...tema36, ...tema37, ...tema40, ...tema402, ...tema42, ...tema43, ...tema44, ...tema45, ...tema46,
			 ...tema47, ...tema48, ...tema1opo, ...tema2opo, ...tema3opo, ...tema4opo, ...tema5opo, ...tema6opo, ...tema7opo, ...tema8opo, ...tema9opo, ...tema10opo, ...tai2024,
			 ...tailibre2024, ...tailibre2023].sort(() => Math.random() - 0.5).slice(0, 50);
            break;
            default: quiz = []; testTitle = 'TEST DESCONOCIDO';
    }
           
    document.getElementById("categories").classList.add("hidden");
    document.getElementById("question").classList.remove("hidden");
    document.getElementById("answers").classList.remove("hidden");
	document.getElementById("test-title").textContent = testTitle;
    incorrectAnswers = [];
    answeredIncorrectly = false;
    showQuestion();
}

function showQuestion() {
    const q = quiz[currentQuestion];
    document.getElementById("question").innerHTML = `<strong>Pregunta ${currentQuestion + 1} de ${quiz.length}</strong><br>${q.question}`;
    const answersElement = document.getElementById("answers");
    answersElement.innerHTML = "";
    answersElement.style.display = "flex";
    answersElement.style.flexDirection = "column";
    answersElement.style.alignItems = "center";
    const answerLabels = ['a.)', 'b.)', 'c.)', 'd.)'];
    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = `${answerLabels[index]} ${answer}`;
        button.onclick = () => checkAnswer(button, index);
        button.style.display = "block";
        button.style.margin = "10px 0";
        button.style.width = "50%";
        answersElement.appendChild(button);
    });
    
    // Agregar botón de siguiente pregunta
    const nextButton = document.createElement("button");
    nextButton.textContent = "Siguiente Pregunta";
    nextButton.style.marginTop = "20px";
    nextButton.onclick = () => nextQuestion();
    answersElement.appendChild(nextButton);
	
	   // Botón de Salir del Test
    const exitButton = document.createElement("button");
    exitButton.textContent = "Salir del Test";
    exitButton.style.marginTop = "10px";
    exitButton.style.backgroundColor = "red";
    exitButton.style.color = "white";
    exitButton.style.border = "none";
    exitButton.style.padding = "10px 20px";
    exitButton.style.cursor = "pointer";
    exitButton.onclick = () => exitQuiz();
    answersElement.appendChild(exitButton);

}
// Función para salir del test
function exitQuiz() {
    if (confirm("¿Seguro que quieres salir del test? Perderás el progreso.")) {
        location.reload(); // Recarga la página para volver al inicio
    }
}
/* function checkAnswer(button, index) {
    answered = true;
    if (index === quiz[currentQuestion].correct) {
        button.style.backgroundColor = "lightgreen";
        if (!answeredIncorrectly) {
            score++;
        }
    } else {
        button.style.backgroundColor = "lightcoral";
        incorrectAnswers.push(currentQuestion);
        answeredIncorrectly = true;
    }
} */

function checkAnswer(button, index) {
    answered = true;
    if (index === quiz[currentQuestion].correct) {
        button.classList.add("correct");  // Usar clase CSS en lugar de estilo directo
        if (!answeredIncorrectly) {
            score++;
        }
    } else {
        button.classList.add("incorrect");  // Usar clase CSS en lugar de estilo directo
        incorrectAnswers.push(currentQuestion);
        answeredIncorrectly = true;
    }
}

function nextQuestion() {
    if (!answered) {
        unansweredQuestions.push(currentQuestion);
    }
    answered = false;
    answeredIncorrectly = false;
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById("question").textContent = "¡Quiz terminado!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("score").textContent = `Puntuación: ${score} de ${quiz.length}`;
    document.getElementById("score").classList.remove("hidden");

    let correctAnswersHTML = "<h4>Respuestas correctas:</h4><ul>";
    quiz.forEach((q, index) => {
        let color = unansweredQuestions.includes(index) ? 'gray' : incorrectAnswers.includes(index) ? 'red' : 'green';
        correctAnswersHTML += `<li style="color:${color}">${q.question} - <strong>${q.answers[q.correct]}</strong></li>`;
    });
    correctAnswersHTML += "</ul>";
    document.getElementById("correct-answers").innerHTML = correctAnswersHTML;
    document.getElementById("correct-answers").classList.remove("hidden");
	document.getElementById("restart").classList.remove("hidden");
}

/* function showScore() {
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
} */

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