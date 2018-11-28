const generateElem = () => {
  const elem = document.createElement('div');
  elem.style.backgroundColor = 'white';
  elem.style.border = '1px solid black';
  elem.style.borderRadius = '10px';
  elem.style.position = 'fixed';
  elem.style.top = 'calc(50% - 100px)';
  elem.style.left = 'calc(50% - 200px)';
  elem.style.width = '400px';
  elem.style.height = '200px';

  const name = document.createElement('input');
  name.id = '__cop_name';

  const color = document.createElement('input');
  name.id = '__cop_color';

  elem.appendChild(name);
  return elem;
}

(() => {
  const elem = generateElem();
  document.body.appendChild(elem);
})();