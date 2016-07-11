document.body.acc('p', 'loader running');

function foo(response){
  document.body.acc('p', ['sha', response.data.object.sha].join(', '));
	appendScript('https://cdn.rawgit.com/petrosh/domtool/' + response.data.object.sha + '/cosa/proceed.js');
}

appendScript('https://api.github.com/repos/petrosh/domtool/git/refs/heads/gh-pages?callback=foo');
