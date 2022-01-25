/* Preloader */

$(window).on("load", function () {
	$("#preloader").fadeOut();
});

/* Header fixed */

if ($(this).scrollTop() > 100) {
	$(".header").addClass("fixed");
}
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$(".header").addClass("fixed");
	} else if ($(this).scrollTop() < 100) {
		$(".header").removeClass("fixed");
	}
});

/* Header */

$("#menuOpen").click(function (event) {
	event.preventDefault();
	$(".header__menu").addClass("header__menu-open");
});
$("#menuClose").click(function (event) {
	event.preventDefault();
	$(".header__menu").removeClass("header__menu-open");
});

$("#searchOpen").click(function (event) {
	event.preventDefault();
	$(".header__input").removeClass("hide");
	setTimeout(function () {
		$(".header__input").addClass("header__input-show");
		$(".header__list").addClass("header__list-hide");
		$(".header__search").addClass("header__search-show");
		$("#searchClose").fadeIn(100);
	}, 50);
	setTimeout(function () {
		$(".header__list").addClass("hide");
	}, 400);
});
$("#searchClose").click(function (event) {
	event.preventDefault();
	$(".header__list").removeClass("hide");
	setTimeout(function () {
		$(".header__list").removeClass("header__list-hide");
		$(".header__input").addClass("hide");
	}, 50);
	$(".header__search").removeClass("header__search-show");
	$("#searchClose").fadeOut(100);
});
$(".main__follow-text span").click(function () {
	$(".main__follow-text").addClass("main__follow-text-hide");
});

/* dreams_btn */

$(".dream__items-btn").click(function (e) {
	let num = $(this).attr("data-btn");
	$(".dream__item").removeClass("dream__item-show");
	$(".dream__item[data-btn='" + num + "'").addClass("dream__item-show");
	$(".dream__items-btn").removeClass("active");
	$(this).addClass("active");
});

/* product btn */

$(".product__btn-heart").click(function () {
	$(".product__btn-heart").toggleClass("product__btn-heart-active");
});

$(".btn__copy").click(function () {
	let area = document.createElement("textarea");
	document.body.appendChild(area);
	area.value = window.location.href;
	area.select();
	document.execCommand("copy");
	document.body.removeChild(area);
});

// sidebar open

$(".sidebar__open").click(function () {
	$(".sidebar").addClass("sidebar-open");
	$("header").addClass("index");
	$(".background").addClass("fix");
});
$(".sidebar__close").click(function () {
	$(".sidebar").removeClass("sidebar-open");
	$("header").removeClass("index");
	$(".background").removeClass("fix");
});

// password

$('.sign__recovery').click(function () {
	$('.sign__message').show()
	setTimeout(function () {
		$(".sign__message").addClass("animate__fadeOutDown");
	}, 3000)
	setTimeout(function () {
		$('.sign__message').hide()
		$(".sign__message").removeClass("animate__fadeOutDown");
	}, 5000)
})

// banks open
$(".banks__open>a").click(function (event) {
	event.preventDefault();
})
$(".banks__open").click(function (event) {
	$(this).toggleClass("banks__open-active");
});

$(".banks__open-gender").click(function (event) {
	event.preventDefault();
	$(this).toggleClass("banks__open-active");
});

$(".banks__open-city").click(function (event) {
	event.preventDefault();
	$(this).toggleClass("banks__open-active");
});

$('.new__hide li').click(function () {
	$(this).parents('.new__input').children('span').html($(this).html())
})

$('.support__hide li').click(function () {
	$(this).parents('.support__open').children('span').html($(this).html())
})
// load

$('.new__load').click(function () {
	$(this).parents('.new__img').children('input').trigger('click')
});

$('.profile__change').click(function () {
	console.log($(this).parents('.profile__img').children('input'))
	$(this).parents('.profile__img').children('input').trigger('click')
});

$('.deposit__btn').click(function (event) {
	let login = $('input[name="name"]').val()
	if (!login) {
		event.preventDefault();
		$('input[name="name"]').addClass('input-red')
		$('input[name="name"]').prev().addClass('label-red')
		$('.deposit__name-hide').show()
	}
})

