import popup from './popup.js';
console.log(popup)

changeColor.onclick = element => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    chrome.tabs.executeScript(
      tabs[0].id, {
        file: 'popup.js'
      });
  });
};