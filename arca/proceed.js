document.body.dt(['p',{'p': 'proceed'}]);

function coo(response){
  document.body.dt(['p',{'p': response.data.length + ' link ' + response.meta.Link.length}]);
}

init('https://api.github.com/repos/petrosh/domtool/commits?callback=coo');
