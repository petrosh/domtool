// append message
document.getElementById('main').acc('p', 'proceed.js is loaded<br>Now requesting repository commits');

// show commits for the first page and nuomber of pagination links
function coo(response){
  document.getElementById('main').acc('p', [response.data.length, 'commits<br>', 'Pagination link', response.meta.Link.length].join(' '));
}

// request repo commits
appendScript('https://api.github.com/repos/petrosh/domtool/commits?callback=coo');
