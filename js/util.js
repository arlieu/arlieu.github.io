$('.skill-logo').hover(
  function() {
    $(this).animate({'width': '85%'}, 1000).fadeTo(1000, .4);
  },
  function() {
    $(this).animate({'width': '75%', }, 1000).fadeTo(1000, 1);
  }
);
