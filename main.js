//FASE 1: preparazione
document.getElementById('kilometres');
document.getElementById('age');
document.getElementById('button');
//creo variabile dove salvare il prezzo del ticket
let ticket_price;

//FASE 2: raccolta Dati
//assegno un valore a kilometres
let kilometres = Number(prompt("Inserisci il numero di kilometri che percorrerai"));
console.log(kilometres);

//assegno un valore a age
let age = Number(prompt("Inserisci la tua età"));
console.log(age);

//assegno un valore a price
let price = 0.21;
console.log(price);

//assegno un valore a young_discount (sconto del 20%)
let young_discount = (price * kilometres *20) / 100;
console.log(young_discount);

//assegno un valore a senior_discount (sconto del 40%)
let senior_discount = (price * kilometres *40) / 100;
console.log(senior_discount);

//FASE 3: elaborazione dati
//calcolo il prezzo del biglietto per i minorenni
if (age < 18) {
    ticket_price = kilometres * price - young_discount;

//calcolo il prezzo del biglietto per gli over 65
}else if (age > 65) {
    ticket_price = kilometres * price - senior_discount;

//calcolo il prezzo del biglietto a prezzo pieno
}else {
    ticket_price = kilometres * price;
}

//FASE 4: output
//stampo il prezzo del biglietto in console
console.log(ticket_price.toFixed(2));