var section = document.querySelector('section');
var footer = document.querySelector('footer');
G.dom(G.dom(footer, 'div', '', {class: 'content'}), 'a', 'repository', {href: G.repoUrl});
G.dom(section, 'h1', ['gh-pages refs head', G.refs.ghpages].join(': '));
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
