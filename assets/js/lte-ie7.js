/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-droplet' : '&#x21;',
			'icon-picture' : '&#x22;',
			'icon-pictures' : '&#x23;',
			'icon-camera' : '&#x24;',
			'icon-user' : '&#x25;',
			'icon-play' : '&#x26;',
			'icon-tag' : '&#x27;',
			'icon-link' : '&#x28;',
			'icon-cloud' : '&#x29;',
			'icon-checkmark' : '&#x2a;',
			'icon-blocked' : '&#x2b;',
			'icon-cancel' : '&#x2c;',
			'icon-help' : '&#x2d;',
			'icon-cancel-2' : '&#x2e;',
			'icon-minus' : '&#x2f;',
			'icon-plus' : '&#x30;',
			'icon-heart' : '&#x31;',
			'icon-heart-2' : '&#x32;',
			'icon-thumbs-up' : '&#x33;',
			'icon-thumbs-down' : '&#x34;',
			'icon-happy' : '&#x35;',
			'icon-bookmark' : '&#x36;',
			'icon-bookmark-2' : '&#x37;',
			'icon-star' : '&#x38;',
			'icon-star-2' : '&#x39;',
			'icon-star-3' : '&#x3a;',
			'icon-flag' : '&#x3b;',
			'icon-embed' : '&#x3c;',
			'icon-code' : '&#x3d;',
			'icon-facebook' : '&#x3e;',
			'icon-facebook-2' : '&#x3f;',
			'icon-facebook-3' : '&#x40;',
			'icon-instagram' : '&#x41;',
			'icon-twitter' : '&#x42;',
			'icon-twitter-2' : '&#x43;',
			'icon-twitter-3' : '&#x44;',
			'icon-feed' : '&#x45;',
			'icon-feed-2' : '&#x46;',
			'icon-feed-3' : '&#x47;',
			'icon-mail' : '&#x48;',
			'icon-mail-2' : '&#x49;',
			'icon-google' : '&#x4a;',
			'icon-paragraph-justify' : '&#x4b;',
			'icon-paragraph-right' : '&#x4c;',
			'icon-paragraph-center' : '&#x4d;',
			'icon-paragraph-left' : '&#x4e;',
			'icon-google-plus' : '&#x4f;',
			'icon-google-plus-2' : '&#x50;',
			'icon-flickr' : '&#x51;',
			'icon-flickr-2' : '&#x52;',
			'icon-flickr-3' : '&#x53;',
			'icon-vimeo' : '&#x54;',
			'icon-vimeo-2' : '&#x55;',
			'icon-github' : '&#x56;',
			'icon-github-2' : '&#x57;',
			'icon-github-3' : '&#x58;',
			'icon-github-4' : '&#x59;',
			'icon-github-5' : '&#x5a;',
			'icon-github-6' : '&#x5b;',
			'icon-linkedin' : '&#x5c;',
			'icon-linkedin-2' : '&#x5d;',
			'icon-lastfm' : '&#x5e;',
			'icon-lastfm-2' : '&#x5f;',
			'icon-skype' : '&#x60;',
			'icon-gplus' : '&#x61;',
			'icon-arrow-up-alt1' : '&#x62;',
			'icon-arrow-down-alt1' : '&#x63;',
			'icon-arrow-right-alt1' : '&#x64;',
			'icon-arrow-left-alt1' : '&#x65;',
			'icon-cd' : '&#x66;',
			'icon-fire' : '&#x67;',
			'icon-coffee' : '&#x68;',
			'icon-calendar' : '&#x69;',
			'icon-compass' : '&#x6a;',
			'icon-location' : '&#x6b;',
			'icon-comments' : '&#x6c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};