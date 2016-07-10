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

Element.prototype.dt = function (input) {
	// stack.push('constructor: ' + input.constructor.toString());
	var parent = this;
  if (input.constructor === Array) {
    for (var i = 0; i < input.length; i++) {
			if (input[i].constructor === Array) this.lastElementChild.dt(input[i]);
			else if (input[i].constructor === String) this.appendChild(document.createElement(input[i]));
			else if (input[i].constructor === HTMLElement) this.appendChild(input[i]);
    }
  } else if (input.constructor === String) this.appendChild(document.createElement(input));
	else if (input.constructor === HTMLElement) this.appendChild(input);
	else if (input.constructor === Object) {
		for (var key in input) {
		  if (input.hasOwnProperty(key)) {
				this.querySelector(key).innerHTML += input[key];
		  }
		}
	}
  return this;
};
