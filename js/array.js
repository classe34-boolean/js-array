// var iscritti = ["Luca", 8, "Gianni", "Maria"];
// console.log(iscritti);
// console.log(iscritti[0]);
// console.log(iscritti[2]);
// console.log(iscritti.length);

// // iscritti.push(12);
// // console.log(iscritti);

// // iscritti.push("Gianluca");
// // console.log(iscritti.length);
// // console.log(iscritti);

// var nome = prompt("Scrivi qui il tuo nome per iscriverti al corso");
// iscritti.push(nome);

// console.log(iscritti);

// 1 - Chiedi un numero all'utente e stampa in console il numero successivo
var numero = parseInt(prompt("Inserisci un numero"));
console.log("Numero", numero);

var numeroSuccessivo = ++numero;
console.log("Numero", numero);
console.log("Numero successivo", numeroSuccessivo);

// 2 - Crea un array contenente 3 nomi.
// Chiedi all'utente un numero compreso tra 0 e 2 e stampa l'elemento dell'array corrispondente.

var nomi = ["Beatrice", "Marco", "Diego", "Giovanni", "Giada"];

var messaggio = "Inserisci un numero compreso tra 0 e " + (nomi.length - 1);
var posizione = parseInt(prompt(messaggio));

// console.log(nomi);
// console.log(posizione);

console.log(nomi[posizione]);

// var x = 6;
// console.log(x);

// ++x;
// // x = x + 1;
// // x += 1;
// console.log(x);

// --x;
// // x = x - 1;
// // x -= 1;
// console.log(x);

// var x = 3;
// var y = ++x; // var y = x = x + 1;

// console.log("X = ", x);
// console.log("Y = ", y);