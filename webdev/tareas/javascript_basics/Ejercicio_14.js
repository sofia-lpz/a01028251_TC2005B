/*
Escribe una función que tome un número
 y devuelva verdadero si es una potencia de dos, 
 falso de lo contrario.
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