/*********************************************************************
*** Micro-framework

We collect here some utility functions making up a lightweight
framework, so we can avoid loading JQuery for basic tasks.
*********************************************************************/

var $ = (Document.prototype.$ = Document.prototype.querySelector).bind(document);
var $$ = (Document.prototype.$$ = Document.prototype.querySelectorAll).bind(document);
Element.prototype.$ = Element.prototype.querySelector;
Element.prototype.$$ = Element.prototype.querySelectorAll;
NodeList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.map = Array.prototype.map;
if (!Element.prototype.matches && Element.prototype.matchesSelector)
    Element.prototype.matches = Element.prototype.matchesSelector;

// Append nodes, a la Jade
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
	if (typeof(val) == 'string' || typeof(val) == 'number') {
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
Window.prototype.on = Document.prototype.on = Element.prototype.on =
    function(evts, cb, selector, useCapture, once) {
	var evts = evts.split(/\s+/);
	var $this = this;
	var handler = (!selector
		       ? function(e) {
			   cb.call(this, e);
			   if (once)
			       this.removeEventListener(e.type, handler, useCapture);
		       }
		       : function(e) {
			   for (var target = e.target; target != this; target = target.parentNode) {
			       if (target.matches(selector)) {
				   cb.call(target, e);
				   if (once)
				       this.removeEventListener(e.type, handler, useCapture);
				   break;
			       }
			   }
		       }).bind(this);
	for (var i = 0 ; i < evts.length ; i++)
	    this.addEventListener(evts[i], handler, useCapture);
	return this;
    }
Window.prototype.once = Document.prototype.once = Element.prototype.once =
    function(evts, cb, selector, useCapture) {
	return this.on(evts, cb, selector, useCapture, once);
    }

// Location parsers
Location.prototype.parsed_querystring = function() {
    return this.search && decodeURI(this.search.substr(1)).split('&').map(function (pair) {
	return pair.match(/^([^=]*)=?(.*)?$/).slice(1);
    }).reduce(function(qs, pair) {
	qs[pair[0]] = pair[1] !== undefined ? pair[1] : true;
	return qs;
    }, {});
};

/*******************************************************************
*** UI-related functions

These functions power the default components in the eLeMents UI.
********************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    /* Make toggles click-activated */
    $$('.toggleables').forEach(function(t) {
	t.on('click', function(e) {
	    var group = this.dataset['group'];
	    if (group) {
		$$(group + ' .toggle').forEach((function(toggle) {
		    if (toggle != this) {
			toggle.classList.remove('toggled');
			$$(toggle.dataset['target']).forEach(function(target) {
			    target.classList.remove('active');
			});
		    }
		}).bind(this));
	    }
	    this.classList.toggle('toggled');
	    $$(this.dataset['target']).forEach(function(target) {
		target.classList.toggle('active');
	    });
	    e.preventDefault();
	}, '.toggle');
    });
});
