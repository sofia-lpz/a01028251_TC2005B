/*
Escribe una función que revise si una cadena de texto 
es un palíndromo o no.

Sofia Moreno Lopez
A01028251
*/

function isPalindrome(str) {
    let arr = str.split('');
    let reversedArr = arr.reverse();
    let reversedStr = reversedArr.join('');
    return str === reversedStr;
}

console.log("Ejercicio 10");

str1 = "anita lava la tina";
str2 = "hola mundo";
str3 = "axa";

console.log("test 1: ", str1);
console.log(isPalindrome(str1));

console.log("test 2: ", str2);
console.log(isPalindrome(str2));

console.log("test 3: ", str3);
console.log(isPalindrome(str3));
