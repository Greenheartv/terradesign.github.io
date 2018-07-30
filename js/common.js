$(document).ready(function() {

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
		$(".top_wrapper").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	$(".top_menu ul a").mPageScroll2id({
		offset:40
	});

	 $(function () { $("input,textarea").not("[type=submit]").jqBootstrapValidation(); } );

});
$(window).on('load', function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".column").animated("fadeInLeft", "fadeOutLeft");
	$(".column1").animated("fadeInRight", "fadeOutRight");

	$(".right").animated("fadeInLeft", "fadeOutLeft");
	$(".left").animated("fadeInRight", "fadeOutRight");

	$(".imgl").animated("fadeInLeft", "fadeOutLeft");
	$(".imgc").animated("flipInY", "flipOutY");
	$(".imgr").animated("fadeInRight", "fadeOutRight");

	
});
$(".s_info").waypoint(function(dir) {
	var a = "fadeIn";
	var b = "fadeOut";
	$(".d_menu").addClass("animated");
	if (dir === "down") {
		$(".d_menu").removeClass("hidden").removeClass(b).addClass(a);
	} else {
		$(".d_menu").removeClass(a).addClass(b);
	};
		}, {
			offset: "146%"
			});