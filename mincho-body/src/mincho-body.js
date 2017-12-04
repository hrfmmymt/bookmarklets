(function(el, body) {
  body = el.getElementsByTagName("body");
  const css = "font-family: 'Hiragino Mincho ProN', serif !important; color: #000 !important;" + body[0].getAttribute("style");
  body[0].getAttribute("style", css) ? body[0].removeAttribute("style", css) : body[0].setAttribute("style", css);
})(document);