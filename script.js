var section = G.query('section');
var footer = G.query('footer div.content');
G.ac(footer, G.domNew('a', 'Repository', {href: G.repoUrl}));
G.ac(footer, G.domNew('a', 'Screenshots', {href: G.repoSshot}));
G.ac(section, G.domNew('h1', 'gh-pages refs head'));
G.ac(section, G.domNew('h3', G.refs.ghpages));

// show commits for the first page and nuomber of pagination links
function coo(response){
	G.repoCommits = response.data;
	G.ac(section, G.domNew('h2', [response.data.length, 'commits<br>', 'Pagination link', response.meta.Link.length].join(' ')));
  var ul = G.domNew('ul');
	// section.G(ul);
  section.ac(ul);
	for (var i = 0; i < G.repoCommits.length; i++) {
		var commessa = G.repoCommits[i];
		var li = G.domNew('li');
		var code = G.domNew('code');
		G.ac(code, G.domNew('a', commessa.sha.substr(0,7), {href: commessa.html_url}));
		li.ac(code);
		li.innerHTML += ' &ndash; ' + commessa.commit.message;
		// ul.G(li);
    document.querySelector('ul').appendChild(li);
	}
}

// request repo commits
G.loadScript([G.repoApi, 'commits?callback=coo'].join('/'));
