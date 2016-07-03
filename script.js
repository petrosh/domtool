function goLoad(url) {
	var script = document.createElement('script');
  script.setAttribute('src', url);
  document.querySelectorAll('head')[0].appendChild(script);
}

function foo(resp) {
	var sha = resp.data.object.sha;
	normal(sha);
}

function normal(sha) {
	var p = document.querySelector('p').innerHTML += ' ' + sha;
	goLoad('https://rawgit.com/petrosh/domtool/' + sha + '/dt.js');
}

function loadAssets() {
	goLoad('https://api.github.com/repos/petrosh/domtool/git/refs/heads/gh-pages?callback=foo');
}

if (window.addEventListener)
  window.addEventListener('load', loadAssets, false);
else if (window.attachEvent)
  window.attachEvent('onload', loadAssets);
else window.onload = loadAssets;
