(function(el, body) {
  body = el.getElementsByTagName("head")[0];
  const css = "* {font-family: 'Hiragino Mincho ProN', serif !important;} * :not(a) {color: #000 !important;}";
  if(el.getElementById("forceHiragino")) {
    body.removeChild(el.getElementById("forceHiragino"));
  } else {
    const styleEl = el.createElement("style");
    styleEl.id = "forceHiragino", styleEl.appendChild(el.createTextNode(css)), body.appendChild(styleEl);
  }
})(document);