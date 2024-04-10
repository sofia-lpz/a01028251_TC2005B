/*
Escribe una función que implemente el algoritmo 'bubble-sort' 
para ordenar una lista de números.

Sofia Moreno Lopez
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

console.log(bubblesort([5, 3, 8, 1, 2, 7, 4, 6]));