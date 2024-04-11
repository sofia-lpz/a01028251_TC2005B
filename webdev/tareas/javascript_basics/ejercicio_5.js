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
