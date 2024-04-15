/*
Escribe una función que tome una lista de números 
y devuelva una nueva lista con 
todos los números en orden descendente.

Sofia Moreno Lopez
A01028251
*/

function bubblesortDec (list) {
    let swap;
    do {
        swap = false;
        for (let i = 0; i < list.length - 1; i++) {
            if (list[i] < list[i+1]) {
                let aux = list[i];
                list[i] = list[i+1];
                list[i+1] = aux;
                swap = true;
            }
        }
    } while (swap);
    return list;
}

let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let test2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let test3 = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

console.log("Ejercicio 15");
console.log("test 1: ", test);
console.log(bubblesortDec(test));

console.log("test 2: ", test2);
console.log(bubblesortDec(test2));

console.log("test 3: ", test3);
console.log(bubblesortDec(test3));
