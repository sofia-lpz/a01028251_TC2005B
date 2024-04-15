/*
Escribe una función que tome una lista de cadenas de texto 
y devuelva la cadena más frecuente.

Sofia Moreno Lopez
A01028251
*/

function mostFrequentString(strList) {
    let dict = {};
    let maxCount = 1;
    let result = null;

    for (let i = 0; i < strList.length; i++) {
        if (dict[strList[i]]) {
            dict[strList[i]]++;
        } else {
            dict[strList[i]] = 1;
        }

        if (dict[strList[i]] > maxCount) {
            maxCount = dict[strList[i]];
            result = strList[i];
        }
    }

    return result;
}

let arr = ["a", "a", "a", "b", "b", "c"];
let arr2 = ["hola", "hola", "adios"];
let arr3 = ["hola", "adios"];

console.log("Ejercicio 13");
console.log("test 1: ", arr);
console.log(mostFrequentString(arr));

console.log("test 2: ", arr2);
console.log(mostFrequentString(arr2));

console.log("test 3: ", arr3);
console.log(mostFrequentString(arr3));