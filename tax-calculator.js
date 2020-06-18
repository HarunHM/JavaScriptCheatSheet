var TAX_RATE = 0.08; 
var amount = 99.99;
amount = amount * 2;
amount = amount + (amount * TAX_RATE);
console.log( amount ); 
console.log( amount.toFixed( 2 ) ); 