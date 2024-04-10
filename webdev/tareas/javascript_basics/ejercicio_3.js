/*Escribe dos funciones: la primera que invierta un arreglo de números 
y regrese un nuevo arreglo con el resultado; 
la segunda que modifique el mismo arreglo que se pasa como argumento. 
No se permite usar la función integrada 'reverse'.

Sofia Moreno Lopez
*/

function reverseNew(array) {
    let reverseArr = [];
    for (i = 0; i < array.length; i++){
        reverseArr.unshift(array[i]);
    }
    return reverseArr;
}

function reverseInPlace(array) {
    for (i = 0; i < array.length / 2; i++){
        let aux = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = aux;
    }
    return array;
}

let test = [1, 2, 3, 4, 5];
console.log("reverseNew: ", reverseNew(test)); 
console.log("test array after reverseNew: ", test);

console.log("reverseInPlace: ", reverseInPlace(test));
console.log("test array after reverseInPlace: ", test);