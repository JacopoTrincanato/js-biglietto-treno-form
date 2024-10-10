//MILESTONE 1

//dichiaro le variabili button, kilometres e age e assegno loro un valore
const button = document.getElementById('button');
let kilometres = document.getElementById('kilometres');

let age = document.getElementById('age');

//creo una funzione che permetta di calcolare il costo del biglietto del treno
button.addEventListener('click', ()=>{
    let kilometresEl = kilometres.value;

    let ageEl = age.value;

    let ticket_price;

    let price = 0.21;

    let young_discount = (price * kilometresEl *20) / 100;

    let senior_discount = (price * kilometresEl *40) / 100;
    
    if (ageEl < 18) {
    ticket_price = kilometresEl * price - young_discount;

    }else if (ageEl > 65) {
    ticket_price = kilometresEl * price - senior_discount;

    }else {
    ticket_price = kilometresEl * price;
    }

    console.log(ticket_price.toFixed(2));

    return ticket_price;
    

})

//MILESTONE 2

const finalButton = document.getElementById('btn');
let kilometresTot = document.getElementById('km');

let ageYears = document.getElementById('eta');

//ripropongo la funzione che permetta di calcolare il costo del biglietto del treno nel form
finalButton.addEventListener('click', function(e){
    e.preventDefault()
    
    let kilometresElem = kilometresTot.value;

    let ageEl = ageYears.value;

    let ticketPrice;

    let priceKm = 0.21;

    let youngDiscount = (priceKm * kilometresElem *20) / 100;

    let seniorDiscount = (priceKm * kilometresElem *40) / 100;
    
    if (ageEl === 'Minorenne') {
    ticketPrice = kilometresElem * priceKm - youngDiscount;

    }else if (ageEl === 'Over65') {
    ticketPrice = kilometresElem * priceKm - seniorDiscount;

    }else {
    ticketPrice = kilometresElem * priceKm;
    }

    console.log(ticketPrice.toFixed(2));

    let name = document.getElementById('datas');

    let ticket = `
        <h2>Nome: ${name.value}</h2>
        <h2>Prezzo finale: €${ticketPrice.toFixed(2)}</h2>
    `

    document.getElementById('result').innerHTML = ticket;
    
})
