$(document).ready(function() {
	new WOW().init();
 	$(".first_f").click(function() {
       	$(".first_floor").slideToggle(); 
	});
	$(".second_f").click(function() {
       	$(".second_floor").slideToggle(); 
	});
	$(".header_f").click(function() {
       	$(".header").slideToggle(); 
	});
	$(".footer_f").click(function() {
       	$(".footer").slideToggle(); 
	});
	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$('.scroll-adv').click(function() {
		$('html, body').animate({
    	scrollTop: $('.advantages').offset().top}, 1500);
	});
	$('.scroll-spec').click(function() {
		$('html, body').animate({
    	scrollTop: $('.specifications').offset().top}, 1500);
	});
	$('.scroll-contacts').click(function() {
		$('html, body').animate({
    	scrollTop: $('.contacts').offset().top}, 1500);
	});

	$(".fancybox").fancybox({
		padding: 0
	});

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
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	$(".contacts_callback").click(function() {
			$.ajax({
				type: "GET",
				url: "mail_contacts.php",
				data: $("#feed").serialize()
			}).done(function() {
				alert("Спасибо за ваше сообщение!");
		});
		return false;
	});
});