/*
Escribe una función que implemente el algoritmo 'bubble-sort' 
para ordenar una lista de números.

Sofia Moreno Lopez
A01028251
*/

function bubblesort (list) {
    let swap;
    do {
        swap = false;
        for (let i = 0; i < list.length - 1; i++) {
            if (list[i] > list[i+1]) {
                let aux = list[i];
                list[i] = list[i+1];
                list[i+1] = aux;
                swap = true;
            }
        }
    } while (swap);
    return list;
}

console.log("Ejercicio 2");
console.log("test 1: ", [5, 3, 8, 1, 2, 7, 4, 6]);
console.log(bubblesort([5, 3, 8, 1, 2, 7, 4, 6]));

console.log("test 2: ", [7,4,56,7,8,2,4,57,6]);
console.log(bubblesort([7,4,56,7,8,2,4,57,6]));

console.log("test 3: ", [9,2,4,6,2,0]);
console.log(bubblesort([9,2,4,6,2,0]));

