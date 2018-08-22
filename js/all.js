$(document).ready(function() {
   $('.showmenu').click(function(event) {
        event.preventDefault();
      $('body').toggleClass('menu-show');
  });
   $('.leftmenulist>li>a').click(function(event) {
   		event.preventDefault();
   		$(this).parent().siblings().find('ul').slideUp();
   		$(this).parent().find('ul').slideToggle();
   });
});
