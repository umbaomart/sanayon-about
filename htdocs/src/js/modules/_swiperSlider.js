export const swiperSlider = () => {
  let swiperClass = document.querySelectorAll('.swiper-container');

  if (swiperClass.length > 0) {
    const slider01 = new Swiper('.swiper-container', {
      direction: 'horizontal', // スライド方向
      autoHeight: false, // 高さがスライドに合わせて変わる
      nested: false, // スライダーをネストできる
      grabCursor: false, // スライダーを掴むカーソル表示
      watchOverflow: true, // スライドが1枚しかなかったらスライダー機能をなくす
      freeMode: false, //スライドが停止しなくなる
      autoplay: {
        delay: 4000, // 自動スライド・1スライド滞在時間
        disableOnInteraction: false, // ユーザーがスライド操作した後もautoplay続行
        waitForTransition: true, // スライドの移動を待ったあとに自動再生する
      },
      speed: 2000, // スライド切替スピード
      loop: false, // ループ(クローンスライドが作られる)
      spaceBetween: 0, // スライド間のmarginは0px
      slidesPerView: 1, // 1スライド表示
      slidesPerGroup: 1, // 1スライドで1グループ
      centeredSlides: false, // スライドが中央からスタートする
      observer: true, // 初期状態でスライダーが非表示でも動くようにする
      observeParents: true, // 初期状態でスライダーが非表示でも動くようにする
      preloadImages: false, // 画像の事前読み込みを禁止
      lazy: true, // 画像の読み込み遅延
      effect: 'slide', // エフェクト
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: '.swiper-pagination', // ページャー
        clickable: true, // ページャークリッカブル
      },
      navigation: {
        prevEl: '.swiper-button-prev', // 前へボタン
        nextEl: '.swiper-button-next', // 次へボタン
      },
      breakpoints: {
        1000: {},
        767: {},
      },
    });
  }
};
