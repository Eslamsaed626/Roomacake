$(function () {
  var nav = $('nav').outerHeight();
  var footer = $('.footer').outerHeight();
  var pages = nav + footer;
  $('.pages').css('min-height', "calc(100vh - ".concat(pages, "px)"));



  var value = $('.qnt-value').val();
  $(document).on('click','.plus', function() {
    $('.qnt-value').val(++value)
  })
  $(document).on('click','.minus', function() {
    if ( value > 0 ) {
      $('.qnt-value').val(--value)
    }
  })













    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
      
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          800: {
            items: 3
          },
          1000: {
            items: 3
          },
          1200: {
            items: 4
          },
          
        }
    });
     // slider nav buttons 
  $('#slider span[aria-label="Previous"]').html('<i class="fas fa-chevron-left"></i>');
  $('#slider span[aria-label="Next"]').html('<i class="fas fa-chevron-right"></i>');
  
});