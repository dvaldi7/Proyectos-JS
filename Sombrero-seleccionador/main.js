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
let griffindor = 0, slyhering = 0, hufflepuff = 0, ravenclaw = 0;

//Saludo en pantalla para recoger el nombre. Nulo se admite como nombre: null
const name = prompt("Hola, Bienvenido a Hogwarts, soy el sombrero seleccionador,"+ 
     "cuál es tu nombre?");

//Asignación variables para html
let btn = document.getElementById("btn");
let text = document.getElementsByClassName("text")[0];

//Saludo en documento html
text.innerHTML = `<p>Hola ${name}, un placer conocerte. Veamos a que casa 
    puedo asignarte... Responde con sinceridad.</p>`;

//preguntas para asignar casa
const questions = [
    "1. ¿Qué color te gusta más? \na) Rojo \nb) Verde \nc) Azul \nd) Amarillo",
    "2. ¿Que animal te gusta más?: \na) León \nb) Serpiente \nc) Cuervo \nd) Tejón",
    "3. ¿Qué estación te gusta más? \na) Verano \nb) Invierno \nc) Otoño \nd) Primavera",
    //añadir 7 preguntas más
];

//Iterador para sacar todas las preguntas por pantalla
function startQuestions(){
    for (let i = 0; i <= questions.length; i++){
        let selectHouse = prompt(questions[i]);

        switch (selectHouse.toLowerCase()) {
            case "a":
            griffindor += 20;
            break;
        
            case "b":
            slyhering += 20;
            break;
        
            case "c":
            ravenclaw += 20;
            break;
        
            case "d":
            hufflepuff += 20;
            break;
        
            default:
            alert("Por favor, selecciona una opción válida.");
        
            i--;
            break;
        }
    }
};


btn.addEventListener("click", startQuestions);





/*function pregunta(){
    let respuesta = prompt("Cuál es tu mago favorito?" 
        + "Harry = 0, Draco = 1, Cedric = 2, Cho-Chan = 3");
        switch (respuesta){
            case "0": griffindor++;
            break;
            case "1": slyhering++;
            break;
            case "2": hufflepuff++;
            break;
            case "3": ravenclaw++;
            break;
        }
        
    pregunta2();
}

function pregunta2(){
    let respuesta = prompt("Cuál es tu color favorito?" 
        + "Rojo = 0, Verde = 1, Amarillo = 2, Azul = 3");
        switch (respuesta){
            case "0": griffindor++;
            break;
            case "1": slyhering++;
            break;
            case "2": hufflepuff++;
            break;
            case "3": ravenclaw++;
            break;
        }
        console.log("Griffindor = "+ griffindor);
}
*/
