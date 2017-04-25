var section = G.query('section');
var footer = G.query('footer div.content');
G.ac(G.domNew('a', 'Repository', {href: G.repoUrl}), footer);
G.ac(G.domNew('a', 'Screenshots', {href: G.repoSshot}), footer);
G.ac([G.domNew('h1', 'G Readme'), G.domNew('h1', 'domtool gh-pages refs head')], section);
G.ac(G.domNew('h3', G.refs.ghpages), section);

// show commits for the first page and number of pagination links
function coo(response){
	G.repoCommits = response.data;
	G.repoCommitsLinks = response.meta.Link;
  var ul = G.domNew('ul');
  G.ac(ul, section);
	for (var i = 0; i < G.repoCommits.length; i++) {
		var commessa = G.repoCommits[i];
		var li = G.domNew('li');
		var code = G.domNew('code');
		G.ac(G.domNew('a', commessa.sha.substr(0,7), {href: commessa.html_url}), code);
		G.ac(code, li);
		li.innerHTML += ' &ndash; ' + commessa.commit.message;
		G.ac(li, ul);
	}
  G.ac(G.domNew('h2', response.data.length + ' commits, ' + response.meta.Link.length + ' Pagination links'), section);
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
				G.ac(nextLink, section);
			}
		}
	}
}

function nextPage (event) {
	event.preventDefault();
	G.loadScript(event.target.href);
	event.target.parentNode.removeChild(event.target);
}
