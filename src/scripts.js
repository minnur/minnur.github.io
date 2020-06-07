(function($) {

  var regular_image = '/images/minnur.jpg';
  var darkmode_image = '/images/minnur-darkmode.jpg';
  var picture = $('.circular--square.picture');
  var body = $('body');
  var color_scheme = '(prefers-color-scheme: dark)';
  var darkmode_class = 'darkmode';

  var darkModeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  if (window.matchMedia && window.matchMedia(color_scheme).matches) {
    body.addClass(darkmode_class);
    picture.attr('src', darkmode_image);
    darkModeSwitch.checked = true;
  }

  window.matchMedia(color_scheme).addListener(function(e) {
    if (e.matches) {
      body.addClass(darkmode_class);
      picture.attr('src', darkmode_image);
      darkModeSwitch.checked = true;
    }
    else {
      body.removeClass(darkmode_class);
      picture.attr('src', regular_image);
      darkModeSwitch.checked = false;
    }
  });

  function switchTheme(e) {
    if (e.target.checked) {
      body.addClass(darkmode_class);
      picture.attr('src', darkmode_image);
      if (typeof ga === 'function') {
        ga('send', 'event', 'Toggle', 'click', darkmode_image);
      }
    }
    else {
      body.removeClass(darkmode_class);
      picture.attr('src', regular_image);
      if (typeof ga === 'function') {
        ga('send', 'event', 'Toggle', 'click', 'light');
      }
    }    
  }

  darkModeSwitch.addEventListener('change', switchTheme);

  $(document).ready(function() {
    $('.tooltip').tooltipster({theme: 'tooltipster-minnur'});
    if (typeof ga === 'function') {
      $('a').on('click', function(e) {
        ga('send', 'event', 'Link', 'click', $(this).attr('href'));
      });
    }
  });

})(jQuery);
