var stack = [];

if (!document.querySelectorAll) {
  stack.push('no-querySelectorAll');
  document.querySelectorAll = function (selectors) {
    var style = document.createElement('style'), elements = [], element;
    document.documentElement.firstChild.appendChild(style);
    document._qsa = [];

    style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
    window.scrollBy(0, 0);
    style.parentNode.removeChild(style);

    while (document._qsa.length) {
      element = document._qsa.shift();
      element.style.removeAttribute('x-qsa');
      elements.push(element);
    }
    document._qsa = null;
    return elements;
  };
}

if (!document.querySelector) {
  stack.push('no-querySelector');
  document.querySelector = function (selectors) {
    var elements = document.querySelectorAll(selectors);
    return (elements.length) ? elements[0] : null;
  };
}

// Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if(!("lastElementChild" in document.documentElement)){
  stack.push('no-lastElementChild');
  Object.defineProperty(Element.prototype, "lastElementChild", {
    get: function(){
      for(var nodes = this.children, n, i = nodes.length - 1; i >= 0; --i)
        if(n = nodes[i], 1 === n.nodeType) return n;
      return null;
    }
  });
}
