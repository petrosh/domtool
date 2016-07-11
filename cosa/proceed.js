document.body.acc('p', 'proceed running');

function coo(response){
  document.body.acc('p', [response.data.length, 'link', response.meta.Link.length].join(' '));
}

appendScript('https://api.github.com/repos/petrosh/domtool/commits?callback=coo');
