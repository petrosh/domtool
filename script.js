document.body.d('h1', location.href, {'class': 'miao'});

// show commits for the first page and nuomber of pagination links
function coo(response){
  document.body.d('p', [response.data.length, 'commits<br>', 'Pagination link', response.meta.Link.length].join(' '));
}

// request repo commits
document.getElementById('scripts').d([g().apiRepo, 'commits?callback=coo'].join('/'));
