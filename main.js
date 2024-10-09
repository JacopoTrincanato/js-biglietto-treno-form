const button = document.getElementById('button');


button.addEventListener('click', ()=>{
    let kilometres = document.getElementById('kilometres');

    let age = document.getElementById('age');

    let ticket_price;

    let price = 0.21;

    let young_discount = (price * kilometres *20) / 100;

    let senior_discount = (price * kilometres *40) / 100;
    
    if (age < 18) {
    ticket_price = kilometres * price - young_discount;

    }else if (age > 65) {
    ticket_price = kilometres * price - senior_discount;

    }else {
    ticket_price = kilometres * price;
    }

    return ticket_price;
    

})

console.log(button);