// Contacts Map
if ($("#map").length > 0) {
	google.maps.event.addDomListener(window, "load", init);

	function init() {
		var mapOptions = {
			zoom: 11,
			center: new google.maps.LatLng(59.898594, 30.270394),
			styles: [
				{
					elementType: "geometry",
					stylers: [
						{
							color: "#f5f5f5",
						},
					],
				},
				{
					elementType: "labels.icon",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
				{
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#616161",
						},
					],
				},
				{
					elementType: "labels.text.stroke",
					stylers: [
						{
							color: "#f5f5f5",
						},
					],
				},
				{
					featureType: "administrative.land_parcel",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#bdbdbd",
						},
					],
				},
				{
					featureType: "poi",
					elementType: "geometry",
					stylers: [
						{
							color: "#eeeeee",
						},
					],
				},
				{
					featureType: "poi",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#757575",
						},
					],
				},
				{
					featureType: "poi.park",
					elementType: "geometry",
					stylers: [
						{
							color: "#e5e5e5",
						},
					],
				},
				{
					featureType: "poi.park",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#9e9e9e",
						},
					],
				},
				{
					featureType: "road",
					elementType: "geometry",
					stylers: [
						{
							color: "#ffffff",
						},
					],
				},
				{
					featureType: "road.arterial",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#757575",
						},
					],
				},
				{
					featureType: "road.highway",
					elementType: "geometry",
					stylers: [
						{
							color: "#dadada",
						},
					],
				},
				{
					featureType: "road.highway",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#616161",
						},
					],
				},
				{
					featureType: "road.local",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#9e9e9e",
						},
					],
				},
				{
					featureType: "transit.line",
					elementType: "geometry",
					stylers: [
						{
							color: "#e5e5e5",
						},
					],
				},
				{
					featureType: "transit.station",
					elementType: "geometry",
					stylers: [
						{
							color: "#eeeeee",
						},
					],
				},
				{
					featureType: "water",
					elementType: "geometry",
					stylers: [
						{
							color: "#c9c9c9",
						},
					],
				},
				{
					featureType: "water",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#9e9e9e",
						},
					],
				},
			],
		};
		var mapElement = document.getElementById("map");
		var map = new google.maps.Map(mapElement, mapOptions);
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(59.898594, 30.270394),
			map: map,
		});
	}
}


// modal

$(".product__btn-pay").click(function () {
	$("body").addClass("overflow");
	$(".popup__wrape_1").fadeIn();
});

$(".feedback__item img").click(function () {
	$("body").addClass("overflow");
	$(".popup__wrape").fadeIn();
	let src = $(this).attr('data-modal');
	console.log(src)
	$(".popup__wrape .popup__content").attr('src', src);
});

$(".popup__close").click(function () {
	$("body").removeClass("overflow");
	$(".popup__wrape_1").fadeOut();
	$(".popup__wrape").fadeOut();
});
$(".popup__wrape").click(function () {
	$("body").removeClass("overflow");
	$(".popup__wrape").fadeOut();
});
$(".popup__wrape_1").click(function () {
	$("body").removeClass("overflow");
	$(".popup__wrape_1").fadeOut();
});
$(".popup__modal").click(function (event) {
	event.stopPropagation();
});


// carousel

if ($(".bank__carousel").length > 0) {
	$(".bank__carousel").owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		navText: "",
		responsive: {
			0: {
				items: 2,
			},
			900: {
				items: 2,
				nav: false,
				dots: true,
			},
			910: {
				items: 3,
				dots: false,
				nav: true,
			},
			1390: {
				items: 3,
				dots: false,
				nav: true,
			},
			1400: {
				items: 4,
				margin: 20,
				dots: false,
				nav: true,
			},
		},
	});
}

if ($(".catalog__carousel").length > 0) {
	$(".catalog__carousel").owlCarousel({
		loop: true,
		responsiveClass: true,
		dots: false,
		nav: true,
		navText: "",
		margin: 20,
		autoWidth: true,
		items: 4,
	});
}


