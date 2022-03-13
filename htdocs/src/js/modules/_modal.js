export const modal = () => {
  let modal = $('.modal');
  let modal_box = $('.modal__box');
  let open_btn = $('.js-openModal');
  let close_btn = $('.modal__box__closeButton');

  open_btn.click(() => {
    modal.addClass('is-open');
    setTimeout(() => {
      modal_box.addClass('is-active');
    }, 300);
  });

  close_btn.click(() => {
    modal_box.removeClass('is-active');
    setTimeout(() => {
      modal.removeClass('is-open');
    }, 600);
  });
};
