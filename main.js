const button = document.getElementById('button');
let kilometres = document.getElementById('kilometres');

let age = document.getElementById('age');


button.addEventListener('click', ()=>{
    let kilometresEl = kilometres.value;

    let ageEl = age.value;

    let ticket_price;

    let price = 0.21;

    let young_discount = (price * kilometresEl *20) / 100;

    let senior_discount = (price * kilometresEl *40) / 100;
    
    if (ageEl < 18) {
    ticket_price = kilometres * price - young_discount;

    }else if (ageEl > 65) {
    ticket_price = kilometres * price - senior_discount;

    }else {
    ticket_price = kilometres * price;
    }

    console.log(ticket_price.toFixed(2));

    return ticket_price;
    

})