// mask
// jQuery Mask Plugin v1.14.16
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, n, f) {
	a instanceof String && (a = String(a));
	for (var p = a.length, k = 0; k < p; k++) {
		var b = a[k];
		if (n.call(f, b, k, a)) return {i: k, v: b}
	}
	return {i: -1, v: void 0}
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, n, f) {
	a != Array.prototype && a != Object.prototype && (a[n] = f.value)
};
$jscomp.getGlobal = function (a) {
	return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, n, f, p) {
	if (n) {
		f = $jscomp.global;
		a = a.split(".");
		for (p = 0; p < a.length - 1; p++) {
			var k = a[p];
			k in f || (f[k] = {});
			f = f[k]
		}
		a = a[a.length - 1];
		p = f[a];
		n = n(p);
		n != p && null != n && $jscomp.defineProperty(f, a, {configurable: !0, writable: !0, value: n})
	}
};
$jscomp.polyfill("Array.prototype.find", function (a) {
	return a ? a : function (a, f) {
		return $jscomp.findInternal(this, a, f).v
	}
}, "es6", "es3");
(function (a, n, f) {
	"function" === typeof define && define.amd ? define(["jquery"], a) : "object" === typeof exports && "undefined" === typeof Meteor ? module.exports = a(require("jquery")) : a(n || f)
})(function (a) {
	var n = function (b, d, e) {
		var c = {
			invalid: [], getCaret: function () {
				try {
					var a = 0, r = b.get(0), h = document.selection, d = r.selectionStart;
					if (h && -1 === navigator.appVersion.indexOf("MSIE 10")) {
						var e = h.createRange();
						e.moveStart("character", -c.val().length);
						a = e.text.length
					} else if (d || "0" === d) a = d;
					return a
				} catch (C) {
				}
			}, setCaret: function (a) {
				try {
					if (b.is(":focus")) {
						var c =
							b.get(0);
						if (c.setSelectionRange) c.setSelectionRange(a, a); else {
							var g = c.createTextRange();
							g.collapse(!0);
							g.moveEnd("character", a);
							g.moveStart("character", a);
							g.select()
						}
					}
				} catch (B) {
				}
			}, events: function () {
				b.on("keydown.mask", function (a) {
					b.data("mask-keycode", a.keyCode || a.which);
					b.data("mask-previus-value", b.val());
					b.data("mask-previus-caret-pos", c.getCaret());
					c.maskDigitPosMapOld = c.maskDigitPosMap
				}).on(a.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", c.behaviour).on("paste.mask drop.mask", function () {
					setTimeout(function () {
							b.keydown().keyup()
						},
						100)
				}).on("change.mask", function () {
					b.data("changed", !0)
				}).on("blur.mask", function () {
					f === c.val() || b.data("changed") || b.trigger("change");
					b.data("changed", !1)
				}).on("blur.mask", function () {
					f = c.val()
				}).on("focus.mask", function (b) {
					!0 === e.selectOnFocus && a(b.target).select()
				}).on("focusout.mask", function () {
					e.clearIfNotMatch && !k.test(c.val()) && c.val("")
				})
			}, getRegexMask: function () {
				for (var a = [], b, c, e, t, f = 0; f < d.length; f++) (b = l.translation[d.charAt(f)]) ? (c = b.pattern.toString().replace(/.{1}$|^.{1}/g, ""), e = b.optional,
					(b = b.recursive) ? (a.push(d.charAt(f)), t = {
						digit: d.charAt(f),
						pattern: c
					}) : a.push(e || b ? c + "?" : c)) : a.push(d.charAt(f).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
				a = a.join("");
				t && (a = a.replace(new RegExp("(" + t.digit + "(.*" + t.digit + ")?)"), "($1)?").replace(new RegExp(t.digit, "g"), t.pattern));
				return new RegExp(a)
			}, destroyEvents: function () {
				b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
			}, val: function (a) {
				var c = b.is("input") ? "val" : "text";
				if (0 < arguments.length) {
					if (b[c]() !== a) b[c](a);
					c = b
				} else c = b[c]();
				return c
			}, calculateCaretPosition: function (a) {
				var d = c.getMasked(), h = c.getCaret();
				if (a !== d) {
					var e = b.data("mask-previus-caret-pos") || 0;
					d = d.length;
					var g = a.length, f = a = 0, l = 0, k = 0, m;
					for (m = h; m < d && c.maskDigitPosMap[m]; m++) f++;
					for (m = h - 1; 0 <= m && c.maskDigitPosMap[m]; m--) a++;
					for (m = h - 1; 0 <= m; m--) c.maskDigitPosMap[m] && l++;
					for (m = e - 1; 0 <= m; m--) c.maskDigitPosMapOld[m] && k++;
					h > g ? h = 10 * d : e >= h && e !== g ? c.maskDigitPosMapOld[h] || (e = h, h = h - (k - l) - a, c.maskDigitPosMap[h] && (h = e)) : h > e && (h = h + (l - k) + f)
				}
				return h
			}, behaviour: function (d) {
				d =
					d || window.event;
				c.invalid = [];
				var e = b.data("mask-keycode");
				if (-1 === a.inArray(e, l.byPassKeys)) {
					e = c.getMasked();
					var h = c.getCaret(), g = b.data("mask-previus-value") || "";
					setTimeout(function () {
						c.setCaret(c.calculateCaretPosition(g))
					}, a.jMaskGlobals.keyStrokeCompensation);
					c.val(e);
					c.setCaret(h);
					return c.callbacks(d)
				}
			}, getMasked: function (a, b) {
				var h = [], f = void 0 === b ? c.val() : b + "", g = 0, k = d.length, n = 0, p = f.length, m = 1, r = "push",
					u = -1, w = 0;
				b = [];
				if (e.reverse) {
					r = "unshift";
					m = -1;
					var x = 0;
					g = k - 1;
					n = p - 1;
					var A = function () {
						return -1 <
							g && -1 < n
					}
				} else x = k - 1, A = function () {
					return g < k && n < p
				};
				for (var z; A();) {
					var y = d.charAt(g), v = f.charAt(n), q = l.translation[y];
					if (q) v.match(q.pattern) ? (h[r](v), q.recursive && (-1 === u ? u = g : g === x && g !== u && (g = u - m), x === u && (g -= m)), g += m) : v === z ? (w--, z = void 0) : q.optional ? (g += m, n -= m) : q.fallback ? (h[r](q.fallback), g += m, n -= m) : c.invalid.push({
						p: n,
						v: v,
						e: q.pattern
					}), n += m; else {
						if (!a) h[r](y);
						v === y ? (b.push(n), n += m) : (z = y, b.push(n + w), w++);
						g += m
					}
				}
				a = d.charAt(x);
				k !== p + 1 || l.translation[a] || h.push(a);
				h = h.join("");
				c.mapMaskdigitPositions(h,
					b, p);
				return h
			}, mapMaskdigitPositions: function (a, b, d) {
				a = e.reverse ? a.length - d : 0;
				c.maskDigitPosMap = {};
				for (d = 0; d < b.length; d++) c.maskDigitPosMap[b[d] + a] = 1
			}, callbacks: function (a) {
				var g = c.val(), h = g !== f, k = [g, a, b, e], l = function (a, b, c) {
					"function" === typeof e[a] && b && e[a].apply(this, c)
				};
				l("onChange", !0 === h, k);
				l("onKeyPress", !0 === h, k);
				l("onComplete", g.length === d.length, k);
				l("onInvalid", 0 < c.invalid.length, [g, a, b, c.invalid, e])
			}
		};
		b = a(b);
		var l = this, f = c.val(), k;
		d = "function" === typeof d ? d(c.val(), void 0, b, e) : d;
		l.mask =
			d;
		l.options = e;
		l.remove = function () {
			var a = c.getCaret();
			l.options.placeholder && b.removeAttr("placeholder");
			b.data("mask-maxlength") && b.removeAttr("maxlength");
			c.destroyEvents();
			c.val(l.getCleanVal());
			c.setCaret(a);
			return b
		};
		l.getCleanVal = function () {
			return c.getMasked(!0)
		};
		l.getMaskedVal = function (a) {
			return c.getMasked(!1, a)
		};
		l.init = function (g) {
			g = g || !1;
			e = e || {};
			l.clearIfNotMatch = a.jMaskGlobals.clearIfNotMatch;
			l.byPassKeys = a.jMaskGlobals.byPassKeys;
			l.translation = a.extend({}, a.jMaskGlobals.translation, e.translation);
			l = a.extend(!0, {}, l, e);
			k = c.getRegexMask();
			if (g) c.events(), c.val(c.getMasked()); else {
				e.placeholder && b.attr("placeholder", e.placeholder);
				b.data("mask") && b.attr("autocomplete", "off");
				g = 0;
				for (var f = !0; g < d.length; g++) {
					var h = l.translation[d.charAt(g)];
					if (h && h.recursive) {
						f = !1;
						break
					}
				}
				f && b.attr("maxlength", d.length).data("mask-maxlength", !0);
				c.destroyEvents();
				c.events();
				g = c.getCaret();
				c.val(c.getMasked());
				c.setCaret(g)
			}
		};
		l.init(!b.is("input"))
	};
	a.maskWatchers = {};
	var f = function () {
		var b = a(this), d = {}, e = b.attr("data-mask");
		b.attr("data-mask-reverse") && (d.reverse = !0);
		b.attr("data-mask-clearifnotmatch") && (d.clearIfNotMatch = !0);
		"true" === b.attr("data-mask-selectonfocus") && (d.selectOnFocus = !0);
		if (p(b, e, d)) return b.data("mask", new n(this, e, d))
	}, p = function (b, d, e) {
		e = e || {};
		var c = a(b).data("mask"), f = JSON.stringify;
		b = a(b).val() || a(b).text();
		try {
			return "function" === typeof d && (d = d(b)), "object" !== typeof c || f(c.options) !== f(e) || c.mask !== d
		} catch (w) {
		}
	}, k = function (a) {
		var b = document.createElement("div");
		a = "on" + a;
		var e = a in b;
		e || (b.setAttribute(a,
			"return;"), e = "function" === typeof b[a]);
		return e
	};
	a.fn.mask = function (b, d) {
		d = d || {};
		var e = this.selector, c = a.jMaskGlobals, f = c.watchInterval;
		c = d.watchInputs || c.watchInputs;
		var k = function () {
			if (p(this, b, d)) return a(this).data("mask", new n(this, b, d))
		};
		a(this).each(k);
		e && "" !== e && c && (clearInterval(a.maskWatchers[e]), a.maskWatchers[e] = setInterval(function () {
			a(document).find(e).each(k)
		}, f));
		return this
	};
	a.fn.masked = function (a) {
		return this.data("mask").getMaskedVal(a)
	};
	a.fn.unmask = function () {
		clearInterval(a.maskWatchers[this.selector]);
		delete a.maskWatchers[this.selector];
		return this.each(function () {
			var b = a(this).data("mask");
			b && b.remove().removeData("mask")
		})
	};
	a.fn.cleanVal = function () {
		return this.data("mask").getCleanVal()
	};
	a.applyDataMask = function (b) {
		b = b || a.jMaskGlobals.maskElements;
		(b instanceof a ? b : a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(f)
	};
	k = {
		maskElements: "input,td,span,div",
		dataMaskAttr: "*[data-mask]",
		dataMask: !0,
		watchInterval: 300,
		watchInputs: !0,
		keyStrokeCompensation: 10,
		useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) &&
			k("input"),
		watchDataMask: !1,
		byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
		translation: {
			0: {pattern: /\d/},
			9: {pattern: /\d/, optional: !0},
			"#": {pattern: /\d/, recursive: !0},
			A: {pattern: /[a-zA-Z0-9]/},
			S: {pattern: /[a-zA-Z]/}
		}
	};
	a.jMaskGlobals = a.jMaskGlobals || {};
	k = a.jMaskGlobals = a.extend(!0, {}, k, a.jMaskGlobals);
	k.dataMask && a.applyDataMask();
	setInterval(function () {
		a.jMaskGlobals.watchDataMask && a.applyDataMask()
	}, k.watchInterval)
}, window.jQuery, window.Zepto);


