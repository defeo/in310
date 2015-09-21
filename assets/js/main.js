/** Micro-framework **/
(function() {
    if (!Function.prototype.bind) {
	Function.prototype.bind = function (oThis) {

	    // closest thing possible to the ECMAScript 5 internal IsCallable
	    // function
	    if (typeof this !== "function")
		throw new TypeError(
		    "Function.prototype.bind - what is trying to be fBound is not callable"
		);

	    var aArgs = Array.prototype.slice.call(arguments, 1),
	    fToBind = this,
	    fNOP = function () {},
	    fBound = function () {
		return fToBind.apply( this instanceof fNOP ? this : oThis || window,
				      aArgs.concat(Array.prototype.slice.call(arguments)));
	    };

	    fNOP.prototype = this.prototype;
	    fBound.prototype = new fNOP();

	    return fBound;
	};
    }
})();

var $ = (Document.prototype.$ = Document.prototype.querySelector).bind(document);
var $$ = (Document.prototype.$$ = Document.prototype.querySelectorAll).bind(document);
Element.prototype.$ = Element.prototype.querySelector;
Element.prototype.$$ = Element.prototype.querySelectorAll;
NodeList.prototype.forEach = Array.prototype.forEach;

// Append nodes, à la Jade
Element.prototype.append = function(jade, ns) {
    var format = /^([a-z1-6]+)((?:\.[^ #.]+|#[^ #.]+)*)(?:\s(.*))?$/i;
    var lines = jade.split('\n');
    var match = format.exec(lines[0]);
    if (!match)
	throw "Invalid tag format: " + jade
    var tag = match[1];
    var classes = match[2].match(/\.[^#.]+/g) || [];
    var id = match[2].match(/#[^#.]+/);
    if (match[3]) 
	lines[0] = match[3];
    else 
	lines.shift();
    var html = lines.join('\n');

    var elt;
    if (ns !== undefined)
	elt = document.createElementNS(ns, tag);
    else
	elt = document.createElement(tag);
    for (var i = 0; i < classes.length; i++)
	elt.classList.add(classes[i].substring(1));
    if (id)
	elt.id = id[0].substring(1);
    if (html)
	elt.innerHTML = html;

    return this.appendChild(elt);
}

// Apply JSON-formatted CSS directives to the element,
// or to its descendants
Element.prototype.css = function(css) {
    var old = {};
    for (var select_or_prop in css) {
	var val = css[select_or_prop];
	if (typeof(val) == 'string') {
	    old[select_or_prop] = this.style[select_or_prop];
	    this.style[select_or_prop] = val;
	} else {
	    this.$$(select_or_prop).forEach(function(e) {
		old[e] = e.css(val);
	    });
	}
    }
    return old;
}

// Event listeners a la jquery
Window.prototype.on = Document.prototype.on = Element.prototype.on = function(evts, cb, bubble) {
    var evts = evts.split(/\s+/);
    for (var i = 0 ; i < evts.length ; i++)
	this.addEventListener(evts[i], cb, bubble);
    return this;
}
Window.prototype.once = Document.prototype.once = Element.prototype.once = function(evts, cb, bubble) {
    var $this = this;
    return this.on(evts, function (e) {
	$this.removeEventListener(e.type, arguments.callee, bubble);
	cb.call(this, e);
    }, bubble);
}

/** Actions **/
document.addEventListener('DOMContentLoaded', function() {
    /* Make submenus click-activated */
    $$('.submenus').forEach(function(m) {
	m.parentNode.on('click', function(e) {
	    e.currentTarget.classList.toggle('active');
	    e.preventDefault();
	});
    });
});
