const pay = () => {
  const elem = document.querySelector('#credit_card_type');
  elem.value = 'paypal';
  elem.dispatchEvent(new Event('change'));
  const terms = document.querySelector('.terms');
  terms.click();
  const pay_button = document.querySelector('.checkout');
  pay_button.click();
}

pay();

//Corduroy Detailed Zip Sweater