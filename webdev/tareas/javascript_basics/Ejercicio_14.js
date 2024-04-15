/*
Escribe una función que tome un número
 y devuelva verdadero si es una potencia de dos, 
 falso de lo contrario.

 Sofia Moreno Lopez
A01028251
*/

function isPowerOfTwo(num){
    if (num == 1){
        return true;
    }
    if (num % 2 == 0){
        return isPowerOfTwo(num / 2);
    }
    return false;
}

console.log("Ejercicio 14");
console.log("test 1: ", 1);
console.log(isPowerOfTwo(1));

console.log("test 2: ", 7);
console.log(isPowerOfTwo(7));

console.log("test 3: ", 32);
console.log(isPowerOfTwo(32));