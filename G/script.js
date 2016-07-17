var section = G.query('section');
var footer = G.query('footer div.content');
G.ac(footer, [
	G.domNew('a', 'Repository', {href: G.repoUrl}),
	G.domNew('a', 'Screenshots', {href: G.repoSshot})
]);
G.req([G.repoApi, 'contents', G.repoFolder, 'README.md'].join('/'), leggimi, 'get', 'application/vnd.github.v3.html', {ref: 'gh-pages'});

function leggimi () {
	section.innerHTML += this.toString();
}
