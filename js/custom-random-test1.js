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

// Función para mostrar/ocultar subcategorías
function toggleSubcategory(id) {
    const subcategory = document.getElementById(id);
    if (subcategory.style.display === "block") {
        subcategory.style.display = "none";
    } else {
        subcategory.style.display = "block";
    }
}

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
		case 'juntalibre2023': testTitle = 'TEST JA LIBRE 2023';
            quiz = juntalibre2023;
           break;		
		case 'ayudantestecnicos': testTitle = 'TEST AYUDANTES TÉCNICOS INFORMÁTICOS PA';
            quiz = ayudantestecnicos;
           break;		   
		case 'uninavarra2024': testTitle = 'TEST Oficial Técnico Universidad Pública de Navarra 2024';
            quiz = uninavarra2024;
           break;
		case 'auxiliarcadiz2022': testTitle = 'TEST Técnico Auxiliar de Informática cadiz 2022';
            quiz = auxiliarcadiz2022;
           break;
		case 'taiburriana2024': testTitle = 'TEST Técnico Auxiliar Burriana 2024';
            quiz = taiburriana2024;
           break;			   
		case 'uninavarrapb2024': testTitle = 'TEST Técnico Auxiliar Univ Navarra 2024';
            quiz = uninavarrapb2024;
           break;
		case 'tsupcyl2024': testTitle = 'TEST TÉCNICO SUPERIOR Castilla y Leon 2024';
            quiz = tsupcyl2024;
           break;
		case 'rioja2024': testTitle = 'TEST TÉCNICO la rioja 2024';
            quiz = rioja2024;
           break;
		case 'jcastellon2024': testTitle = 'TEST TÉCNICO Junta Castellon 2024';
            quiz = jcastellon2024;
           break;
        case 'random':
            testTitle = 'TEST ALEATORIO';
            quiz = [...tema2, ...tema4, ...tema6, ...tema7, ...tema8, ...tema9, ...tema10, ...tema11, ...tema12, ...tema13, ...tema14, ...tema15, ...tema18, ...tema19, ...tema23,
             ...tema24, ...tema25, ...tema31, ...tema33, ...tema34, ...tema35, ...tema36, ...tema37, ...tema40, ...tema402, ...tema42, ...tema43, ...tema44, ...tema45, ...tema46,
             ...tema47, ...tema48, ...tema1opo, ...tema2opo, ...tema3opo, ...tema4opo, ...tema5opo, ...tema6opo, ...tema7opo, ...tema8opo, ...tema9opo, ...tema10opo, ...tai2024,
			 ...tailibre2024, ...tailibre2023, ...juntalibre2023, ...ayudantestecnicos, ...uninavarra2024, ...auxiliarcadiz2022, ...taiburriana2024, ...uninavarrapb2024, ...uninavarrapb2024,
			 ...tsupcyl2024, ...rioja2024, ...jcastellon2024].sort(() => Math.random() - 0.5).slice(0, 50);
            break;
        default: quiz = []; testTitle = 'TEST DESCONOCIDO';
    }
           
    document.getElementById("categories").classList.add("hidden");
    document.getElementById("question").classList.remove("hidden");
    document.getElementById("answers").classList.remove("hidden");
    document.getElementById("test-title").textContent = testTitle;
    incorrectAnswers = [];
    answeredIncorrectly = false;
    currentQuestion = 0;
    score = 0;
    unansweredQuestions = [];
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

