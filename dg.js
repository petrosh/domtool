var g = {
	urlSlash: window.location.pathname.split('/'),
	urlArray: window.location.host.split('.'),
	urlHash: window.location.hash.substring(1),
	apiRepos: 'https://api.github.com/repos',
	refs: { master: "master", ghpages: "gh-pages"},
	get repoName () { return this.urlSlash[1]; },
	get repoOwner () { return this.urlArray[0]; },
	get repoFullname () { return [this.repoOwner, this.repoName].join('/'); },
	get repoHome () { return 'https://' + this.repoOwner + '.github.io/' + this.repoName; },
	get repoApi () { return [this.apiRepos, this.repoFullname].join('/'); },
	get rawStatic () { return ['https://rawgit.com', g.repoFullname].join('/'); },
	get rawCdn () { return ['https://cdn.rawgit.com', g.repoFullname].join('/'); },
	get htmlHead () { return document.getElementsByTagName('head')[0]; },
	dom: function (target, ele, inner, attributes) {
		var out = false;
		if (ele.constructor === String) {
			if (ele.substr(0, 4) === 'http' || ele.substr(ele.length - 3, 3) === '.js') {
				if (ele.indexOf('?') < 0) ele += '?';
				out = g.dom(target, 'script', '', {'src': ele + '&' + new Date().getTime()});
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
				out = target.appendChild(element);
			}
		}
		return out;
	},
	get init () {
		return g.dom(g.htmlHead, g.repoApi + '/git/refs/heads/gh-pages?callback=g.loadScript');
	},
	loadScript: function(response) {
		g.refs.ghpages = response.data.object.sha;
		g.dom(g.htmlHead, [g.rawCdn, g.refs.ghpages, 'script.js'].join('/'));
	}
};

if (window.addEventListener)
	window.addEventListener("load", g.init, false);
else if (window.attachEvent)
	window.attachEvent("onload", g.init);
else window.onload = g.init;
