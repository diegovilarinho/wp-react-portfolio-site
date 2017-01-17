"use strict";

let ishMacy;
let ishMacyActive = false;
let ishBlogAnimation;

let organizeBlogColumns = function() {

	var windowWidth = window.innerWidth || document.body.clientWidth; // Including scrollbar width

	if ( 768 <= windowWidth ) {
		if ( !ishMacyActive ) {

			// Activate Masonry layout
			Macy.init({
				container: '.ish-blog-masonry.ish-2col',
				columns: 2
			});

			ishMacyActive = true;
			if (blog.hasClass('ish-scroll-anim')) {
				// Activate Scrolling Animation
				ishBlogAnimation = new AnimOnScroll({
					container_selector: '.ish-blog-masonry.ish-scroll-anim.ish-2col',
					items_selector: ' > .ish-item',
					minDuration: 0.4,
					maxDuration: 0.7,
					viewportFactor: 0,
					animate_odd_items: true,
					animate_even_items: true,
					animate_captions: false,
					even_items_animation_speed: 0.85
				});
			}
		}
	} else {
		if ( ishMacyActive ) {
			Macy.remove();
			ishBlogAnimation._remove();
			ishMacyActive = false;
		}
	}

};

export default organizeBlogColumns;