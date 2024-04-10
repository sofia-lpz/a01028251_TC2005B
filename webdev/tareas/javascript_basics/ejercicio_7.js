/*Escribe una función que reciba un número, 
y regrese una lista con todos sus factores. 
Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].
<<<<<<< HEA

Sofia Moreno Lopez
=======
>>>>>>> 464c18b58f8e2d0b85f072ea7c1f0e53097fe94d
*/

function factoriza(num){
    let factors = [];
    for (i = 1; i <= num; i++){
        if (num % i == 0){
            factors.push(i);
        }
    }
    return factors;
}