export const btnClickFunc = () => {
  const $btns = $('.js-btn');

  $btns.on('click', e => {
    const btnTargetData = $(e.currentTarget).attr('data-btn');
    const btnAnimationData = $(e.currentTarget).attr('data-animation');
    const target = $(`[data-target = "${btnTargetData}"]`);
    const btnTargetGroupData = $(e.currentTarget).attr('data-btnGroup');
    const $sameBtns = $(`[data-btnGroup = "${btnTargetGroupData}"]`);
    const $sameTargets = $(`[data-targetGroup = "${btnTargetGroupData}"]`);

    if (btnAnimationData == 'slide') {
      $(e.currentTarget).toggleClass('is-active');
      target.slideToggle(300);
    } else if (btnAnimationData == 'class') {
      $(e.currentTarget).toggleClass('is-active');
      target.toggleClass('is-active');
    } else if (btnAnimationData == 'commonFade') {
      $sameBtns.toggleClass('is-active');
      target.fadeToggle(300);
    } else if (btnAnimationData == 'allClass') {
      $(e.currentTarget).toggleClass('is-active');
      $sameTargets.addClass('is-active');
    } else if (btnAnimationData == 'tab') {
      $sameBtns.not($(e.currentTarget)).removeClass('is-active');
      $(e.currentTarget).addClass('is-active');
      $sameTargets.removeClass('is-active');
      target.addClass('is-active');
    } else if (btnAnimationData == 'pageTop') {
      $('body, html').animate({
        scrollTop: 0
      }, 700);
      return false;
    } else {
      console.log($(e.currentTarget));
      $(e.currentTarget).toggleClass('is-active');
    }
  });
};