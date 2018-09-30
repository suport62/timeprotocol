jQuery(function($) {

    var runAnimations = function() {

        var offset = $(window).scrollTop() + $(window).height(),
            $animation = $('.animation');

        if ($animation.length == 0) {
            $(window).off('scroll', runAnimations);
        }

        $animation.each(function(i) {
            var $animation = $(this);
            if (($animation.offset().top + $animation.height() - 100) < offset) {
                $animation.removeClass('animation').addClass('animate');
            }
        });

    };

    $(window).on('scroll', runAnimations);
    $(window).trigger('scroll');

});

//paralax
window.onload = function () {

	var parallaxBox = document.getElementById('box');
	var

		c3left = document.getElementById('l3').offsetLeft,
		c3top = document.getElementById('l3').offsetTop;
	parallaxBox.onmousemove = function (event) {
		event = event || window.event;
		var x = event.clientX - parallaxBox.offsetLeft,
			y = event.clientY - parallaxBox.offsetTop;

		mouseParallax('l3', c3left, c3top, x, y, 25);

	}

}

function mouseParallax(id, left, top, mouseX, mouseY, speed) {
	var obj = document.getElementById(id);
	var parentObj = obj.parentNode,
		containerWidth = parseInt(parentObj.offsetWidth),
		containerHeight = parseInt(parentObj.offsetHeight);
	obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
	obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
}
