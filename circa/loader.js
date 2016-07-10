var p = document.createElement('p');
p.innerHTML = 'loader';
document.body.appendChild(p);

function foo(response){
  var pp = document.createElement('p');
  pp.innerHTML = response.data.object.sha;
  document.body.appendChild(pp);
	appendScript('https://cdn.rawgit.com/petrosh/domtool/' + response.data.object.sha + '/circa/proceed.js');
}

appendScript('https://api.github.com/repos/petrosh/domtool/git/refs/heads/gh-pages?callback=foo&rnd=' + new Date().getTime());
