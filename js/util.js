$('.skill-logo').hover(
  function() {
    $(this).animate({ opacity: .4, width: '85%' }, 300);
  },
  function() {
    $(this).animate({ opacity: 1, width: '75%' }, 300);
  }
);
