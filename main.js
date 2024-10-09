//MILESTONE 1

/*const button = document.getElementById('button');
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
    ticket_price = kilometresEl * price - young_discount;

    }else if (ageEl > 65) {
    ticket_price = kilometresEl * price - senior_discount;

    }else {
    ticket_price = kilometresEl * price;
    }

    console.log(ticket_price.toFixed(2));

    return ticket_price;
    

})*/

//MILESTONE 2

const finalButton = document.getElementById('btn');
let kilometres = document.getElementById('km');

let age = document.getElementById('datas');


btn.addEventListener('click', ()=>{
    let kilometresEl = kilometres.value;

    let ageEl = age.value;

    let ticket_price;

    let price = 0.21;

    let young_discount = (price * kilometresEl *20) / 100;

    let senior_discount = (price * kilometresEl *40) / 100;
    
    if (ageEl === 'Minorenne') {
    ticket_price = kilometresEl * price - young_discount;

    }else if (ageEl === 'Over-65') {
    ticket_price = kilometresEl * price - senior_discount;

    }else {
    ticket_price = kilometresEl * price;
    }

    console.log(ticket_price.toFixed(2));

    return ticket_price;
    

})

btn.addEventListener('submit', function(e){
    e.preventDefault()
    
    let datas = e.target.datas.value;

    let km = e.target.km.value;

    let eta = e.target.eta.value;
    

})

console.log(datas, km, eta);
