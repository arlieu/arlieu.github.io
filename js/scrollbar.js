$(document).ready(function() {
	$('#fullpage').fullpage({
    menu: '#menu',
    lockAnchors: false,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'lastPage'],
    loopBottom: true,
    loopTop: true,
		verticalCentered: false,
		scrollOverflow: true,
		normalScrollElements: '.modal, .iframe-container, #mynetwork',
		navigation: true,
		navigationToolTips: ['main', 'about', 'work experience', 'projects', 'skills and certificates', 'contact', 'resume']
  });
});
