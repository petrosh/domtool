// append message
document.body.dt('p', 'proceed running');

// show commits for the first page and nuomber of pagination links
function coo(response){
  document.body.dt('p', [response.data.length, 'link', response.meta.Link.length].join(' '));
}

// request repo commits
document.getElementById('scripts').dt('https://api.github.com/repos/petrosh/domtool/commits?callback=coo');
