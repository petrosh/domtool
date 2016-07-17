var G = {
	urlSlash: window.location.pathname.split('/'),
	urlArray: window.location.host.split('.'),
	urlHash: window.location.hash.substring(1),
	apiRepos: 'https://api.github.com/repos',
	refs: { master: "master", ghpages: "gh-pages"},
	repoCommits: [],
	get repoName () { return this.urlSlash[1]; },
	get repoOwner () { return this.urlArray[0]; },
	get repoFullname () { return [this.repoOwner, this.repoName].join('/'); },
	get repoUrl () { return 'https://github.com/' + G.repoFullname; },
	get repoSshot () { return 'https://developer.microsoft.com/en-us/microsoft-edge/tools/screenshots/#https://' + G.repoOwner + '.github.io/' + G.repoName; },
	get repoHome () { return 'https://' + this.repoOwner + '.github.io/' + this.repoName; },
	get repoApi () { return [this.apiRepos, this.repoFullname].join('/'); },
	get rawStatic () { return ['https://rawgit.com', G.repoFullname].join('/'); },
	get rawCdn () { return ['https://cdn.rawgit.com', G.repoFullname].join('/'); },
	get init () {
		return G.loadScript(G.repoApi + '/git/refs/heads/gh-pages?callback=G.gotSha');
	},
	gotSha: function (response) {
		G.refs.ghpages = response.data.object.sha;
		return G.loadScript([G.rawCdn, G.refs.ghpages, 'script.js'].join('/'));
	},
	ac: function (target, element) {
		if (element.constructor === Array) {
			for (var i = 0; i < element.length; i++) {
				target.appendChild(element[i]);
			}
			return target;
		} else {
			return target.appendChild(element);
		}
	},
	loadScript: function (s) {
		if (s.indexOf('?') < 0) s += '?';
		G.ac(document.getElementsByTagName('head')[0], G.domNew('script', '', {'src': s + '&' + new Date().getTime()}));
	},
	domNew: function (tag, inner, attributes) {
		var element = document.createElement(tag);
		if (inner) {
			element.innerHTML = inner;
		}
		if (attributes && attributes.constructor === Object) {
			for (var key in attributes) {
				if (attributes.hasOwnProperty(key)) {
					element.setAttribute(key, attributes[key]);
				}
			}
		}
		return element;
	},
	query: function (selector) {
		return (document.querySelector(selector)) ? document.querySelector(selector) : false;
	}
};

if (window.addEventListener)
	window.addEventListener("load", G.init, false);
else if (window.attachEvent)
	window.attachEvent("onload", G.init);
else window.onload = G.init;
