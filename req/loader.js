document.body.acc('h1', 'ok', {'class': 'miao'});

appendScript('https://api.github.com/repos/petrosh/domtool/git/refs/heads/gh-pages?callback=foo');

function foo(response){
  document.body.acc('p', 'Repository gh-pages refs').acc('h1', response.data.object.sha);
	// document.getElementById('scripts').dt('https://cdn.rawgit.com/petrosh/domtool/' + response.data.object.sha + '/cosa/proceed.js');
}
