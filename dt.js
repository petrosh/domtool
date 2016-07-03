Element.prototype.dt = function (input) {
	var parent = this;
  if (input.constructor === Array) {
    for (var i = 0; i < input.length; i++) {
			if (input[i].constructor === Array) this.lastElementChild.dt(input[i]);
			else if (input[i].constructor === String) this.appendChild(document.createElement(input[i]));
			else if (input[i].constructor.toString().substr(9,4) === 'HTML') this.appendChild(input[i]);
    }
  } else if (input.constructor === String) this.appendChild(document.createElement(input));
	else if (input.constructor.toString().substr(9,4) === 'HTML') this.appendChild(input);
	else if (input.constructor === Object) {
		for (var key in input) {
		  if (input.hasOwnProperty(key)) {
				this.querySelector(key).innerHTML += input[key];
		  }
		}
	}
  return this;
};

function proto(){
	// Create article and fill
	var article = document.createElement('article');
	article.dt(['header',['h1',['span'],'p'], 'div',['h3','ul'], 'footer']);

	// Append and populate
	var body = document.body;
	body.dt(article.dt({'h1':'Botta','h1 span':'daje'}));

	// Continue!
	article.querySelector('ul').dt(['li',['span']]);
	article.querySelector('footer').dt(['div',['span'],'p']).dt({'span':'ok'});
	article.dt({'h3':'ora','li span':'QUI!'});

	return article;
}

proto();
