export const smoothScroll = () => {
  $('a[href^="#"]').on("click", e => {
    let speed = 600;
    let href = $(e.currentTarget).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body, html").delay(200).animate({ scrollTop: position }, speed, "swing");
    return false;
  });
};