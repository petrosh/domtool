var section = G.query('section');
var footer = G.query('footer div.content');
footer.G('a', 'Repository', {href: G.repoUrl});
footer.G('a', 'Screenshots', {href: G.repoSshot});
section.G('h1', 'gh-pages refs head');
section.G('h3', G.refs.ghpages);

// show commits for the first page and nuomber of pagination links
function coo(response){
	G.repoCommits = response.data;
	section.G('h2', [response.data.length, 'commits<br>', 'Pagination link', response.meta.Link.length].join(' '));
  var ul = 'ul'.G();
	section.G(ul);
	for (var i = 0; i < G.repoCommits.length; i++) {
		var commessa = G.repoCommits[i];
		var li = 'li'.G();
		var code = 'code'.G();
		code.G('a', commessa.sha.substr(0,7), {href: commessa.html_url});
		li.appendChild(code);
		li.innerHTML += ' ' + commessa.commit.message;
		ul.G(li);
	}
}

// request repo commits
G.htmlHead.G([G.repoApi, 'commits?callback=coo'].join('/'));
