var p = document.createElement('p');
p.innerHTML = 'ciao';
document.body.appendChild(p);

scriptUrl = 'https://api.github.com/repos/petrosh/domtool/git/refs/gh-pages?callback=foo';

function foo(response){
  var pp = document.createElement('p');
  pp.innerHTML = response.data.object.sha;
  document.body.appendChild(pp);
}

init();
