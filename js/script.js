//Script file

$(document).ready(function(){
	var contact = $('#nav1');
	var education = $("#nav2");
	var experience = $('#nav3');
	var qualifications = $('#nav4');

	contact.click(function() {
	  $("html, body").animate({ scrollTop: $('#contact-and-pic').offset().top }, "slow")
	  //return false;
	});

	education.click(function() {
	  $("html, body").animate({ scrollTop: $('#education').offset().top }, "slow")
	  //return false;
	});

	experience.click(function() {
	  $("html, body").animate({ scrollTop: $('#experience').offset().top }, "slow")
	  return false;
	});

	qualifications.click(function() {
	  $("html, body").animate({ scrollTop: $('#qualifications').offset().top }, "slow")
	  //return false;
	});
});