Element.prototype.acc = function (ele, inner, attributes) {
	var out = false;
	if (ele.constructor === String) {
		if (ele.substr(0, 4) === 'http' || ele.substr(ele.length - 3, 3) === '.js') {
			if (ele.indexOf('?') < 0) ele += '?';
			out = this.acc('script', '', {'src': ele + '&' + new Date().getTime()});
		} else {
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
		}
	};
	return out;
};

function appendScript(t) {
	if (!document.getElementById('scripts')) document.body.acc('div','',{'id':'scripts'});
	var source = (typeof t === 'string') ? t : 'https://api.github.com/repos/petrosh/domtool/git/refs/heads/gh-pages?callback=loadScript';
	if (source.indexOf('?') < 0) source += '?';
	document.getElementById('scripts').acc('script', '', {'src': source + '&' + new Date().getTime()});
}

function loadScript(response) {
	document.getElementById('scripts').acc('https://cdn.rawgit.com/petrosh/domtool/' + response.data.object.sha + '/script.js');
}

if (window.addEventListener)
	window.addEventListener("load", appendScript, false);
else if (window.attachEvent)
	window.attachEvent("onload", appendScript);
else window.onload = appendScript;
