/*
Escribe una función que reciba como parámetro una lista de cadenas
de texto, y regrese la longitud de la cadena más corta.
*/

function shortestStringLength(arr){
    let shortest = arr[0].length;
    for (i = 1; i < arr.length; i++){
        if (arr[i].length < shortest){
            shortest = arr[i].length;
        }
    }
    return shortest;
}

let arr = ["a", "aa", "aaa", "dgjak sdkj", "djklañ"];
console.log(shortestStringLength(arr)); 