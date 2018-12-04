import 'babel-polyfill';

const getTarget = (name, color) => {
  const as = document.querySelectorAll('.inner-article');
  for (var i of as) {
    const cond =
      i.querySelector('h1').innerText.trim() === name &&
      i.querySelector('p').innerText.trim() === color;
    if (cond)
      return i.querySelector('a');
  }
  return false;
};

const rendered = query => {
  return new Promise((resolve, reject) => {
    let loops = 0;
    let elem = document.querySelector(query);
    if (elem) {
      resolve(elem);
      return elem;
    }
    const interval = setInterval(() => {
      elem = document.querySelector(query);
      if (elem) {
        clearInterval(interval);
        resolve(elem);
        return elem;
      }
      ++loops;
      if (loops > 200)
        reject('Too long');
    }, 50)
  })
}

const checkout = async () => {
  const size = await rendered('#size');
  const options = size.querySelectorAll('option');
  for (var i of options) {
    if (i.innerText === 'Large') {
      size.value = i.value;
      size.dispatchEvent(new Event('change'));
    }
  }
  const container = await rendered('#add-remove-buttons');
  container.firstChild.click();
  const checkout = await rendered('a.button.checkout');
  setTimeout(() => {
    checkout.click();
  }, 100)
}

const main = (name, color) => {
  const target = getTarget(name, color);
  if (target) {
    target.click();
    checkout();
    return true;
  } else
    return false;
}

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    const r = main(request.item, request.color);
    if (!r) {
      sendResponse({
        found: false
      });
      document.querySelector('.current').click();
    }
  });
//export default main;

//Quilted Studded Leather Jacket
//Black