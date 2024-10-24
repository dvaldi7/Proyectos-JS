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

let griffindor = 0, slyhering = 0, hufflepuff = 0, ravenclaw = 0;
let nombre = prompt("Hola, Bienvenido a Hogwarts, soy el sombrero seleccionador,"+ 
     "cuál es tu nombre?");
let boton = document.getElementById("btn");

document.write(`<p>Hola ${nombre}, un placer conocerte. Veamos a que casa 
    puedo asignarte... Responde con sinceridad.</p>`);

boton.addEventListener("click", pregunta);

function pregunta(){
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

