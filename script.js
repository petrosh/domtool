var section = G.query('section');
var footer = G.query('footer div.content');
G.ac(footer, G.domNew('a', 'Repository', {href: G.repoUrl}));
G.ac(footer, G.domNew('a', 'Screenshots', {href: G.repoSshot}));
G.ac(section, [G.domNew('h1', 'G Readme'), G.domNew('h1', 'domtool gh-pages refs head')]);
G.ac(section, G.domNew('h3', G.refs.ghpages));

// show commits for the first page and nuomber of pagination links
function coo(response){
	G.repoCommits = response.data;
	G.repoCommitsLinks = response.meta.Link;
  var ul = G.domNew('ul');
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
  G.ac(section, G.domNew('h2', response.data.length + ' commits, ' + response.meta.Link.length + ' Pagination links'));
	pagination();
}

// request repo commits
G.loadScript([G.repoApi, 'commits?callback=coo'].join('/'));

function pagination () {
	if (G.repoCommitsLinks.length) {
		var links = G.repoCommitsLinks;
		for (var i = 0; i < links.length; i++) {
			if (links[i][1].rel === 'next') {
				var nextLink = G.domNew('a', 'Next page', {href: links[i][0]});
				nextLink.addEventListener('click', nextPage);
				G.ac(section, nextLink);
			}
		}
	}
}

function nextPage (event) {
	event.preventDefault();
	G.loadScript(event.target.href);
	event.target.parentNode.removeChild(event.target);
}
