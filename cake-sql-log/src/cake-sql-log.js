((el, body) => {
  body = el.getElementsByTagName('head')[0];
  const CONST_VALUE = 'my-cake-sql-log';
  const css = '.' + CONST_VALUE + '{\n' +
              '  width: 85%;\n' +
              '  margin: 40px auto;\n' +
              '  border-collapse: collapse;\n' +
              '  font-size: inherit;\n' +
              '}\n' +
              '.' + CONST_VALUE + ' th,\n' +
              '.' + CONST_VALUE + ' td {\n' +
              '  border: 1px solid #979797;\n' +
              '  padding: 5px;\n' +
              '}\n' +
              '.' + CONST_VALUE + ' th {\n' +
              '  background-color: #f7f7f7;\n' +
              '  font-weight: bold;\n' +
              '  text-align: center;\n' +
              '}\n' +
              '.' + CONST_VALUE + ' td:first-of-type {\n' +
              '  text-align: center;\n' +
              '}';
  const cakeSqlLogElements = document.getElementsByClassName('cake-sql-log');
  if(el.getElementById(CONST_VALUE)) {
    body.removeChild(el.getElementById(CONST_VALUE));
    Array.prototype.forEach.call(cakeSqlLogElements, node => {
      node.classList.remove(CONST_VALUE);
    });
  } else {
    Array.prototype.forEach.call(cakeSqlLogElements, node => {
      node.classList.add(CONST_VALUE);
    });
    const styleEl = el.createElement('style');
    styleEl.id = CONST_VALUE, styleEl.appendChild(el.createTextNode(css)), body.appendChild(styleEl);
  }
})(document);