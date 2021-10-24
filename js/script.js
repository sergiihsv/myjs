"use strict";

/* function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
let totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits ) {
    message = "Insufficient funds!";
  } else
  {
    message = `You ordered ${orderedQuantity} droids, you have ${(customerCredits - totalPrice)} credits left`;
  }
  // Change code above this line
  return message;
}

console.log(makeTransaction(1000, 3, 15000));
 */


/* function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD ) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

console.log(checkPassword("mangohackzor"));
console.log(checkPassword(null))
console.log(checkPassword("polyhax"))
console.log(checkPassword("jqueryismyjam")) */


// 

/* function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if (totalSpent => 50000) {
  discount = GOLD_DISCOUNT;
} 
  if (20000 <= totalSpent && totalSpent < 50000) {
  discount = SILVER_DISCOUNT;
} 
  if (5000 <= totalSpent && totalSpent < 20000){
  discount = BRONZE_DISCOUNT;
} 
  if (totalSpent < 5000) {
  discount = BASE_DISCOUNT;
}
  
  
  // Change code above this line
  return discount;
}

console.log(getDiscount(10))
console.log(getDiscount(46900))
console.log(getDiscount(8250))
console.log(getDiscount(1300))
console.log(getDiscount(5000))
console.log(getDiscount(20000))
console.log(getDiscount(100000)) */



/* 
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
 if (ordered > available ? ) {
    message = "Not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }
 

  message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  
  // Change code above this line
  return message;
} */




/* function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
message = (password === ADMIN_PASSWORD) ? "Access is allowed" : "Access denied, wrong password!"
  // Change code above this line
  return message;
} */


// -Инструкция switch c блоком default -//
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  if (password === null) {
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }
  


  switch (password) {
    case null:
      message = "Canceled by user!";
      break;
      
    case ADMIN_PASSWORD:
      message ="Welcome!";
       break;
      
      default:
  message = "Access denied, wrong password!";
       
  }

  
  return message;
}
