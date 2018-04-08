$(document).ready(function() {
  document.documentElement.classList.add('fp-enabled');
  document.body.classList.add('fp-responsive');
	$('#fullpage').fullpage({
    scrollBar: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    loopBottom: true,
    loopTop: true
  });
  alert("HTML Class List: " + document.documentElement.className.split(' '));
  alert("Body Class List: " + document.body.className.split(' '))
});
