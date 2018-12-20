const getTarget = (name, color) => {
  const as = document.querySelectorAll('.inner-article');
  for (var i of as) {
    const cond = i.querySelector('h1').innerText.trim() === name &&
      (color == undefined || color.length == 0 || i.querySelector('p').innerText.trim() === color);
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

const checkout = async size => {
  if (size && size.length > 0) {
    const sizeElem = await rendered('#size');
    const options = sizeElem.querySelectorAll('option');
    for (var i of options) {
      if (i.innerText === size) {
        sizeElem.value = i.value;
        sizeElem.dispatchEvent(new Event('change'));
      }
    }
  }
  const container = await rendered('#add-remove-buttons');
  container.firstChild.click();
  const checkout = await rendered('a.button.checkout');
  setTimeout(() => {
    checkout.click();
  }, 100)
}

const main = (name, color, size) => {
  const target = getTarget(name, color);
  if (target) {
    target.click();
    checkout(size);
    return true;
  } else
    return false;
}

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    const r = main(request.item, request.color, request.size);
    if (!r) {
      sendResponse({
        found: false
      });
      document.querySelector('.current').click();
    } else
      sendResponse({
        found: true
      })
  });
//export default main;

//Quilted Studded Leather Jacket
//Black