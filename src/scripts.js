(function($) {

  $(document).ready(function() {

    $('.tooltip').tooltipster({theme: 'tooltipster-minnur'});
    if (typeof ga === 'function') {
      $('a').on('click', function(e) {
        ga('send', 'event', 'Link', 'click', $(this).attr('href'));
      });
    }

  });

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $('body').addClass('darkmode');
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (e.matches) {
      $('body').addClass('darkmode');
    }
    else {
      $('body').removeClass('darkmode');
    }
  });

})(jQuery);
