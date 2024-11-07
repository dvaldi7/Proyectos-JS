/*
 * EJERCICIO:
 * Cada 1 de septiembre, el Hogwarts Express parte hacia la escuela
 * de programación de Hogwarts para magos y brujas del código.
 * En ella, su famoso sombrero seleccionador ayuda a los programadores
 * a encontrar su camino...
 * Desarrolla un programa que simule el comportamiento del sombrero.
 * Requisitos:
 * 1. El sombrero realizará 10 preguntas para determinar la casa del alumno.
 * 2. Deben existir 4 casas. Por ejemplo: Frontend, Backend, Mobile y Data.
 *    (Puedes elegir las que quieras)
 * Acciones:
 * 1. Crea un programa que solicite el nombre del alumno y realice 10
 *    preguntas, con cuatro posibles respuestas cada una.
 * 2. Cada respuesta asigna puntos a cada una de las casas (a tu elección).
 * 3. Una vez finalizado, el sombrero indica el nombre del alumno 
 *    y a qué casa pertenecerá (resuelve el posible empate de manera aleatoria,
 *    pero indicándole al alumno que la decisión ha sido complicada).
 */

//Variables para puntuaciones de las casas
let griffindor = 0, slytherin = 0, hufflepuff = 0, ravenclaw = 0;

//Saludo en pantalla para recoger el nombre. Nulo se admite como nombre: null
const name = prompt("Hola, Bienvenido a Hogwarts, soy el sombrero seleccionador,"+ 
     "cuál es tu nombre?");

//Asignación variables para html
let btn = document.getElementById("btn");
let text = document.getElementsByClassName("text")[0];
let text2 = document.getElementsByClassName("text")[0];

//Saludo en documento html
text.innerHTML = `<p>Hola ${name}, un placer conocerte. Veamos a que casa 
    puedo asignarte... Responde con sinceridad.</p>`;

//preguntas para asignar casa
const questions = [
    { 
        question: "1. ¿Qué valor consideras más importante? \na) Ambición \nb) Sabiduría \nc) Lealtad \nd) Valentía",
        answers: { "a": "slytherin", "b": "ravenclaw", "c": "hufflepuff", "d": "griffindor" }
    },
    { 
        question: "2. ¿Qué animal prefieres? \na) Serpiente \nb) Águila \nc) León \nd) Tejón",
        answers: { "a": "slytherin", "b": "ravenclaw", "c": "griffindor", "d": "hufflepuff" }
    },
    { 
        question: "3. ¿Cuál de estos pasatiempos te atrae más? \na) Resolver acertijos \nb) Ayudar a amigos \nc) Liderar proyectos \nd) Explorar lugares peligrosos",
        answers: { "a": "ravenclaw", "b": "hufflepuff", "c": "slytherin", "d": "griffindor" }
    },
    { 
        question: "4. ¿Cómo prefieres enfrentar tus problemas? \na) Con estrategia \nb) Con audacia \nc) Con trabajo en equipo \nd) Con astucia",
        answers: { "a": "ravenclaw", "b": "griffindor", "c": "hufflepuff", "d": "slytherin" }
    },
    { 
        question: "5. ¿Qué tipo de amigos prefieres? \na) Leales \nb) Inteligentes \nc) Valientes \nd) Ambiciosos",
        answers: { "a": "hufflepuff", "b": "ravenclaw", "c": "griffindor", "d": "slytherin" }
    },
    { 
        question: "6. ¿Qué lugar prefieres visitar? \na) Una biblioteca antigua \nb) Un bosque misterioso \nc) Una cueva de dragones \nd) Un campo de entrenamiento",
        answers: { "a": "ravenclaw", "b": "slytherin", "c": "griffindor", "d": "hufflepuff" }
    },
    { 
        question: "7. ¿Qué cualidad valoras en ti mismo? \na) Curiosidad \nb) Determinación \nc) Coraje \nd) Honestidad",
        answers: { "a": "ravenclaw", "b": "slytherin", "c": "griffindor", "d": "hufflepuff" }
    },
    { 
        question: "8. ¿Qué carrera te llama más la atención? \na) Liderazgo empresarial \nb) Investigación científica \nc) Ayuda comunitaria \nd) Aventurero",
        answers: { "a": "slytherin", "b": "ravenclaw", "c": "hufflepuff", "d": "griffindor" }
    },
    { 
        question: "9. ¿Qué tipo de magia te interesa más? \na) Encantamientos \nb) Pociones avanzadas \nc) Defensa contra las artes oscuras \nd) Sanación",
        answers: { "a": "ravenclaw", "b": "slytherin", "c": "griffindor", "d": "hufflepuff" }
    },
    { 
        question: "10. ¿Cómo prefieres pasar el tiempo? \na) Estudiando \nb) Trabajando en equipo \nc) Compitiendo \nd) Practicando deportes de riesgo",
        answers: { "a": "ravenclaw", "b": "hufflepuff", "c": "slytherin", "d": "griffindor" }
    }
];

//Iterador para sacar todas las preguntas por pantalla
function startQuestions(){
    for (let i = 0; i <= questions.length-1; i++){
        let selectHouse = prompt(questions[i].question).toLowerCase();
    
        let selectedHouse = questions[i].answers[selectHouse];
        
        if (selectedHouse) {
            switch (selectedHouse) {
                case "griffindor":
                    griffindor += 20;
                    break;
                case "slytherin":
                    slytherin += 20;
                    break;
                case "ravenclaw":
                    ravenclaw += 20;
                    break;
                case "hufflepuff":
                    hufflepuff += 20;
                    break;
            }
        } else {
            alert("Por favor, selecciona una opción válida.");
            i--; // Repetir la pregunta si la respuesta no es válida
        }
    }
    // Mostrar resultados en consola 
    console.log(`Griffindor: ${griffindor}, Slytherin: ${slytherin},
         Ravenclaw: ${ravenclaw}, Hufflepuff: ${hufflepuff}`);
    
    //Verificar qué casa tiene más puntos (o si se ha producido un empate)
    let maxScore = Math.max(griffindor, slytherin, ravenclaw, hufflepuff);

    let houses = [];
    if (griffindor === maxScore) houses.push("Griffindor");
    if (slytherin === maxScore) houses.push("Slytherin");
    if (ravenclaw === maxScore) houses.push("Ravenclaw");
    if (hufflepuff === maxScore) houses.push("Hufflepuff");

    //Si se ha producido un empate
    let selectedHouse;
    if (houses.length > 1) {
        selectedHouse = houses[Math.floor(Math.random() * houses.length)];
        text2.innerHTML = `<p>¡Vaya! Fue una decisión difícil, ${name}. Finalmente te voy a asigar a... ${selectedHouse}!!!.</p>`;
    } 
    //No hay empates
    else {
        selectedHouse = houses[0];
        text2.innerHTML = `<p>¡Felicidades, ${name}! tu casa es... ${selectedHouse}!!!.</p>`;
    }
};


//BOTON PARA INICIAR LA SELECCIÓN
btn.addEventListener("click", startQuestions);

