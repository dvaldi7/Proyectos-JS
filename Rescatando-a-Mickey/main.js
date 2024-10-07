/*
 * EJERCICIO:
 * ¡Disney ha presentado un montón de novedades en su D23!
 * Pero... ¿Dónde está Mickey?
 * Mickey Mouse ha quedado atrapado en un laberinto mágico
 * creado por Maléfica.
 * Desarrolla un programa para ayudarlo a escapar.
 * Requisitos:
 * 1. El laberinto está formado por un cuadrado de 6x6 celdas.
 * 2. Los valores de las celdas serán:
 *    - ⬜️ Vacío
 *    - ⬛️ Obstáculo
 *    - 🐭 Mickey
 *    - 🚪 Salida
 * Acciones:
 * 1. Crea una matriz que represente el laberinto (no hace falta
 * que se genere de manera automática).
 * 2. Interactúa con el usuario por consola para preguntarle hacia
 * donde se tiene que desplazar (arriba, abajo, izquierda o derecha).
 * 3. Muestra la actualización del laberinto tras cada desplazamiento.
 * 4. Valida todos los movimientos, teniendo en cuenta los límites
 * del laberinto y los obtáculos. Notifica al usuario.
 * 5. Finaliza el programa cuando Mickey llegue a la salida.
 */

//Representación del laberinto

let maze = [
    ["🐭", "⬜️", "⬜️", "⬛️", "⬛️", "⬛️"],
    ["⬛️", "⬛️", "⬜️", "⬛️", "⬛️", "⬛️"],
    ["⬛️", "⬜️", "⬜️", "⬜️", "⬛️", "🚪"],
    ["⬛️", "⬜️", "⬛️", "⬜️", "⬛️", "⬜️"],
    ["⬜️", "⬜️", "⬛️", "⬜️", "⬜️", "⬜️"],
    ["⬛️", "⬛️", "⬛️", "⬜️", "⬛️", "⬛️"]
];

// Posición inicial de Mickey
let mickey = {x: 0, y: 0};

//Mostramos por pantalla el laberinto
function showLaberynth(){
    maze.forEach((path) => console.log(path.join(" ")));
    console.log(" ");
};

//Movimiento de Mickey
function mickeyMove(move){
    let {x, y} = mickey;
    let newMickeyPosition;

    switch(move){
        case "w":
        case "arriba": 
            newMickeyPosition = {x: x-1, y: y};
        break;

        case "s":
        case "abajo": 
            newMickeyPosition = {x: x+1, y: y};
        break;

        case "a":
        case "izquierda":
            newMickeyPosition = {x: x, y: y-1};
        break;

        case "d":
        case "derecha":
            newMickeyPosition = {x: x, y: y+1};
        break;

        default: console.log("Dirección no válida." + 
            prompt("Dónde quieres mover a Mickey? ( arriba (W), abajo (S), izquierda (A) o derecha (D) )").toLowerCase());
            return false;
        break; 
    }

    let { x: newx, y: newy} = newMickeyPosition;

    //movimiento de Mickey en el laberinto

    if(newx >= 6 || newx < 0 || newy < 0 || newy >= 6){
        console.log("caminante, aquí no hay camino.");
        return false;
    }
    else if(maze[newx][newy] === "⬛️"){
        console.log("Este camino está bloqueado");
        return false;
    }
    else if(maze[newx][newy] === "🚪"){
        console.log("Felicidades! Has ayudado a Mickey a escapar.");
        return true;
    } 
    else if (maze[newx][newy] === "⬜️"){
        maze[x][y] = "⬜️";
        maze[newx][newy] = "🐭";
        mickey = {x: newx, y: newy};
        return false; 
    }

}  

//empezar el juego
function play(){
    while(true){
        showLaberynth();
        //Preguntamos al usuario dónde quiere mover
        let move = prompt("Dónde quieres mover a Mickey? ( arriba (W), abajo (S), izquierda (A) o derecha (D) )").toLowerCase();
        if (mickeyMove(move)){
            break;
        }
    }
}

//iniciar el juego
play();