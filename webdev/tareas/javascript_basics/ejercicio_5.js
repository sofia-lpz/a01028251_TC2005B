/*
Escribe una función que calcule el máximo común divisor de dos números.
*/

function mcd(a, b){
    let mcd = 0;
    let min = Math.min(a, b);
    for (i = 1; i <= min; i++){
        if (a % i == 0 && b % i == 0){
            mcd = i;
        }
    }
    return mcd;
}

console.log("Ejercicio 5");
console.log("test 1: ", 12, 18);
console.log(mcd(12, 18));

console.log("test 2: ", 15, 20);
console.log(mcd(15, 20));

console.log("test 3: ", 10, 5);
console.log(mcd(10, 5));
