G.dom(document.getElementsByTagName('.content')[1], 'h1', G.refs.ghpages);

// show commits for the first page and nuomber of pagination links
function coo(response){
  G.dom(getElementsByTagName('.content')[1], 'p', [response.data.length, 'commits<br>', 'Pagination link', response.meta.Link.length].join(' '));
}

// request repo commits
G.dom(G.htmlHead, [G.repoApi, 'commits?callback=coo'].join('/'));
