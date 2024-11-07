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
    "1. ¿Qué color te gusta más? \na) Rojo \nb) Verde \nc) Azul \nd) Amarillo",
    "2. ¿Que animal te gusta más?: \na) León \nb) Serpiente \nc) Cuervo \nd) Tejón",
    "3. ¿Qué estación te gusta más? \na) Verano \nb) Invierno \nc) Otoño \nd) Primavera",
    "4. ¿Qué actividad prefieres? \na) Deportes \nb) Juegos de estrategia \nc) Lectura \nd) Jardinería",
    /*"5. ¿Cómo enfrentas un reto? \na) Con valentía \nb) Con astucia \nc) Con inteligencia \nd) Con paciencia",
    "6. ¿Qué valor aprecias más? \na) Coraje \nb) Ambición \nc) Sabiduría \nd) Lealtad",
    "7. ¿Cuál es tu materia favorita? \na) Defensa contra las artes oscuras \nb) Pociones \nc) Encantamientos \nd) Herbología",
    "8. ¿Qué lugar prefieres? \na) Montañas \nb) Bosques \nc) Playas \nd) Campos",
    "9. ¿Qué música prefieres? \na) Rock \nb) Electrónica \nc) Clásica \nd) Folk",
    "10. ¿Qué talento te gustaría tener? \na) Fuerza \nb) Sigilo \nc) Conocimiento \nd) Empatía"
    */
];

//Iterador para sacar todas las preguntas por pantalla
function startQuestions(){
    for (let i = 0; i <= questions.length-1; i++){
        let selectHouse = prompt(questions[i]);

        switch (selectHouse.toLowerCase()) {
            case "a":
            griffindor += 20;
            break;
        
            case "b":
            slytherin += 20;
            break;
        
            case "c":
            ravenclaw += 20;
            break;
        
            case "d":
            hufflepuff += 20;
            break;
        
            default:
            alert("Por favor, selecciona una opción válida.");
        
            i--; //Repite la pregunta si la respuesta no es válida
            break;
        }
    }
    // Mostrar resultados en consola 
    console.log(`Griffindor: ${griffindor}, Slytherin: ${slytherin},
         Ravenclaw: ${ravenclaw}, Hufflepuff: ${hufflepuff}`);
    
    //Verificar que casa tiene más puntos (o si se ha producido un empate)
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

