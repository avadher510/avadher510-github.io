$( document ).ready(function() {
  $('#fullpage').fullpage();
  $('.collapsible').collapsible();

  const $page1bg = $('.page1-bg');
  const $page2bg = $('.page2-bg');
  const $page3bg = $('.page3-bg');
  const $page4bg = $('.page4-bg');
  const $name = $('.name');
  const $themebtn = $('#theme');
  const $emailbtn = $('.cyan');
  const $collapsible = $('.collapsible');
  const $collapsibleHeader = $('.collapsible-header');
  const $changeTheme = $('.theme-btn');

  $themebtn.click(function() {
    $page1bg.toggleClass('page1-bg-dv');
    $page2bg.toggleClass('page2-bg-dv');
    $page3bg.toggleClass('page3-bg-dv');
    $page4bg.toggleClass('page4-bg-dv');
    $name.toggleClass('name-dv');
    $emailbtn.toggleClass('red');
    $collapsible.toggleClass('collapsible-dv');
    $collapsibleHeader.toggleClass('collapsible-header-dv');
  });

});
