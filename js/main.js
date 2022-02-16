$(document).ready(function () {

  // ************************************************************
  // jQuery Variable
  // ************************************************************
  var $body         = $('body');                      // body block
  var $screen       = $('.screen');                   // screen block
  var $phone        = $('#phone');                    // phone block
  var $pages        = $('.pages');                    // pages block
  var $top          = $('.top');                      // top block
  var $btnbar       = $('.button-bar');               // button bar
  var $switch       = $('#switch');                   // switch bar
  var $switchbtn    = $switch.find('.switch-bar');    // switch button
  var $today        = $('#Today');                    // today block
  var $today_info   = $('#Today').children('.info');  // today info block
  var $tomorrow     = $('#tomorrow');                 // tomorrow block
  var $bottom       = $pages.find('.bottom');         // bottom block
  var $info         = $bottom.find('.info');          // info block
  var $wind         = $('#wind');                     // wind block
  var $humidity     = $('#humidity');                 // humidity block
  var $visible      = $('#visibility');               // visibility block
  var $hour         = $('.hour');                     // hour block
  var $wind_tmr     = $('#wind-tmr');                 // wind tomorrow block
  var $humidity_tmr = $('#humidity-tmr');             // humidity tomorrow block
  var $visible_tmr  = $('#visibility-tmr');           // visibility tomorrow block
  var $tmr_row      = $('.row');                      // row block

  // ************************************************************
  // Colors Variable
  // ************************************************************
  const bg_Nero         = '#1F1F1F';    // Top Background
  const bg_Night_Rider  = '#343434';    // HTML Backgroudn
  const bg_Haiti        = '#29282B';    // Info block Backgroudn
  const bg_Nero16       = '#282828';    // Bottom block Backgroudn
  const bg_Eclipse      = '#3B3B3B';    // Hour block Background
  const echoblue        = '#B4BBD3';    // text color
  const fff             = '#FFFFFF';    // White Color

  // ************************************************************
  // Other Variable
  // ************************************************************
  const e     = 'click';                // Click event
  const l     = 'left';                 // CSS left
  const bgc   = 'background-color';     // CSS bakcgroudn-color
  const bgi   = 'background-image';     // CSS background-image
  const c     = 'color';                // CSS color
  const tf    = 'transform';            // CSS transform
  const ts    = 'transition';           // CSS animation
  const op    = 'opacity';              // CSS opacity
  const dtl   = '.detail';              // detail class

  const shadow      = 'drop-shadow(-10px 0 8px white)';
  const moonshadow  = 'drop-shadow(-15px 8px 6px white)';
  const linearbgi   = 'linear-gradient(to bottom, var(--Purple-Heart) 30%, var(--Medium-Red-Violet))';

  var switchPage = () =>
    $pages.css(l).replace('px', '') == 0 ?
      goTomorrow() : goHome();

  // Go to Tomorrow Page
  var goTomorrow = () => {
    $pages.css(l, '-100%');
    $tmr_row.css(op, '1');
    $tmr_row.css(tf, 'translateY(0)');
    $tmr_row.css(ts, '');
  };

  // Go to Homepage
  var goHome = () => {
    $pages.css(l, '');
    $tmr_row.css(op, '');
    $tmr_row.css(tf, '');
    $tmr_row.css(ts, 'all .1s 1s');
  }

  var changeMode = function () {
    var left = $switchbtn.css(l).replace('px', '') == 0 ?
      'calc(100% - 13px)' : '';

    left == '' ? lightMode() : darkMode();

    $switchbtn.css(l, left);
  };

  var lightMode = function () {
    $body.css(bgc, '');
    $pages.css(bgc, '');
    $screen.css(bgc, '');
    $top.find('h4').css(c, '');
    $btnbar.find('.bar').removeClass('dark-bar');
    $btnbar.find('.arrow-left').removeClass('dark-arrow');
    $switch.css(bgc, '');
    $switch.css(bgi, '');
    $today.css(bgi, '');
    $today.css(bgc, '');
    $tomorrow.css(bgi, '');
    $tomorrow.css(bgc, '');
    $bottom.css(bgc, '');
    $info.css(bgc, '');
    $wind.find(dtl).css(c, '');
    $humidity.find(dtl).css(c, '');
    $visible.find(dtl).css(c, '');
    $hour.css(bgc, '');
    $hour.find('.temp').css(c, '');
    $hour.find('.moon').css('fill', '');
    $hour.find('.moon').css('filter', '');
    $hour.find('.moon-shadow').css('filter', '');
    $wind_tmr.find(dtl).css(c, '');
    $humidity_tmr.find(dtl).css(c, '');
    $visible_tmr.find(dtl).css(c, '');
    $tmr_row.css(c, '');
  };

  var darkMode =  function () {
    $body.css(bgc, bg_Night_Rider);
    $pages.css(bgc, bg_Nero);
    $screen.css(bgc, bg_Nero);
    $top.find('h4').css(c, fff);
    $btnbar.find('.bar').addClass('dark-bar');
    $btnbar.find('.arrow-left').addClass('dark-arrow');
    $switch.css(bgi, linearbgi);
    $switch.css(bgc, 'transparent');
    $today.css(bgi, 'none');
    $today.css(bgc, bg_Nero);
    $tomorrow.css(bgi, 'none');
    $tomorrow.css(bgc, bg_Nero);
    $bottom.css(bgc, bg_Nero16);
    $info.css(bgc, bg_Haiti);
    $wind.find('.detail').css(c, fff);
    $humidity.find('.detail').css(c, fff);
    $visible.find('.detail').css(c, fff);
    $hour.css(bgc, bg_Eclipse);
    $hour.find('.temp').css(c, fff);
    $hour.find('.moon').css('fill', bg_Eclipse);
    $hour.find('.moon').css('filter', moonshadow);
    $hour.find('.moon-shadow').css('filter', shadow);
    $wind_tmr.find(dtl).css(c, fff);
    $humidity_tmr.find(dtl).css(c, fff);
    $visible_tmr.find(dtl).css(c, fff);
    $tmr_row.css(c, fff);
    $tmr_row.find('.weather').css(c, echoblue);
  };

  $btnbar.on(e, switchPage);
  $today_info.on(e, goTomorrow);
  $tomorrow.on(e, goHome);
  $switch.on(e, changeMode);
});
