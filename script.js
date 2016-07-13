document.body.acc('h1', 'script running', {'class': 'miao'});

// show commits for the first page and nuomber of pagination links
function coo(response){
  document.getElementById('main').acc('p', [response.data.length, 'commits<br>', 'Pagination link', response.meta.Link.length].join(' '));
}

// request repo commits
document.getElementById('scripts').acc('https://api.github.com/repos/petrosh/domtool/commits?callback=coo');
