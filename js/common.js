$(document).ready(function() {
	$("h2").animated("flipInX", "flipOutX");
	$("h3").animated("flipInX", "flipOutX");
	$("h4").animated("flipInX", "flipOutX");
	$("h5").animated("flipInX", "flipOutX");
	$(".merop").animated("flipInX", "flipOutX");
	$(".sobitiya").animated("pulse");
	$(".wordLine h1").animated("flipInX", "flipOutX");
	$(".wordLine").click(function(){
	$(".sobitiya").animated("bounce", "bounceOutDown");
	});
	// Инициализация верхнего слайдера

	$('.navigate1').stickMe({
		topOffset: 480,
		shadow: true,
		animate: true,
		transitionStyle: 'slide',
		transitionDuration: 800
	});

	$(".navigation .mnu").mPageScroll2id({
		offset : 50
	});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	//$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	//$(".block").waypoint(function(direction) {
	//	if (direction === "down") {
	//		$(".class").addClass("active");
	//	} else if (direction === "up") {
	//		$(".class").removeClass("deactive");
	//	};
	//}, {offset: 100});




	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});
