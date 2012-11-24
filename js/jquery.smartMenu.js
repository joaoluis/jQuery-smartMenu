/*
 * jQuery smartMenu v1.0
 * http://www.joaoluis.net
 *
 * Copyright 2012, João Luís
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function($) {
	$.fn.smartMenu = function(options) {
	    
		var defaults = {
			'display': 'vertical',
			'theme'  : 'default'
		};
		
		var settings = $.extend(defaults, options);
		var menu = $(this);
		menu.addClass('smartMenu');
     	menu.addClass(settings.theme);

		if(settings.display == "horizontal") {
			menu.children('li').css('display','inline');
			menu.children('li').addClass('arrow-right');
		}	

		/*
         * Events
         */

      	$(".smartMenu li").mouseenter(function() {
        	var li = $(this);
        	if(li.children('ul').length > 0) {
        		var position = $(this).position();
          		over(li, position);
        	}
      	});

      	$(".smartMenu li").mouseleave(function() {
        	var li = $(this);
        	if(li.children('ul').length > 0) {
          		var position = $(this).position();
          		out(li ,position);
        	}
      	});
      
      	/*
       	 * Methods
         */

      	var show = function(li) {
        	li.children('a').first().addClass('active');        
        	li.children('ul').first().removeClass('hide');
        	li.children('ul').first().addClass('show');
      	};

      	var hide = function(li) {
        	li.children('ul').first().removeClass('show');
        	li.children('ul').first().addClass('hide');
        	li.children('a').first().removeClass('active'); 
      	};

		var over = function(li, position) {
			var liWidth = li.width();
			var left = position.left;
          	var top = position.top;
          	show(li);
			if(li.css('display') == "inline") {
				li.children('ul').first().css('left', left);
			}
			else {
				li.children('ul').first().css('left', left + liWidth).css('top', top);
			}
		};

		var out = function(li) {
			hide(li);
		};

  	};
})(jQuery);