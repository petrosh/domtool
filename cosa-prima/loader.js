// append message
document.getElementById('main').dt('p', 'loader.js is loaded<br>Now requesting gh-pages ref');

// receive repo sha and load updated script
function foo(response){
  document.getElementById('main').dt('p', ['Repository gh-pages refs ' + response.data.object.sha, 'Now loading updated proceed.js from rawgit.com'].join('<br>'));
	appendScript('https://cdn.rawgit.com/petrosh/domtool/' + response.data.object.sha + '/cosa/proceed.js');
}

// request repo sha
appendScript('https://api.github.com/repos/petrosh/domtool/git/refs/heads/gh-pages?callback=foo');
