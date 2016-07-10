document.body.dt(['p',{'p': 'async'}]);

function foo(response){
  document.body.dt(['span',{'span': response.data.object.sha}]);
	init('https://cdn.rawgit.com/petrosh/domtool/' + response.data.object.sha + '/arca/proceed.js');
}

init('https://api.github.com/repos/petrosh/domtool/git/refs/heads/gh-pages?callback=foo');
