
/*==================================================
  THUMBNAIL BOX FLOAT PRICE
===================================================*/

vtexjs.catalog.getCurrentProductWithVariations().done(function (product) {
	var thumbFloat = product.skus[0].image;
	$(".pic-float").attr("src", thumbFloat);
});

if ($(".notifyme").css("display") == "block") {
	$(".float-price").remove();
}

$(window).scroll(function () {
	if ($(window).width() < 768) {
		if ($(window).scrollTop() > 1200) {
			$(".float-price").addClass("show");
		} else {
			$(".float-price").removeClass("show");
		}
	} else {
		if ($(window).scrollTop() > 400) {
			$(".float-price").addClass("show");
		} else {
			$(".float-price").removeClass("show");
		}
	}
});