$('.carousel').carousel({
  interval: 3500
})

function blinker() {
    $('.blink_me').fadeOut(1000);
    $('.blink_me').fadeIn(1000);
}

setInterval(blinker, 2000);

//modal
$('#myModal').modal('show')   

//scrol

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
//mail

 