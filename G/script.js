var section = G.query('section');
var footer = G.query('footer div.content');
G.ac(footer, [
	G.domNew('a', 'Repository', {href: G.repoUrl}),
	G.domNew('a', 'Screenshots', {href: G.repoSshot})
]);
G.ac(section, G.domNew('h1', 'Readme'));
G.req([G.repoApi, 'contents', G.repoFolder + 'README.md'].join('/'), leggimi, 'get', 'application/vnd.github.v3.html');

function leggimi (r) {
	console.log(r);
}
