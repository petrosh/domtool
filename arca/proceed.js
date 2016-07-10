var p = document.createElement('p');
p.innerHTML = 'proceed';
document.body.appendChild(p);

scriptUrl = 'https://api.github.com/repos/petrosh/domtool/commits?callback=coo';

function coo(response){
  var ppp = document.createElement('p');
  ppp.innerHTML = response.data.length + ' link ' + response.meta.Link.length;
  document.body.appendChild(ppp);
}

init();
