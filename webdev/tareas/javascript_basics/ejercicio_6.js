/*
Crea una función que cambie una cadena de texto a 'Hacker Speak'
Por ejemplo, para la cadena 'Javascript es divertido', 
su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.
*/

function hackerSpeak (str) {
    let dict = {
        a: 4,
        e: 3,
        i: 1,
        o: 0,
        s: 5,
        t: 7,
        g: 6,
        l: 1,
        z: 2
    }
    let hackerStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        hackerStr += dict[char] || str[i];
    }
    return hackerStr;
}

console.log(hackerSpeak('Javascript es divertido'));
console.log(hackerSpeak('Hola, soy sofia hacker etc etc'));
console.log(hackerSpeak('Javascript es Aburrido'));