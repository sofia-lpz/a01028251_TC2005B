/*
Escribe una función que tome una lista de cadenas de texto 
y devuelva la cadena más frecuente.
*/

function mostFrequentString(strList) {
    let dict = {};
    let maxCount = 0;
    let result = '';

    for (i = 0; i < strList.length; i++) {
        if (dict[strList[i]]) {
            dict[strList[i]]++;
        } else {
            dict[strList[i]] = 1;
        }

        if (dict[strList[i]] > maxCount) {
            maxCount = dict[strList[i]];
            result = strList[i];
        }
    }

    return result;
}

console.log(mostFrequentString(["a", "a", "a", "b", "b", "c"]));