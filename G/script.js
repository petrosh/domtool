var section = G.query('section');
var footer = G.query('footer div.content');
G.ac(footer, G.domNew('a', 'Repository', {href: G.repoUrl}));
G.ac(footer, G.domNew('a', 'Screenshots', {href: G.repoSshot}));
G.ac(section, [G.domNew('h1', 'G Readme'), G.domNew('h1', 'domtool gh-pages refs head')]);
G.ac(section, G.domNew('h3', G.refs.ghpages));

// show commits for the first page and nuomber of pagination links
function coo(response){
	G.repoCommits = response.data;
  var ul = G.domNew('ul');
	// section.G(ul);
  G.ac(section, ul);
	for (var i = 0; i < G.repoCommits.length; i++) {
		var commessa = G.repoCommits[i];
		var li = G.domNew('li');
		var code = G.domNew('code');
		G.ac(code, G.domNew('a', commessa.sha.substr(0,7), {href: commessa.html_url}));
		G.ac(li, code);
		li.innerHTML += ' &ndash; ' + commessa.commit.message;
		G.ac(ul, li);
	}
  G.ac(section, G.domNew('h2', response.data.length + 'commits, ' + response.meta.Link.length + ' Pagination links'));
}

// request repo commits
G.loadScript([G.repoApi, 'commits?callback=coo'].join('/'));
