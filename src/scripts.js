(function($) {

  var regular_image = '/images/minnur.jpg';
  var darkmode_image = '/images/minnur-darkmode.jpg';
  var picture = $('.circular--square.picture');
  var body = $('body');
  var color_scheme = '(prefers-color-scheme: dark)';
  var darkmode_class = 'darkmode';

  var toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  if (window.matchMedia && window.matchMedia(color_scheme).matches) {
    body.addClass(darkmode_class);
    picture.attr('src', darkmode_image);
    toggleSwitch.checked = true;
  }

  window.matchMedia(color_scheme).addListener(function(e) {
    if (e.matches) {
      body.addClass(darkmode_class);
      picture.attr('src', darkmode_image);
      toggleSwitch.checked = true;
    }
    else {
      body.removeClass(darkmode_class);
      picture.attr('src', regular_image);
      toggleSwitch.checked = false;
    }
  });

  function switchTheme(e) {
    if (e.target.checked) {
      body.addClass(darkmode_class);
      picture.attr('src', darkmode_image);
    }
    else {
      body.removeClass(darkmode_class);
      picture.attr('src', regular_image);
    }    
  }

  toggleSwitch.addEventListener('change', switchTheme);

  $(document).ready(function() {
    $('.tooltip').tooltipster({theme: 'tooltipster-minnur'});
    if (typeof ga === 'function') {
      $('a').on('click', function(e) {
        ga('send', 'event', 'Link', 'click', $(this).attr('href'));
      });
    }
  });

})(jQuery);
