export const checkView = () => {
  let target = $('.js-checkView');
  let viewport = $(window).scrollTop() + $(window).height();

  $.each(target, function () {
    let el = $(this);
    let el_position = el.offset().top;

    viewport > el_position ? el.addClass('is-active') : el.removeClass('is-active');
  });
};
