/*
Escribe una función que revise si una cadena de texto 
es un palíndromo o no.
*/

function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}