export const accordion = () => {
  if ($('.accordion').length) {
    let accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      let trigger = this.el.find('.accordion__item__head');

      trigger.on(
        'click',
        {
          el: this.el,
          multiple: this.multiple,
        },
        this.dropdown,
      );
    };

    accordion.prototype.dropdown = function (e) {
      let $el = e.data.el;
      ($this = $(this)), ($acc_content = $this.parent('.accordion__item').find('.accordion__item__body'));

      $acc_content.slideToggle(); // Show content
      $this.parents('.accordion__item').toggleClass('is-open'); // for custom css display

      !e.data.multiple
        ? $el
            .find('.accordion__item__body')
            .not($acc_content)
            .slideUp()
            .parents('.accordion__item')
            .removeClass('is-open')
        : '';
    };

    let accordion__field = new accordion($('.accordion'), true);
    // Set TRUE - allows to open multiple accordion
    // Set FALSE - opens only one accordion at a time
  }
};
