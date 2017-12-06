(() => {
  const bodyRight = document.getElementById('bodyRight');
  let bodyRightDiv = bodyRight.children;
  bodyRightDiv = [].slice.call(bodyRightDiv);
  bodyRightDiv.forEach(function(a, b) {
      a.className = 'custom-' + b
  });
  bodyRight.insertBefore(document.getElementById('wikipageHeaderListWrapper'), document.querySelector('.custom-1'));
  document.getElementById('wikipageHeaderList').style.position = 'initial'
})();