function checkAnswer(button, index) {
    answered = true;
    if (index === quiz[currentQuestion].correct) {
        button.classList.add("correct"); // Usar clase en lugar de estilo directo
        if (!answeredIncorrectly) {
            score++;
        }
    } else {
        button.classList.add("incorrect"); // Usar clase en lugar de estilo directo
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

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    unansweredQuestions = [];
    answeredIncorrectly = false;
    answered = false;
    document.getElementById("question").classList.add("hidden");
    document.getElementById("answers").classList.add("hidden");
    document.getElementById("score").classList.add("hidden");
    document.getElementById("correct-answers").classList.add("hidden");
    document.getElementById("restart").classList.add("hidden");
    document.getElementById("categories").classList.remove("hidden");
}

// Inicializar las subcategorías como ocultas al cargar la página
window.onload = function() {
    const subcategories = document.querySelectorAll('.subcategory');
    subcategories.forEach(function(subcategory) {
        subcategory.style.display = 'none';
    });
};
// Añadir este código al final del archivo main-js-updated.js

// Función para crear el modal de selección de temas
function createRandomTestSelector() {
    // Ocultar menú de categorías
    document.getElementById("categories").classList.add("hidden");
    
    // Crear el modal
    const modal = document.createElement("div");
    modal.id = "custom-test-modal";
    modal.style.maxWidth = "800px";
    modal.style.margin = "0 auto";
    modal.style.padding = "20px";
    modal.style.border = "1px solid #ccc";
    modal.style.borderRadius = "10px";
    modal.style.backgroundColor = "#ffffee";
    
    // Título del modal
    const title = document.createElement("h3");
    title.textContent = "Selecciona los temas para tu test aleatorio";
    modal.appendChild(title);
    
    // Descripción
    const description = document.createElement("p");
    description.textContent = "Marca los temas que deseas incluir en tu test aleatorio y selecciona el número de preguntas";
    modal.appendChild(description);
    
    // Contenedor de checkboxes para los temas
    const topicsContainer = document.createElement("div");
    topicsContainer.style.maxHeight = "400px";
    topicsContainer.style.overflowY = "auto";
    topicsContainer.style.padding = "10px";
    topicsContainer.style.border = "1px solid #ddd";
    topicsContainer.style.borderRadius = "5px";
    topicsContainer.style.marginBottom = "20px";
    
    // Crear checkboxes para cada tema
    const allTopics = [
        {id: 'tema2', name: 'Tema 2 - Organización y funcionamiento'},
        {id: 'tema4', name: 'Tema 4 - Microinformática'},
        {id: 'tema6', name: 'Tema 6 - Memoria principal'},
        {id: 'tema7', name: 'Tema 7 - El subsistema de Entrada/Salida'},
        {id: 'tema8', name: 'Tema 8 - Gestión de la memoria'},
        {id: 'tema9', name: 'Tema 9 - Dispositivos de almacenamiento'},
        {id: 'tema10', name: 'Tema 10 - Sistemas operativos'},
        {id: 'tema11', name: 'Tema 11 - Sistema Microsoft Windows'},
        {id: 'tema12', name: 'Tema 12 - Sistemas Operativos Unix y Linux'},
        {id: 'tema1202', name: 'Tema 12-2 - Sistemas Operativos Unix y Linux'},
        {id: 'tema13', name: 'Tema 13 - Sistemas Operativos para dispositivos móviles'},
        {id: 'tema14', name: 'Tema 14 - Organización y métodos de acceso a ficheros'},
        {id: 'tema15', name: 'Tema 15 - Gestión de Procesos'},
        {id: 'tema18', name: 'Tema 18 - Lenguaje SQL'},
        {id: 'tema1802', name: 'Tema 18-2 - Lenguaje SQL'},
        {id: 'tema19', name: 'Tema 19 - Administración de bases de datos'},
        {id: 'tema1902', name: 'Tema 19-2 - Administración de bases de datos'},
        {id: 'tema23', name: 'Tema 23 - Mantenimiento de Sistemas de Información'},
        {id: 'tema24', name: 'Tema 24 - Arquitectura cliente/servidor'},
        {id: 'tema25', name: 'Tema 25 - Arquitecturas de servicios Web'},
        {id: 'tema2502', name: 'Tema 25-2 - Arquitecturas de servicios Web'},
        {id: 'tema31', name: 'Tema 31 - ASP y ASP.Net, JSP y PHP'},
        {id: 'tema33', name: 'Tema 33 - Applets y servlets, Javascript'},
        {id: 'tema34', name: 'Tema 34 - HTML y derivaciones'},
        {id: 'tema35', name: 'Tema 35 - XML y derivaciones'},
        {id: 'tema36', name: 'Tema 36 - Navegadores, Portales'},
        {id: 'tema3602', name: 'Tema 36-2 - Navegadores, Portales'},
        {id: 'tema37', name: 'Tema 37 - Aplicaciones Móviles'},
        {id: 'tema3702', name: 'Tema 37-2 - Aplicaciones Móviles'},
        {id: 'tema40', name: 'Tema 40 - Telecomunicaciones'},
        {id: 'tema402', name: 'Tema 40-2 - Telecomunicaciones'},
        /* {id: 'tema41', name: 'Tema 41 - Servicios y sistemas de transmisión'}, */
        {id: 'tema42', name: 'Tema 42 - Internet, Servicios y Protocolos'},
        {id: 'tema4202', name: 'Tema 42-2 - Internet, Servicios y Protocolos'},
        {id: 'tema43', name: 'Tema 43 - Redes de área local'},
        {id: 'tema4302', name: 'Tema 43-2 - Redes de área local'},
        {id: 'tema44', name: 'Tema 44 - Seguridad informática'},
        {id: 'tema4402', name: 'Tema 44-2 - Seguridad informática'},
        {id: 'tema45', name: 'Tema 45 - Redes Privadas Virtuales'},
        {id: 'tema46', name: 'Tema 46 - Centros de Proceso de Datos'},
        {id: 'tema47', name: 'Tema 47 - Sistemas de gestión de incidencias'},
        {id: 'tema48', name: 'Tema 48 - La sociedad de la información'},
        {id: 'tema4802', name: 'Tema 48-2 - La sociedad de la información'},
        {id: 'tema1opo', name: 'Tema 1 OPO - Informática básica'},
        {id: 'tema2opo', name: 'Tema 2 OPO - Sistemas operativos'},
        {id: 'tema3opo', name: 'Tema 3 OPO - Aplicaciones web'},
		{id: 'tema4opo', name: 'Tema 4 OPO - Administracion base de datos'},
        {id: 'tema5opo', name: 'Tema 5 OPO - Sistemas de backup y su recuperación'},
        {id: 'tema6opo', name: 'Tema 6 OPO - Conceptos de seguridad de los sistemas de información'},
        {id: 'tema7opo', name: 'Tema 7 OPO - Infraestructura física de un CPD'},
		{id: 'tema8opo', name: 'Tema 8 OPO - Comunicaciones. Medios de transmisión'},
        {id: 'tema9opo', name: 'Tema 9 OPO - Seguridad y protección en redes de comunicaciones'},
		{id: 'tema10opo', name: 'Tema 10 OPO - Sistemas de Almacenamiento de Altas Prestaciones'},
        {id: 'tai2024', name: 'TAI 2024'},
		{id: 'tailibre2024', name: 'TAI LIBRE 2024'},
		{id: 'tailibre2023', name: 'TAI LIBRE 2023'},
		{id: 'juntalibre2023', name: 'TEST JA LIBRE 2023'},
		{id: 'ayudantestecnicos', name: 'TEST AYUDANTES TÉCNICOS INFORMÁTICOS PA'},
		{id: 'uninavarra2024', name: 'TEST Oficial Técnico Universidad Pública de Navarra 2024'},
		{id: 'auxiliarcadiz2022', name: 'TEST Técnico Auxiliar de Informática cadiz 2022'},
        {id: 'taiburriana2024', name: 'TEST Técnico Auxiliar Burriana 2024'},
		{id: 'uninavarrapb2024', name: 'TEST Técnico Auxiliar Univ Navarra 2024'},
		{id: 'tsupcyl2024', name: 'TEST TÉCNICO SUPERIOR Castilla y Leon 2024'},
		{id: 'rioja2024', name: 'TEST TÉCNICO la rioja 2024'},
		{id: 'jcastellon2024', name: 'TEST TÉCNICO Junta Castellon 2024'},
		{id: 'sasbaleares', name: 'TEST TÉCNICO SUPERIOR S 2024'},
		{id: 'raid', name: 'TEST TÉCNICO la rioja 2024'},
		{id: 'cablesred', name: 'TEST TÉCNICO Junta Castellon 2024'}
    ];
    
    // Botón para seleccionar/deseleccionar todos
    const selectAllContainer = document.createElement("div");
    selectAllContainer.style.marginBottom = "10px";
    const selectAllBtn = document.createElement("button");
    selectAllBtn.textContent = "Seleccionar Todos";
    selectAllBtn.style.marginRight = "10px";
    selectAllBtn.onclick = function() {
        const checkboxes = document.querySelectorAll('#custom-test-modal input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = true);
    };
    
    const deselectAllBtn = document.createElement("button");
    deselectAllBtn.textContent = "Deseleccionar Todos";
    deselectAllBtn.onclick = function() {
        const checkboxes = document.querySelectorAll('#custom-test-modal input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);
    };
    
    selectAllContainer.appendChild(selectAllBtn);
    selectAllContainer.appendChild(deselectAllBtn);
    topicsContainer.appendChild(selectAllContainer);
    
    // Añadir checkbox para cada tema
    allTopics.forEach(topic => {
        const topicDiv = document.createElement("div");
        topicDiv.style.margin = "5px 0";
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `checkbox-${topic.id}`;
        checkbox.value = topic.id;
        
        const label = document.createElement("label");
        label.htmlFor = `checkbox-${topic.id}`;
        label.textContent = topic.name;
        label.style.paddingLeft = "5px";
        
        topicDiv.appendChild(checkbox);
        topicDiv.appendChild(label);
        topicsContainer.appendChild(topicDiv);
    });
    
    modal.appendChild(topicsContainer);
    
    // Selector para número de preguntas
    const numQuestionsDiv = document.createElement("div");
    numQuestionsDiv.style.margin = "20px 0";
    
    const numQuestionsLabel = document.createElement("label");
    numQuestionsLabel.htmlFor = "num-questions";
    numQuestionsLabel.textContent = "Número de preguntas: ";
    
    const numQuestionsInput = document.createElement("input");
    numQuestionsInput.type = "number";
    numQuestionsInput.id = "num-questions";
    numQuestionsInput.min = "5";
    numQuestionsInput.max = "100";
    numQuestionsInput.value = "50";
    numQuestionsInput.style.width = "60px";
    numQuestionsInput.style.marginLeft = "10px";
    
    numQuestionsDiv.appendChild(numQuestionsLabel);
    numQuestionsDiv.appendChild(numQuestionsInput);
    modal.appendChild(numQuestionsDiv);
    
    // Botones
    const buttonsDiv = document.createElement("div");
    buttonsDiv.style.display = "flex";
    buttonsDiv.style.justifyContent = "center";
    buttonsDiv.style.gap = "10px";
    buttonsDiv.style.marginTop = "20px";
    
    const startButton = document.createElement("button");
    startButton.textContent = "Iniciar Test";
    startButton.style.backgroundColor = "#3399ff";
    startButton.style.color = "white";
    startButton.style.padding = "10px 20px";
    startButton.style.cursor = "pointer";
    startButton.onclick = function() {
        generateCustomTest();
    };
    
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancelar";
    cancelButton.style.padding = "10px 20px";
    cancelButton.style.cursor = "pointer";
    cancelButton.onclick = function() {
        document.body.removeChild(modal);
        document.getElementById("categories").classList.remove("hidden");
    };
    
    buttonsDiv.appendChild(startButton);
    buttonsDiv.appendChild(cancelButton);
    modal.appendChild(buttonsDiv);
    
    document.body.appendChild(modal);
}

// Función para generar el test personalizado
function generateCustomTest() {
    const selectedTopics = [];
    const checkboxes = document.querySelectorAll('#custom-test-modal input[type="checkbox"]:checked');
    
    if (checkboxes.length === 0) {
        alert("Debes seleccionar al menos un tema");
        return;
    }
    
    // Obtener todos los temas seleccionados
    checkboxes.forEach(cb => {
        selectedTopics.push(cb.value);
    });
    
    // Obtener número de preguntas
    const numQuestions = parseInt(document.getElementById("num-questions").value);
    if (isNaN(numQuestions) || numQuestions < 5) {
        alert("El número de preguntas debe ser al menos 5");
        return;
    }
    
     // Crear un array con todas las preguntas de los temas seleccionados
    let allQuestions = [];
    selectedTopics.forEach(topic => {
        switch(topic) {
            case 'tema2': allQuestions = allQuestions.concat(tema2); break;
            case 'tema4': allQuestions = allQuestions.concat(tema4); break;
            case 'tema6': allQuestions = allQuestions.concat(tema6); break;
            case 'tema7': allQuestions = allQuestions.concat(tema7); break;
            case 'tema8': allQuestions = allQuestions.concat(tema8); break;
            case 'tema9': allQuestions = allQuestions.concat(tema9); break;
            case 'tema10': allQuestions = allQuestions.concat(tema10); break;
            case 'tema11': allQuestions = allQuestions.concat(tema11); break;
            case 'tema12': allQuestions = allQuestions.concat(tema12); break;
            case 'tema1202': allQuestions = allQuestions.concat(tema1202); break;
            case 'tema13': allQuestions = allQuestions.concat(tema13); break;
            case 'tema14': allQuestions = allQuestions.concat(tema14); break;
            case 'tema15': allQuestions = allQuestions.concat(tema15); break;
            case 'tema18': allQuestions = allQuestions.concat(tema18); break;
            case 'tema1802': allQuestions = allQuestions.concat(tema1802); break;
            case 'tema19': allQuestions = allQuestions.concat(tema19); break;
            case 'tema1902': allQuestions = allQuestions.concat(tema1902); break;
            case 'tema23': allQuestions = allQuestions.concat(tema23); break;
            case 'tema24': allQuestions = allQuestions.concat(tema24); break;
            case 'tema25': allQuestions = allQuestions.concat(tema25); break;
            case 'tema2502': allQuestions = allQuestions.concat(tema2502); break;
            case 'tema31': allQuestions = allQuestions.concat(tema31); break;
            case 'tema33': allQuestions = allQuestions.concat(tema33); break;
            case 'tema34': allQuestions = allQuestions.concat(tema34); break;
            case 'tema35': allQuestions = allQuestions.concat(tema35); break;
            case 'tema36': allQuestions = allQuestions.concat(tema36); break;
            case 'tema3602': allQuestions = allQuestions.concat(tema3602); break;
            case 'tema37': allQuestions = allQuestions.concat(tema37); break;
            case 'tema3702': allQuestions = allQuestions.concat(tema3702); break;
            case 'tema40': allQuestions = allQuestions.concat(tema40); break;
            case 'tema402': allQuestions = allQuestions.concat(tema402); break;
            case 'tema41': allQuestions = allQuestions.concat(tema41); break;
            case 'tema42': allQuestions = allQuestions.concat(tema42); break;
            case 'tema4202': allQuestions = allQuestions.concat(tema4202); break;
            case 'tema43': allQuestions = allQuestions.concat(tema43); break;
            case 'tema4302': allQuestions = allQuestions.concat(tema4302); break;
            case 'tema44': allQuestions = allQuestions.concat(tema44); break;
            case 'tema4402': allQuestions = allQuestions.concat(tema4402); break;
            case 'tema45': allQuestions = allQuestions.concat(tema45); break;
            case 'tema46': allQuestions = allQuestions.concat(tema46); break;
            case 'tema47': allQuestions = allQuestions.concat(tema47); break;
            case 'tema48': allQuestions = allQuestions.concat(tema48); break;
            case 'tema4802': allQuestions = allQuestions.concat(tema4802); break;
            case 'tema1opo': allQuestions = allQuestions.concat(tema1opo); break;
            case 'tema2opo': allQuestions = allQuestions.concat(tema2opo); break;
            case 'tema3opo': allQuestions = allQuestions.concat(tema3opo); break;
			case 'tema4opo': allQuestions = allQuestions.concat(tema4opo); break;
			case 'tema5opo': allQuestions = allQuestions.concat(tema5opo); break;
            case 'tema6opo': allQuestions = allQuestions.concat(tema6opo); break;
            case 'tema7opo': allQuestions = allQuestions.concat(tema7opo); break;
			case 'tema8opo': allQuestions = allQuestions.concat(tema8opo); break;
            case 'tema9opo': allQuestions = allQuestions.concat(tema9opo); break;
			case 'tema10opo': allQuestions = allQuestions.concat(tema10opo); break;
            case 'tai2024': allQuestions = allQuestions.concat(tai2024); break;
			case 'tailibre2024': allQuestions = allQuestions.concat(tailibre2024); break;
			case 'tailibre2023': allQuestions = allQuestions.concat(tailibre2023); break;
			case 'ayudantestecnicos': allQuestions = allQuestions.concat(ayudantestecnicos); break;
			case 'uninavarra2024': allQuestions = allQuestions.concat(uninavarra2024); break;
            case 'auxiliarcadiz2022': allQuestions = allQuestions.concat(auxiliarcadiz2022); break;
			case 'taiburriana2024': allQuestions = allQuestions.concat(taiburriana2024); break;
            case 'uninavarrapb2024': allQuestions = allQuestions.concat(uninavarrapb2024); break;
			case 'tsupcyl2024': allQuestions = allQuestions.concat(tsupcyl2024); break;
			case 'rioja2024': allQuestions = allQuestions.concat(rioja2024); break;
			case 'jcastellon2024': allQuestions = allQuestions.concat(jcastellon2024); break;
        }
    });
    
    // Verificar que hay suficientes preguntas
    if (allQuestions.length < numQuestions) {
        alert(`Los temas seleccionados solo contienen ${allQuestions.length} preguntas. El número máximo de preguntas para este test será ${allQuestions.length}.`);
        numQuestions = allQuestions.length;
    }
    
    // Mezclar y seleccionar el número de preguntas solicitado
    const selectedQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, numQuestions);
    
    // Ocultar el modal
    const modal = document.getElementById("custom-test-modal");
    document.body.removeChild(modal);
    
    // Configurar el test
    testTitle = `TEST PERSONALIZADO (${numQuestions} preguntas)`;
    quiz = selectedQuestions;
    
    // Iniciar el test
    document.getElementById("question").classList.remove("hidden");
    document.getElementById("answers").classList.remove("hidden");
    document.getElementById("test-title").textContent = testTitle;
    document.getElementById("test-title").classList.remove("hidden");
    incorrectAnswers = [];
    answeredIncorrectly = false;
    currentQuestion = 0;
    score = 0;
    unansweredQuestions = [];
    showQuestion();
}

// Modificar el HTML para añadir el botón de test personalizado
function addCustomTestButton() {
    // Buscar el botón de test aleatorio existente
    const randomTestButton = document.getElementById("random-test");
    
    // Crear el botón de test personalizado
    const customTestButton = document.createElement("button");
    customTestButton.id = "custom-test";
    customTestButton.textContent = "TEST ALEATORIO PERSONALIZADO";
    customTestButton.style.backgroundColor = "#33cc66";
    customTestButton.style.color = "white";
    customTestButton.style.fontWeight = "bold";
    customTestButton.style.width = "60%";
    customTestButton.style.margin = "10px auto";
    customTestButton.onclick = createRandomTestSelector;
    
    // Insertar el nuevo botón después del botón de test aleatorio
    randomTestButton.parentNode.insertBefore(customTestButton, randomTestButton.nextSibling);
}

// Ejecutar cuando el DOM esté cargado
window.addEventListener('DOMContentLoaded', function() {
    addCustomTestButton();
});
