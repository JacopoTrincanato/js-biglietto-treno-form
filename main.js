//FASE 1: preparazione
let kilometres = document.getElementById('kilometres');

let age = document.getElementById('age');
const button = document.getElementById('button');

button.addEventListener('click', ()=>{
    let kilometresNumber = kilometres.value;

    let ageYears = age.value;

    let ticket_price;

    let price = 0.21;

    let young_discount = (price * kilometresNumber *20) / 100;

    let senior_discount = (price * kilometresNumber *40) / 100;

    if (ageYears < 18) {
    ticket_price = kilometres * price - young_discount;

    }else if (ageYears > 65) {
    ticket_price = kilometres * price - senior_discount;

    }else {
    ticket_price = kilometres * price;
    }

    return(ticket_price.toFixed(2));

})
