g.dom(document.body, 'h1', g.refs.ghpages, {'class': 'miao'});

// show commits for the first page and nuomber of pagination links
function coo(response){
  g.dom(document.body, 'p', [response.data.length, 'commits<br>', 'Pagination link', response.meta.Link.length].join(' '));
}

// request repo commits
g.dom(g.htmlHead, [g.repoApi, 'commits?callback=coo'].join('/'));
