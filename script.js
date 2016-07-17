var section = G.query('section');
var footer = G.query('footer div.content');
G.dom(footer, 'a', 'Repository', {href: G.repoUrl});
G.dom(footer, 'a', 'Screenshot', {href: G.repoSshot});
G.dom(section, 'h1', 'gh-pages refs head');
G.dom(section, 'h3', G.refs.ghpages);

// show commits for the first page and nuomber of pagination links
function coo(response){
	G.repoCommits = response.data;
	G.dom(section, 'h2', [response.data.length, 'commits<br>', 'Pagination link', response.meta.Link.length].join(' '));
  G.dom(section, 'ul');
	for (var i = 0; i < G.repoCommits.length; i++) {
    var commessa = G.repoCommits[i];
    var li = G.query('li');
    var code = G.query('code');
    G.dom(code, 'a', commessa.sha.substr(0,7), {href: commessa.html_url});
    li.appendChild(code);
    li.innerHTML += ' ' + commessa.commit.message;
		section.querySelector('ul').appendChild(li);
	}
}

// request repo commits
G.dom(G.htmlHead, [G.repoApi, 'commits?callback=coo'].join('/'));