// wNumb

!function (e) {
	"function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : window.wNumb = e()
}(function () {
	"use strict";
	var o = ["decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];

	function w(e) {
		return e.split("").reverse().join("")
	}

	function h(e, t) {
		return e.substring(0, t.length) === t
	}

	function f(e, t, n) {
		if ((e[t] || e[n]) && e[t] === e[n]) throw new Error(t)
	}

	function x(e) {
		return "number" == typeof e && isFinite(e)
	}

	function n(e, t, n, r, i, o, f, u, s, c, a, p) {
		var d, l, h, g = p, v = "", m = "";
		return o && (p = o(p)), !!x(p) && (!1 !== e && 0 === parseFloat(p.toFixed(e)) && (p = 0), p < 0 && (d = !0, p = Math.abs(p)), !1 !== e && (p = function (e, t) {
			return e = e.toString().split("e"), (+((e = (e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t)))).toString().split("e"))[0] + "e" + (e[1] ? e[1] - t : -t))).toFixed(t)
		}(p, e)), -1 !== (p = p.toString()).indexOf(".") ? (h = (l = p.split("."))[0], n && (v = n + l[1])) : h = p, t && (h = w((h = w(h).match(/.{1,3}/g)).join(w(t)))), d && u && (m += u), r && (m += r), d && s && (m += s), m += h, m += v, i && (m += i), c && (m = c(m, g)), m)
	}

	function r(e, t, n, r, i, o, f, u, s, c, a, p) {
		var d, l = "";
		return a && (p = a(p)), !(!p || "string" != typeof p) && (u && h(p, u) && (p = p.replace(u, ""), d = !0), r && h(p, r) && (p = p.replace(r, "")), s && h(p, s) && (p = p.replace(s, ""), d = !0), i && function (e, t) {
			return e.slice(-1 * t.length) === t
		}(p, i) && (p = p.slice(0, -1 * i.length)), t && (p = p.split(t).join("")), n && (p = p.replace(n, ".")), d && (l += "-"), "" !== (l = (l += p).replace(/[^0-9\.\-.]/g, "")) && (l = Number(l), f && (l = f(l)), !!x(l) && l))
	}

	function i(e, t, n) {
		var r, i = [];
		for (r = 0; r < o.length; r += 1) i.push(e[o[r]]);
		return i.push(n), t.apply("", i)
	}

	return function e(t) {
		if (!(this instanceof e)) return new e(t);
		"object" == typeof t && (t = function (e) {
			var t, n, r, i = {};
			for (void 0 === e.suffix && (e.suffix = e.postfix), t = 0; t < o.length; t += 1) if (void 0 === (r = e[n = o[t]])) "negative" !== n || i.negativeBefore ? "mark" === n && "." !== i.thousand ? i[n] = "." : i[n] = !1 : i[n] = "-"; else if ("decimals" === n) {
				if (!(0 <= r && r < 8)) throw new Error(n);
				i[n] = r
			} else if ("encoder" === n || "decoder" === n || "edit" === n || "undo" === n) {
				if ("function" != typeof r) throw new Error(n);
				i[n] = r
			} else {
				if ("string" != typeof r) throw new Error(n);
				i[n] = r
			}
			return f(i, "mark", "thousand"), f(i, "prefix", "negative"), f(i, "prefix", "negativeBefore"), i
		}(t), this.to = function (e) {
			return i(t, n, e)
		}, this.from = function (e) {
			return i(t, r, e)
		})
	}
});

