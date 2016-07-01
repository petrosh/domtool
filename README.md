# domtool
dt-domtool

**Usage**

```js
// Create article and fill
var article = document.createElement('article').dt(['header',['h1',['span'],'p'], 'div',['h3','ul'], 'footer']);

// Append and populate
document.body.dt(article.dt({'h1':'Botta','h1 span':'daje'}));

// Continue!
article.querySelector('ul').dt(['li',['span']]);
article.querySelector('footer').dt(['div',['span'],'p']).dt({'span':'ok'});
article.dt({'h3':'ora','li span':'QUI!'});
```

**To do**

- Object key: string (querySelector)
- Object value:
	- string (insertAdjacentHTML, afterbegin)
	- object
		- object key: attribute
		- object value: value

```js
// Set attributes
ele.dt({'a':{'href':'http://'}});
// Append and fill
ele.dt(['h1',{'h1':'titolo'}]);
```
