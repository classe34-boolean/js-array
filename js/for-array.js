// 1 - stampare tutti gli elementi di un array
var nomi = ["Beatrice", "Marco", "Diego", "Giovanni", "Giada"];
// console.log(nomi[0]);
// console.log(nomi[1]);
// console.log(nomi[2]);
// console.log(nomi[3]);
// console.log(nomi[4]);

for (var i = 0; i < nomi.length; i++) {
    console.log(nomi[i]);
}

// 2 - dato un array di numeri interi, stampare solo i numeri dispari

var numeri = [ 7, 4, 12, 13, 11, 10, 90, 92, 91 ];

for (var i = 0; i < numeri.length; i++) {

    // blocco di istruzioni da eseguire N volte
    // console.log("Iterazione #", i, numeri[i]);
    if (numeri[i] % 2 == 1) {
        // blocco di istruzioni condizionali
        document.getElementById("numbers").innerHTML += "<li>" + numeri[i] + "</li>";
        console.log(numeri[i]);
    } 
    // else {
    //     console.log(numeri[i] + " è un numero pari.");
    // }

}
console.log("Contatore fuori dal ciclo", i);