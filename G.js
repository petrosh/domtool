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
	get htmlHead () { return document.getElementsByTagName('head')[0]; },
	dom: function (target, ele, inner, attributes) {
		var out = false;
		if (ele.constructor === String) {
			if (ele.substr(0, 4) === 'http' || ele.substr(ele.length - 3, 3) === '.js') {
				if (ele.indexOf('?') < 0) ele += '?';
				out = G.dom(target, 'script', '', {'src': ele + '&' + new Date().getTime()});
			} else {
				var element = G.domNew(ele);
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
				out = target.appendChild(element);
			}
		}
		return out;
	},
	get init () {
		return G.dom(G.htmlHead, G.repoApi + '/git/refs/heads/gh-pages?callback=G.loadScript');
	},
	loadScript: function (response) {
		G.refs.ghpages = response.data.object.sha;
		G.dom(G.htmlHead, [G.rawCdn, G.refs.ghpages, 'script.js'].join('/'));
	},
	domNew: function (tag) {
		return (document.createElement(tag)) ? document.createElement(tag) : false;
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
