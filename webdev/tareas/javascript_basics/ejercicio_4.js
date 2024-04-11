/*
Escribe una función que reciba una cadena de texto
 y regrese una nueva con la primer letra de cada 
 palabra en mayúscula.
*/

function firstLetterUpperCase(string){
    let newString = string.split(" ");
    for (i = 0; i < newString.length; i++){
        newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
    }
    return newString.join(" ");
}

let test = "hola mundo";
let test2 = "hello world";
let test3 = "clase de videojuegos";

console.log("Ejercicio 4");

console.log("test 1: ", test);
console.log(firstLetterUpperCase(test)); // Hola Mundo

console.log("test 2: ", test2);
console.log(firstLetterUpperCase(test2)); // Hola Mundo

console.log("test 3: ", test3);
console.log(firstLetterUpperCase(test3)); // Hola Mundo