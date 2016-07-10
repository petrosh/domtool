Element.prototype.acc = function (ele, inner, attributes) {
	var out = false;
	if (ele.constructor === String) {
		var element = document.createElement(ele);
		if (inner !== '') {
			element.innerHTML = inner;
		}
		if (attributes && attributes.constructor === Object) {
			for (var key in attributes) {
				if (attributes.hasOwnProperty(key)) {
					element.setAttribute(key, attributes[key]);
				}
			}
		}
		out = this.appendChild(element);
	};
	return out;
};

function appendScript(t,c) {
	var uniqueName;
	do {
    uniqueName = 'cb' + new Date().getTime();
  } while (window[uniqueName]);

  window[uniqueName] = function () {
		document.querySelector('head').removeChild(document.getElementById(uniqueName));
		delete window[uniqueName];
		if(typeof c == 'function') c.apply(this, arguments);
  };

	var source = (typeof t === 'string') ? t : 'loader.js';
	if (typeof c === 'function') {
		if (source.indexOf('?') < 0) {
			source += '?';
		}
		source += '&callback=' + uniqueName;
	}
	document.querySelector('head').acc('script', '', {'src': source, 'id': uniqueName});
}

if (window.addEventListener)
	window.addEventListener("load", appendScript, false);
else if (window.attachEvent)
	window.attachEvent("onload", appendScript);
else window.onload = appendScript;

function ops(){
	console.log('ops');
}
