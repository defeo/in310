/* 
   This code is inspired by DZ-slides.
   <https://github.com/paulrouget/dzslides/>
*/

var SlideShow = {
    remoteWindows: [],
    idx: -1,
    step: 0,
    html: null,
    container: null,
    slides: null,
    progressBar : null,
    params: {
	autoplay: "1"
    },

    init: function() {
	this.container = $(ClassBP.page.addons.slideshow.container || "#content");
	this.container.classList.add("slideshow-container");
	this.slides = Array.prototype.slice.call(this.container.$$(":scope > section"));
	this.progressBar = this.container.append("div#progress-bar");
	this.html = $('html');
    },

    play: function() {
	this.html.classList.add("slideshow");
	this.oldSize = this.container.css({
	    width: (ClassBP.page.addons.slideshow.width || 800) + 'px',
	    height: (ClassBP.page.addons.slideshow.height || 600) + 'px',
	});
	this.setupParams();
	this.onhashchange();
	this.setupTouchEvents();
	this.onresize();
	window.onkeydown = this.onkeydown.bind(this);
	window.onresize = this.onresize.bind(this);
	window.onhashchange = this.onhashchange.bind(this);
    },

    pause: function() {
	this.html.classList.remove("slideshow");
	this.container.css(this.oldSize);
	window.onkeydown = null;
	window.onresize = null;
	window.onhashchange = null;
	this.unresize();
    },

    setupParams: function() {
	var p = window.location.search.substr(1).split('&');
	p.forEach(function(e, i, a) {
	    var keyVal = e.split('=');
	    SlideShow.params[keyVal[0]] = decodeURIComponent(keyVal[1]);
	});
	// Specific params handling
	if (!+this.params.autoplay)
	    $$("video").forEach(function(v){ v.controls = true });
    },

    onkeydown: function(aEvent) {
	// Don't intercept typing in forms
	// and designated components
	if (['INPUT', 'TEXTAREA', 'SELECT'].indexOf(aEvent.target.tagName) >= 0
	    || aEvent.target.classList.contains('dz-no-capture')) {
	    return;
	}
	// Don't intercept keyboard shortcuts
	if (aEvent.altKey
	    || aEvent.ctrlKey
	    || aEvent.metaKey
	    || aEvent.shiftKey) {
	    return;
	}
	if ( aEvent.keyCode == 37 // left arrow
	     || aEvent.keyCode == 38 // up arrow
	     || aEvent.keyCode == 33 // page up
	   ) {
	    aEvent.preventDefault();
	    this.back();
	}
	if ( aEvent.keyCode == 39 // right arrow
	     || aEvent.keyCode == 40 // down arrow
	     || aEvent.keyCode == 34 // page down
	   ) {
	    aEvent.preventDefault();
	    this.forward();
	}
	if (aEvent.keyCode == 35) { // end
	    aEvent.preventDefault();
	    this.goEnd();
	}
	if (aEvent.keyCode == 36) { // home
	    aEvent.preventDefault();
	    this.goStart();
	}
	if (aEvent.keyCode == 32) { // space
	    aEvent.preventDefault();
	    this.toggleContent();
	}
	if (aEvent.keyCode == 27) {
	    aEvent.preventDefault();
	    this.pause();
	}
    },

    /* Touch Events */
    
    setupTouchEvents: function() {
	// This is not mature yet
	return;
	var orgX, newX;
	var tracking = false;

	var db = document.body;
	db.addEventListener("touchstart", start.bind(this), false);
	db.addEventListener("touchmove", move.bind(this), false);

	function start(aEvent) {
	    aEvent.preventDefault();
	    tracking = true;
	    orgX = aEvent.changedTouches[0].pageX;
	}

	function move(aEvent) {
	    if (!tracking) return;
	    newX = aEvent.changedTouches[0].pageX;
	    if (orgX - newX > 100) {
		tracking = false;
		this.forward();
	    } else {
		if (orgX - newX < -100) {
		    tracking = false;
		    this.back();
		}
	    }
	}
    },

    /* Adapt the size of the slides to the window */
    
    onresize: function() {
	var db = this.container;
	var sx = db.clientWidth / window.innerWidth;
	var sy = db.clientHeight / window.innerHeight;
	var transform = "translate(-50%, -50%) scale(" + (1/Math.max(sx, sy)) + ")";

	db.style.MozTransform = transform;
	db.style.WebkitTransform = transform;
	db.style.OTransform = transform;
	db.style.msTransform = transform;
	db.style.transform = transform;
    },
    
    unresize: function() {
	var db = this.container;
	db.style.MozTransform = null;
	db.style.WebkitTransform = null;
	db.style.OTransform = null;
	db.style.msTransform = null;
	db.style.transform = null;
    },

    toggleContent: function() {
	// If a Video is present in this new slide, play it.
	// If a Video is present in the previous slide, stop it.
	var s = $("section[aria-selected]");
	if (s) {
	    var video = s.$("video");
	    if (video) {
		if (video.ended || video.paused) {
		    video.play();
		} else {
		    video.pause();
		}
	    }
	}
    },

    setCursor: function(aIdx, aStep) {
	// If the user change the slide number in the URL bar, jump
	// to this slide.
	aStep = (aStep != 0 && typeof aStep !== "undefined") ? "." + aStep : ".0";
	window.location.hash = "#" + aIdx + aStep;
    },
    
    onhashchange: function() {
	var cursor = window.location.hash.split("#"),
	newidx = 1,
	newstep = 0;
	if (cursor.length == 2) {
	    newidx = ~~cursor[1].split(".")[0];
	    newstep = ~~cursor[1].split(".")[1];
	    if (newstep > SlideShow.slides[newidx - 1].$$('.incremental > *').length) {
		newstep = 0;
		newidx++;
	    }
	}
	this.setProgress(newidx, newstep);
	if (newidx != this.idx) {
	    this.setSlide(newidx);
	}
	if (newstep != this.step) {
	    this.setIncremental(newstep);
	}
    },

    back: function() {
	if (this.idx == 1 && this.step == 0) {
	    return;
	}
	if (this.step == 0) {
	    this.setCursor(this.idx - 1,
			   this.slides[this.idx - 2].$$('.incremental > *').length);
	} else {
	    this.setCursor(this.idx, this.step - 1);
	}
    },

    forward: function() {
	if (this.idx >= this.slides.length &&
	    this.step >= this.slides[this.idx - 1].$$('.incremental > *').length) {
	    return;
	}
	if (this.step >= this.slides[this.idx - 1].$$('.incremental > *').length) {
	    this.setCursor(this.idx + 1, 0);
	} else {
	    this.setCursor(this.idx, this.step + 1);
	}
    },

    goStart: function() {
	this.setCursor(1, 0);
    },

    goEnd: function() {
	var lastIdx = this.slides.length;
	var lastStep = this.slides[lastIdx - 1].$$('.incremental > *').length;
	this.setCursor(lastIdx, lastStep);
    },

    setSlide: function(aIdx) {
	this.idx = aIdx;
	var old = $("section[aria-selected]");
	var next = $("section:nth-of-type("+ this.idx +")");
	if (old) {
	    old.removeAttribute("aria-selected");
	    var video = old.$("video");
	    if (video) {
		video.pause();
	    }
	}
	if (next) {
	    this.html.setAttribute("data-slide", this.idx);
	    next.setAttribute("aria-selected", "true");
	    var video = next.$("video");
	    if (video && !!+this.params.autoplay) {
		video.play();
	    }
	} else {
	    // That should not happen
	    this.idx = -1;
	}
    },

    setIncremental: function(aStep) {
	this.step = aStep;
	this.html.setAttribute("data-incremental", this.step);
	var old = this.slides[this.idx - 1].$('.incremental > *[aria-selected]');
	if (old) {
	    old.removeAttribute('aria-selected');
	}
	var incrementals = $$('.incremental');
	if (this.step <= 0) {
	    incrementals.forEach(function(aNode) {
		aNode.removeAttribute('active');
	    });
	    return;
	}
	var next = this.slides[this.idx - 1].$$('.incremental > *')[this.step - 1];
	if (next) {
	    next.setAttribute('aria-selected', true);
	    next.parentNode.setAttribute('active', true);
	    var found = false;
	    incrementals.forEach(function(aNode) {
		if (aNode != next.parentNode)
		    if (found)
			aNode.removeAttribute('active');
		else
		    aNode.setAttribute('active', true);
		else
		    found = true;
	    });
	} else {
	    setCursor(this.idx, 0);
	}
	return next;
    },

    setProgress: function(aIdx, aStep) {
	var slide = $("section:nth-of-type("+ aIdx +")");
	if (!slide)
	    return;
	var steps = slide.$$('.incremental > *').length + 1,
	slideSize = 100 / (this.slides.length - 1),
	stepSize = slideSize / steps;
	this.progressBar.style.width = ((aIdx - 1) * slideSize + aStep * stepSize) + '%';
    },
};

SlideShow.init();
