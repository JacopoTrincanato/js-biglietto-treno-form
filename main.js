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
let value1 = document.getElementById('Maggiorenne');
let value2 = document.getElementById('Minorenne');
let value3 = document.getElementById('Over65');

//ripropongo la funzione che permetta di calcolare il costo del biglietto del treno nel form
finalButton.addEventListener('submit', function(e){
    
    let kilometresElem = kilometresTot.value;

    let ageEl = ageYears.value;

    let ticketPrice;

    let priceKm = 0.21;

    let valueDue = value2.value;

    let valueTre = value3.value;

    let youngDiscount = (priceKm * kilometresElem *20) / 100;

    let seniorDiscount = (priceKm * kilometresElem *40) / 100;
    
    if (ageEl === valueDue) {
    ticketPrice = kilometresElem * priceKm - youngDiscount;

    }else if (ageEl === valueTre) {
    ticketPrice = kilometresElem * priceKm - seniorDiscount;

    }else {
    ticketPrice = kilometresElem * priceKm;
    }

    console.log(ticketPrice.toFixed(2));

    e.preventDefault()

    let surname = e.target.datas.value;

    let name = e.target.name.value;

    let cost = e.target.cost.value;
    
    console.log(surname, name, cost);

    let ticket = `
    <h2>${surname}</h2>
    <h2>${name}</h2>
    <h2>${cost}</h2>
    `
    
})


/*let ticketDatas = document.getElementById('ticketDatas');

ticketDatas.addEventListener('submit', function(e){
    let surname = e.target.datas.value;

    let name = e.target.name.value;

    let cost = e.target.cost.value;
    
    console.log(surname, name, cost);

    let ticket = `
    <h2>${surname}</h2>
    <h2>${name}</h2>
    <h2>${cost}</h2>
    `
})*/
