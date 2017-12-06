((el, body) => {
  body = el.getElementsByTagName('head')[0];
  const css = '.skyticket-cake-sql-log {\n' +
              '  width: 85%;\n' +
              '  margin: 40px auto;\n' +
              '  border-collapse: collapse;\n' +
              '  font-size: inherit;\n' +
              '}\n' +
              '.skyticket-cake-sql-log th,\n' +
              '.skyticket-cake-sql-log td {\n' +
              '  border: 1px solid #979797;\n' +
              '  padding: 5px;\n' +
              '}\n' +
              '.skyticket-cake-sql-log th {\n' +
              '  background-color: #f7f7f7;\n' +
              '  font-weight: bold;\n' +
              '  text-align: center;\n' +
              '}\n' +
              '.skyticket-cake-sql-log td:first-of-type {\n' +
              '  text-align: center;\n' +
              '}';
  const cakeSqlLogElements = document.getElementsByClassName('cake-sql-log');
  if(el.getElementById('forSkyticketsCakeSqlLog')) {
    body.removeChild(el.getElementById('forSkyticketsCakeSqlLog'));
    Array.prototype.forEach.call(cakeSqlLogElements, node => {
      node.classList.remove('skyticket-cake-sql-log');
    });
  } else {
    Array.prototype.forEach.call(cakeSqlLogElements, node => {
      node.classList.add('skyticket-cake-sql-log');
    });
    const styleEl = el.createElement('style');
    styleEl.id = 'forSkyticketsCakeSqlLog', styleEl.appendChild(el.createTextNode(css)), body.appendChild(styleEl);
  }
})(document);