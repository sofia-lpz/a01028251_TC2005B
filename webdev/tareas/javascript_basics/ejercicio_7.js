/*Escribe una función que reciba un número, 
y regrese una lista con todos sus factores. 
Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].

Sofia Moreno Lopez
A01028251
*/

function factoriza(num){
    let factors = [];
    for (let i = 1; i <= num; i++){
        if (num % i == 0){
            factors.push(i);
        }
    }
    return factors;
}

console.log("Ejercicio 7")

console.log("factores de 12: ", factoriza(12));
console.log("factores de 15: ", factoriza(15));
console.log("factores de 7: ", factoriza(7));

