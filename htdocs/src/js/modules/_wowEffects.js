export const wowEffects = () => {
  const ua = window.navigator.userAgent;
  const wowInit = () => {
    let wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 100,
      mobile: true,
      live: true,
      callback: function (box) {},
      scrollContainer: null,
    });
    wow.init();
  };

  // IE Browser
  if (ua.indexOf('Trident') != -1 || ua.indexOf('MSIE') != -1) {
    $(window).on('load', (e) => {
      wowInit();
    });
  } else {
    wowInit();
  }
};
