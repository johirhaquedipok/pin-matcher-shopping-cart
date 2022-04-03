'use strict'

function productCart(id, price, isAdded) {
  const productInput = document.getElementById(`${id}-number`); 
  let productNumber = productInput.value;
  if(isAdded)
    productNumber = parseInt(productNumber)+1;
    else if(productNumber > 0) {
      productNumber = parseInt(productNumber)-1;
    }
    productInput.value = productNumber;

    //phone price 
    const prevPhoneTotal = document.getElementById(`${id}-total`);
    prevPhoneTotal.innerText = productNumber * price;
    updateTotal()
}

function updateTotal() {
    const phoneSubTotal = document.getElementById('phone-total')
    const caseSubTotal = document.getElementById('case-total')
    const subTotal = document.getElementById('sub-total');
    const tax = document.getElementById('tax-amount')
    const totalPrice = document.getElementById('total-price')
    const phoneTotal = parseFloat(phoneSubTotal.innerText);
    const caseTotal = parseFloat(caseSubTotal.innerText);
  subTotal.innerText = caseTotal + phoneTotal;
  tax.innerText  = (caseTotal + phoneTotal) /10;
  totalPrice.innerText = caseTotal + phoneTotal  + (caseTotal + phoneTotal) /10;
  console.log(tax.innerText);
}

document.getElementById('phone-plus').addEventListener('click', ()=> {
  productCart('phone', 1219, true);
})


document.getElementById('phone-minus').addEventListener('click', ()=> {
  productCart('phone', 1219, false);
});

document.getElementById('case-plus').addEventListener('click', ()=> {
  productCart('case', 59, true);
})


document.getElementById('case-minus').addEventListener('click', ()=> {
  productCart('case', 59, false);
});
updateTotal()


/* ============================================
Pin Matcher 
=====================================
*/

  // generate pin
  const pinInput = document.getElementById('display-pin');
  function generatePin() {
  const randomNumber = Math.floor(Math.random() * (10000 - 1000) ) +1000;;
  pinInput.value = randomNumber;
  typedNumbers.value = '';
  notifySuccess.style.display = 'none';
  notifyFail.style.display = 'none';
}

const typedNumbers = document.getElementById('typed-numbers');
const btns = document.querySelectorAll('.button');
for (let i = 0; i < btns.length; i++) {
  const element = btns[i];
  element.addEventListener('click', ()=> {
    if(element.innerText == "C") {
      typedNumbers.value = '';
    }else if(element.innerText == "<") {
      typedNumbers.value = typedNumbers.value.slice(0, -1);
    }
    else {
      typedNumbers.value += element.innerText;
    }
  })
}

const notifySuccess = document.getElementById('notify-success');
const actionLeft = document.getElementById('action-left');
const notifyFail = document.getElementById('notify-fail');
function  verifyPin() {
  if(pinInput.value === typedNumbers.value) {
    notifySuccess.style.display = 'block';
  }else {
    notifyFail.style.display = 'block';
  }
}


const incrementButton = document.getElementById("increment-btn1")
    incrementButton.addEventListener("click", function () { 
    incrementButton.innerText = parseInt(incrementButton.innerText)+3; 
    }) 