// ScrollReveal().reveal('.main-line');
// ScrollReveal().reveal('.middle-container', { delay: 600 });
//
// ScrollReveal().reveal('.bottom-content', {delay:200 });

     // top-container-slide
$(".top-next-btn").click (function() {
   $(".top-container").animate({opacity: 0.2}).slideUp(); //.slideDown().animate({opacity: 0.5})
});

    // middle-containerslide

		$(".main-btn").click (function() {
		   $(".middle-container").animate({opacity: 0.2}).slideUp(); //.slideDown().animate({opacity: 0.5})
		});

		$(".middle-previous-btn").click (function() {
		   $(".top-container").animate({opacity: 1}).slideDown(); //.slideDown().animate({opacity: 0.5})
		});

		$(".bottom-previous-btn").click (function() {
			 $(".middle-container").animate({opacity: 1}).slideDown(); //.slideDown().animate({opacity: 0.5})
		});

$(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			// animate to second panel
			.to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
			.to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
			.to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
			// animate to third panel
			.to("#slideContainer", 0.5, {z: -150, delay: 1})
			.to("#slideContainer", 1,   {x: "-50%"})
			.to("#slideContainer", 0.5, {z: 0})
			// animate to forth panel
			.to("#slideContainer", 0.5, {z: -150, delay: 1})
			.to("#slideContainer", 1,   {x: "-75%"})
			.to("#slideContainer", 0.5, {z: 0});

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "500%"
			})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});
