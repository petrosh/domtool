// append message
document.body.dt('p', 'loader running');

// receive repo sha and load updated script
function foo(response){
  document.body.dt('p', ['sha', response.data.object.sha].join(', '));
	document.getElementById('scripts').dt('https://cdn.rawgit.com/petrosh/domtool/' + response.data.object.sha + '/cosa/proceed.js');
}

// request repo sha
document.getElementById('scripts').dt('https://api.github.com/repos/petrosh/domtool/git/refs/heads/gh-pages?callback=foo');
