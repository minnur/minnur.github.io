(function($) {

  var regular_image = '/images/minnur.jpg';
  var darkmode_image = '/images/minnur-darkmode.jpg';
  var picture = $('.circular--square.picture');
  var body = $('body');
  var color_scheme = '(prefers-color-scheme: dark)';
  var darkmode_class = 'darkmode';

  $(document).ready(function() {

    $('.tooltip').tooltipster({theme: 'tooltipster-minnur'});
    if (typeof ga === 'function') {
      $('a').on('click', function(e) {
        ga('send', 'event', 'Link', 'click', $(this).attr('href'));
      });
    }

  });

  if (window.matchMedia && window.matchMedia(color_scheme).matches) {
    body.addClass(darkmode_class);
    picture.attr('src', darkmode_image);
  }

  window.matchMedia(color_scheme).addEventListener('change', function(e) {
    if (e.matches) {
      body.addClass(darkmode_class);
      picture.attr('src', darkmode_image);
    }
    else {
      body.removeClass(darkmode_class);
      picture.attr('src', regular_image);
    }
  });

})(jQuery);
