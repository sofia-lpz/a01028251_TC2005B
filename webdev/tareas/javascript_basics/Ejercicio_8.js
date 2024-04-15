/*
Escribe una función que quite los elementos duplicados
de un arreglo y regrese una lista con los elementos que quedan.
Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]
*/

function quitaDuplicados (arr) {
    let dict = {};
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        if (dict[arr[i]] == undefined) {
            dict[arr[i]] = true;
            list.push(arr[i]);
        }
    }
    return list;
}

console.log(quitaDuplicados([1, 0, 1, 1, 0, 0]));
console.log(quitaDuplicados([1, 2, 3, 1, 2, 3]));
console.log(quitaDuplicados([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));