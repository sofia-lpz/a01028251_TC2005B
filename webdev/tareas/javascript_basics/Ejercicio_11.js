/*
Escribe una función que tome una lista de cadena de textos 
y devuelva una nueva lista con todas las cadenas 
en orden alfabético.

Sofia Moreno Lopez
A01028251
*/

function sortStrings(arr) {
    return arr.sort();
}
//no dice que no usemos sort 

let arr = ['hola', 'adios', 'perro', 'gato'];
let arr2 = ['bebe', 'camino', 'arbol', 'zorro'];
let arr3 = ['a', 'b', 'c', 'd', 'e'];

console.log("Ejercicio 11");
console.log("test 1: ", arr);
console.log(sortStrings(arr));

console.log("test 2: ", arr2);
console.log(sortStrings(arr2));

console.log("test 3: ", arr3);
console.log(sortStrings(arr3));

