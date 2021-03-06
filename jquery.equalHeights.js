/*
 * jquery-equalheights
 * https://github.com/cviebrock/jquery-equalheights
 * Colin Viebrock <colin@viebrock.ca>
 */

(function($) {
	$.fn.equalHeights = function(options) {

		var defaults = {
			minHeight : 0,
			maxHeight : false,
			overflow  : 'auto',
			extra     : 0
		};

		var options = $.extend(defaults, options);


		var tallest = (options.minHeight) ? options.minHeight : 0;
		this.each(function() {
			var h = $(this).height();
			if( h > tallest) {
				tallest = h;
			}
		});
		if((options.maxHeight) && tallest > options.maxHeight) {
			tallest = options.maxHeight;
		}
		tallest += options.extra;
		return this.each(function() {
			$(this).height(tallest).css('overflow',options.overflow);
		});
	}
})(jQuery);
