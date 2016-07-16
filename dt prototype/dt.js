Element.prototype.d = function (ele, inner, attributes) {
	var out = false;
	if (ele.constructor === String) {
		if (ele.substr(0, 4) === 'http' || ele.substr(ele.length - 3, 3) === '.js') {
			if (ele.indexOf('?') < 0) ele += '?';
			out = this.d('script', '', {'src': ele + '&' + new Date().getTime()});
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
	}
	return out;
};

var g = {
	urlSlash: window.location.pathname.split('/'),
	urlArray: window.location.host.split('.'),
	urlHash: window.location.hash.substring(1),
	apiRepos: 'https://api.github.com/repos',
	get repoName () { return this.urlSlash[1]; },
	get repoOwner () { return this.urlArray[0]; },
	get repoFullname () { return [this.repoOwner, this.repoName].join('/'); },
	get repoHome () { return 'https://' + this.repoOwner + '.github.io/' + this.repoName; },
	get repoApi () { return [this.apiRepos, this.repoFullname].join('/'); },
	get rawStatic () { return ['https://rawgit.com', g.repoFullname].join('/'); },
	get rawCdn () { return ['https://cdn.rawgit.com', g.repoFullname].join('/'); },
};

function appendScript(t) {
	if (!document.getElementById('scripts')) document.body.d('div','',{'id':'scripts'});
	var source = (typeof t === 'string') ? t : g.repoApi + '/git/refs/heads/gh-pages?callback=loadScript';
	if (source.indexOf('?') < 0) source += '?';
	document.getElementById('scripts').d('script', '', {'src': source + '&' + new Date().getTime()});
}

function loadScript(response) {
	document.getElementById('scripts').d([g.rawCdn, response.data.object.sha, 'script.js'].join('/'));
}

if (window.addEventListener)
	window.addEventListener("load", appendScript, false);
else if (window.attachEvent)
	window.attachEvent("onload", appendScript);
else window.onload = appendScript;
