/*
Escribe una función que tome una lista de números 
y devuelva la mediana y la moda.

Sofia Moreno Lopez
A01028251
*/

function medianMode(arr) {

    let dict = {};

    for (let i = 0; i < arr.length; i++){
        if (dict[arr[i]] == undefined){
            dict[arr[i]] = 1;
        } else {
            dict[arr[i]] += 1;
        }
    }

    let max = 1;
    let mode = null;

    for (let key in dict){
        if (dict[key] > max){
            max = dict[key];
            mode = key;
        }
    }

    let sorted = arr.sort((a, b) => a - b);
    // sort by itself will sort as string, pass function
    let median;

    if (sorted.length % 2 == 0){
        median = (sorted[sorted.length / 2] + sorted[(sorted.length / 2) - 1]) / 2;
    } else {
        median = sorted[Math.floor(sorted.length / 2)];
    }

    return [median, mode];
}

let arr = [10,2,3,6,5,4,1,7,9,8,8];
let arr2 = [3,2,1,1,1,1];
let arr3 = [15,1,8];


console.log("Ejercicio 12");
console.log("test 1: ", arr);
console.log(medianMode(arr));

console.log("test 2: ", arr2);
console.log(medianMode(arr2));

console.log("test 3: ", arr3);
console.log(medianMode(arr3));


