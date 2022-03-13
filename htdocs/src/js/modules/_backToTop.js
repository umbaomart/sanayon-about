export const backToTop = () => {
  $('.js-toTop').click(function (e) {
    e.preventDefault();
    $('html, body').delay(300).animate({ scrollTop: 0 }, 800);
  });
};
