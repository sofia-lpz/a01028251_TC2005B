/*
Escribe una función que reciba como parámetro una lista de cadenas
de texto, y regrese la longitud de la cadena más corta.
*/

function shortestStringLength(arr){
    let shortest = arr[0].length;
    for (let i = 1; i < arr.length; i++){
        if (arr[i].length < shortest){
            shortest = arr[i].length;
        }
    }
    return shortest;
}

let arr = ["a", "aa", "aaa", "dgjak sdkj", "djklañ"];
let arr2 = ["", "aa", "aaa", "dgjak sdkj", "djklañ"];
let arr3 = ["hola", "radiohead", "javascript", "tarea", "ah"];

console.log("Ejercicio 9");
console.log("test 1: ", arr);
console.log(shortestStringLength(arr)); 

console.log("test 2: ", arr2);
console.log(shortestStringLength(arr2));

console.log("test 3: ", arr3);
console.log(shortestStringLength(arr3));