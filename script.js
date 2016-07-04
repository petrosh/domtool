function goLoad(url) {
	stack.push('loading ' + url);
	var script = document.createElement('script');
  script.setAttribute('src', url);
  document.querySelector('head').appendChild(script);
}

function foo(resp) {
	var sha;
	if(resp.data.object.sha){
		sha = resp.data.object.sha;
	}
	stack.push('sha ' + sha);
	normal(sha);
}

function normal(sha) {
	if (!sha) {
		goLoad('https://rawgit.com/petrosh/domtool/gh-pages/dt.js');
	} else {
		// goLoad('dt.js');
		goLoad('https://cdn.rawgit.com/petrosh/domtool/' + sha + '/dt.js');
	}
}

function loadAssets() {
	goLoad('https://api.github.com/repos/petrosh/domtool/git/refs/heads/gh-pages?callback=foo');
}

if (window.addEventListener)
  window.addEventListener('load', loadAssets, false);
else if (window.attachEvent)
  window.attachEvent('onload', loadAssets);
else window.onload = loadAssets;
