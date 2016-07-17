# G

**All in one**

- Append
	`G.ac(target, element)`
	- `target`: element, the target element.
	- `element`: element or elements array to append.

- Load script
	`G.loadScript(url)`

- Dom new
	`G.domNew(tag, inner, attributes)`
	- `tag`: tag of the element created.
	- `inner` (optional): appended with inner HTML.
	- `attributes` (optional): attributes as key-value pairs.

- Query selector
	`G.query(selector, parent)`
	- `selector`: scope to select element.
	- `parent` (optional): parent to perform the query, if omitted, `body` is used.

- Request
	`G.req(url, callback, method, accept, data)`
	- `accept`: value for the `Accept` request header. Default to `v3.full+json`
