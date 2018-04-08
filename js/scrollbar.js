$(document).ready(function() {
	$('#fullpage').fullpage({
    scrollBar: false,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    loopBottom: true,
    loopTop: true
  });
  alert("HTML Class List: " + document.documentElement.className.split(' '))
});
