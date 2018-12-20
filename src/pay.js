const setMethod = (method, card, CVV, mois, year) => {
  return new Promise(resolve => {
    const elem = document.querySelector('#credit_card_type');
    elem.value = method;
    elem.dispatchEvent(new Event('change'));
    if (method = 'paypal')
      resolve();
    setTimeout(() => {
      const cardElem = document.querySelector('#cnb'),
        CVVElem = document.querySelector('#vval'),
        moisElem = document.querySelector('#credit_card_month'),
        yearElem = document.querySelector('#credit_card_year');
      moisElem.value = mois;
      moisElem.dispatchEvent(new Event('change'));
      yearElem.value = year;
      yearElem.dispatchEvent(new Event('change'));
      cardElem.value = card;
      cardElem.dispatchEvent(new Event('change'));
      CVVElem.value = CVV;
      CVVElem.dispatchEvent(new Event('change'));
      resolve();
    }, 100);
  })
}

const pay = (method, card, CVV, mois, year) => {
  setMethod(method, card, CVV, mois, year).then(() => {
    const terms = document.querySelector('.terms');
    terms.click();
    const pay_button = document.querySelector('.checkout');
    pay_button.click();
  });
}

chrome.runtime.sendMessage({
  page: "pay"
}, response => {
  const {
    method,
    card,
    CVV,
    mois,
    year
  } = response;
  pay(method, card, CVV, mois, year);
});


/*

chrome.runtime.sendMessage({
  pay: 'loaded'
}, response => {
  if (response)
    pay(response.method, response.card, response.CVV);
});
*/
//Corduroy Detailed Zip Sweater