// alternative to DOMContentLoaded
document.onreadystatechange = function() {
	if (document.readyState == 'complete') {

		// tl
		// 	.to('.quick-action', { width: 50, height: 50, duration: 1.25 })
		// 	.to('.quick-action__block', { opacity: 0, duration: 0.75 }, '<')
		// 	.to('.quick-action', { borderRadius: '50%' })
		// 	.to('.quick-action', { margin: '10px' }, '<');

		gsap.to('#moving-images-1', {
			yPercent: "-=100",
			ease: "none",
			scrollTrigger: {
			  trigger: "#moving-images-section",
			  start: "top center",
			  end: "+=150%",
			  scrub: 1,
			},
			duration: 1,
		})
		
		gsap.to('#moving-images-2', {
			yPercent: "+=100",
			ease: "none",
			scrollTrigger: {
				trigger: "#moving-images-section",
				start: "top center",
				end: "bottom top",
				scrub: 1
			},
			duration: 1,
		  })
	}
};
