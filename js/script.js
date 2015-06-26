//Script file that allows slow scroll for nav bar links

$(document).ready(function(){

	//Variables link to each nav link id
	var contact = $('#nav1');
	var education = $("#nav2");
	var experience = $('#nav3');
	var qualifications = $('#nav4');

	//Slow scrolls to the name and pic section
	contact.click(function() {
	  $("html, body").animate({ scrollTop: $('#name-and-pic').offset().top }, "slow");
	  return false;
	});

	//Slow scrolls to the education section
	education.click(function() {
	  $("html, body").animate({ scrollTop: $('#education').offset().top }, "slow");
	  return false;
	});

	//Slow scrolls to the experience section
	experience.click(function() {
	  $("html, body").animate({ scrollTop: $('#experience').offset().top }, "slow");
	  return false;
	});

	//Slow scrolls to the qualifications section
	qualifications.click(function() {
	  $("html, body").animate({ scrollTop: $('#qualifications').offset().top }, "slow");
	  return false;
	});
});