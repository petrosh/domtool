function appendScript(t) {
	var script = document.createElement("script");
	script.src = (typeof t === 'string') ? t : 'loader.js';
	document.head.appendChild(script);
}

Element.prototype.acc = function (ele, inner, attributes) {
	var out = false;
	if (ele.constructor === String) {
		var element = document.createElement(ele);
		if (inner !== '') {
			element.innerHTML = inner;
		}
		if (attributes.constructor === Object) {
			for (var key in attributes) {
				if (attributes.hasOwnProperty(key)) {
					element.setAttribute(key, attributes.key);
				}
			}
		}
		out = this.appendChild(element);
	};
	return out;
};
