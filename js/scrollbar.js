$(document).ready(function() {
	$('#fullpage').fullpage({
    menu: '#menu',
    lockAnchors: false,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'lastPage'],
    loopBottom: true,
    loopTop: true,
		fitToSection: false,
		scrollOverflow: true
  });
});
