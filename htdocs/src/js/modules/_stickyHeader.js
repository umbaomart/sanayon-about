export const stickyHeader = () => {
  $(window).scrollTop() > 0 ? $('header').addClass('is-sticky') : $('header').removeClass('is-sticky');
  // add the sticky settings thru css
};
