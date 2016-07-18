var section = G.query('section');
var footer = G.query('footer div.content');
G.ac([
	G.domNew('a', 'Repository', {href: G.repoUrl}),
	G.domNew('a', 'Screenshots', {href: G.repoSshot})
], footer);
G.req([G.repoApi, 'contents', G.repoFolder, 'README.md'].join('/'), print, 'get', 'application/vnd.github.v3.html', {ref: 'gh-pages'});

function print () {
	section.innerHTML += this.toString();
}
