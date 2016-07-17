var section = document.querySelector('section');
var footer = document.querySelector('footer div.content');
G.dom(footer, 'a', 'repository', {href: G.repoUrl});
G.dom(footer, 'a', 'screenshot', {href: G.repoSshot});
G.dom(section, 'h1', 'gh-pages refs head');
G.dom(section, 'h3', G.refs.ghpages);
G.dom(section, 'ul');

// show commits for the first page and nuomber of pagination links
function coo(response){
	G.repoCommits = response.data;
	G.dom(section, 'h2', [response.data.length, 'commits<br>', 'Pagination link', response.meta.Link.length].join(' '));
	for (var i = 0; i < G.repoCommits.length; i++) {
		G.dom(section.querySelector('ul'), 'li', G.repoCommits[i].commit.message);
	}
}

// request repo commits
G.dom(G.htmlHead, [G.repoApi, 'commits?callback=coo'].join('/'));