// filter catalog


if ($('.catalog').length > 0) {
	const selectSingle = document.querySelector(".__select");
	const selectSingle_title = selectSingle.querySelector(".__select__title");
	const selectSingle_labels = selectSingle.querySelectorAll(".__select__label");

	// Toggle menu
	selectSingle_title.addEventListener("click", () => {
		$(".control-label").removeClass("active");
		$(".slider__wrape").removeClass("active");
		if ("active" === selectSingle.getAttribute("data-state")) {
			selectSingle.setAttribute("data-state", "");
		} else {
			selectSingle.setAttribute("data-state", "active");
		}
	});

	// Close when click to option
	for (let i = 0; i < selectSingle_labels.length; i++) {
		selectSingle_labels[i].addEventListener("click", (evt) => {
			selectSingle_title.textContent = evt.target.textContent;
			selectSingle.setAttribute("data-state", "");
		});
	}

	$(".control-label").click(function () {
		$(".control-label").toggleClass("active");
		$(".slider__wrape").toggleClass("active");
		selectSingle.setAttribute("data-state", "");
	});

	let slider = $("#slider-range ");
	let sliderMobile = $("#slider-range-mobile");

	noUiSlider.create(slider[0], {
		start: [0, 1000],
		tooltips: true,
		connect: true,
		range: {
			min: [0],
			max: [1000],
		},
		format: wNumb({
			decimals: 0,
			to: function (value) {
				return Math.round(value) + "";
			},
			from: function (value) {
				return Math.round(value) + "";
			},
		}),
	});
	noUiSlider.create(sliderMobile[0], {
		start: [0, 1000],
		tooltips: true,
		connect: true,
		range: {
			min: [0],
			max: [1000],
		},
		format: wNumb({
			decimals: 0,
			to: function (value) {
				return Math.round(value) + "";
			},
			from: function (value) {
				return Math.round(value) + "";
			},
		}),
	});

	$(".filter__cancel").click(function () {
		$(".control-label").removeClass("active");
		$(".slider__wrape").removeClass("active");
		selectSingle.setAttribute("data-state", "");
		selectSingle_title.textContent =
			selectSingle_title.getAttribute("data-default");
		slider[0].noUiSlider.reset();
	});

	$(".catalog__filter-open").click(function () {
		$("header").addClass("index");
		$(".catalog__filter-menu").addClass("catalog__filter-menu-show");
	});
	$("#filterClose").click(function (event) {
		event.preventDefault();
		$("header").removeClass("index");
		$(".catalog__filter-menu").removeClass("catalog__filter-menu-show");
	});

	$(".catalog__filter-banks li").click(function () {
		$(".catalog__filter-banks li").removeClass("catalog__filter-active");
		$(this).addClass("catalog__filter-active");
	});
	$(".catalog__filter-category li").click(function () {
		$(".catalog__filter-category li").removeClass("catalog__filter-active");
		$(this).addClass("catalog__filter-active");
	});
}

// slick-slider
if ($(".slider-for").length > 0) {
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		// asNavFor: '.slider-nav'
	});
}

if ($(".slider-nav").length > 0) {
	$('.slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true
	});
}
if ($(".product__carousel").length > 0) {
	$(".product__carousel").owlCarousel({
		loop: true,
		responsiveClass: true,
		dots: true,
		navText: "",
		items: 1,
	});
}
if ($('#input')) {
	$('#input').mask('999.999.999.999.00₽', {reverse: true})
}

let pageHref = window.location.href;


function copytext(text) {
	let $tmp = $("<textarea>");
	$("body").append($tmp);
	$tmp.val(text).select();
	document.execCommand("copy");
	$tmp.remove();
}
$('[data-share-instagramm]').click(function () {
	copytext(`${pageHref}`)
})

$('[data-share-vk]').attr('href', `https://vkontakte.ru/share.php?url=${pageHref}`)
$('[data-share-facebook]').attr('href', `https://www.facebook.com/sharer.php?u=${pageHref}`)
$('[data-share-twitter]').attr('href', `https://twitter.com/intent/tweet?text=title.description.${pageHref}`)
