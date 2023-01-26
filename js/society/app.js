$(document).ready(function(){
  $('#navbar-toggle').on('click', function(){
    $('.mobile-navbar').addClass('open');
  });
  $('.close-navbar').on('click', function(){
    $('.mobile-navbar').removeClass('open');
  });
});
