var p = document.createElement('p');
p.innerHTML = 'proceed';
document.body.appendChild(p);

function coo(response){
  var ppp = document.createElement('p');
  ppp.innerHTML = response.data.length + ' link ' + response.meta.Link.length;
  document.body.appendChild(ppp);
}

appendScript('https://api.github.com/repos/petrosh/domtool/commits?callback=coo');
