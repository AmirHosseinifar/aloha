$(function() {
   $("a[href^='#']").not("a[href='#']").click(function() {
      $("#"+$(this).attr("href").slice(1)+"").focus();
   });
});

$(function(){

$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'')) == this.pathname.replace(/^\//,"") && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.slice(1)+']');
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 500);
    return false;
    
  }
}

});

$('.carousel ul').flickity({
cellSelector: '.cell',
cellAlign: 'center', 
contain: true
});

$('#sign-up-form').on('submit', function(event){
event.preventDefault();
if ($('#singUp').val()== ''){
  alert("Please enter a valid email address")
}else{
  alert('Thanks for subscribing')
}
});
})