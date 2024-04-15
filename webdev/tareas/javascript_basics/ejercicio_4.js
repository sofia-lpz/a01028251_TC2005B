/*
Escribe una función que reciba una cadena de texto
 y regrese una nueva con la primer letra de cada 
 palabra en mayúscula.
*/

function firstLetterUpperCase(string){
    let arr = string.split(" ");

    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].split("");
        arr[i][0] = arr[i][0].toUpperCase();
        arr[i] = arr[i].join("");
    }
    return arr.join(" ");
}


let test = "hola mundo";
let test2 = "hello world";
let test3 = "clase de videojuegos";

console.log("Ejercicio 4");

console.log("test 1: ", test);
console.log(firstLetterUpperCase(test)); 

console.log("test 2: ", test2);
console.log(firstLetterUpperCase(test2)); 

console.log("test 3: ", test3);
console.log(firstLetterUpperCase(test3));
