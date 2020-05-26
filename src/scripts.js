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

  var toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  var currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === darkmode_class) {
      toggleSwitch.checked = true;
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', darkmode_class);
      localStorage.setItem('theme', darkmode_class);
      body.addClass(darkmode_class);
      picture.attr('src', darkmode_image);
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', '');
      body.removeClass(darkmode_class);
      picture.attr('src', regular_image);
    }    
  }

  toggleSwitch.addEventListener('change', switchTheme, false);

})(jQuery);
