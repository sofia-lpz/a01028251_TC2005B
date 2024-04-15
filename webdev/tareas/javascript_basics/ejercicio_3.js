/*Escribe dos funciones: la primera que invierta un arreglo de números 
y regrese un nuevo arreglo con el resultado; 
la segunda que modifique el mismo arreglo que se pasa como argumento. 
No se permite usar la función integrada 'reverse'.

Sofia Moreno Lopez
A01028251
*/

function reverseNew(array) {
    let reverseArr = [];
    for (let i = 0; i < array.length; i++){
        reverseArr.unshift(array[i]);
    }
    return reverseArr;
}

function reverseInPlace(array) {
    for (let i = 0; i < array.length / 2; i++){
        let aux = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = aux;
    }
    return array;
}

console.log("Ejercicio 3");

let test = [1, 2, 3, 4, 5];
console.log("reverseNew: ", reverseNew(test)); 
console.log("test array after reverseNew: ", test);

console.log("reverseInPlace: ", reverseInPlace(test));
console.log("test array after reverseInPlace: ", test);

let test2 = [1, 2, 3, 4, 5, 6];
console.log("reverseNew: ", reverseNew(test2));
console.log("test2 array after reverseNew: ", test2);

console.log("reverseInPlace: ", reverseInPlace(test2));
console.log("test2 array after reverseInPlace: ", test2);

let test3 = [1, 2];
console.log("reverseNew: ", reverseNew(test3));
console.log("test3 array after reverseNew: ", test3);

console.log("reverseInPlace: ", reverseInPlace(test3));
console.log("test3 array after reverseInPlace: ", test3);