/*
Escribe una función que encuentre el primer 
carácter de un string de texto que no se repite. 
Prueba tu función con: 'abacddbec'

Sofia Moreno Lopez
A01028251
*/

function firstNonRepeat (string) {
    let dict = {};
    for (let i = 0; i < string.length; i++) {
        if (dict[string[i]] == 1) {
            delete dict[string[i]];
        }
        else if (dict[string[i]] == undefined) {
            dict[string[i]] = 1;
        }
    }

    for (let i = 0; i < string.length; i++) {
        if (dict[string[i]] == 1) {
            return string[i];
        }
    }
    return null;
}

console.log("Ejercicio 1");
console.log("test 1: ", "abacddbec");
console.log(firstNonRepeat("abacddbec"));

console.log("test 2: ", "aaaaaaaaaaas");
console.log(firstNonRepeat("aaaaaaaaaaas"));

console.log("test 3: ", "aabbcc");
console.log(firstNonRepeat("aabbcc"));


