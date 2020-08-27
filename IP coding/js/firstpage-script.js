$(document).ready(function(){ 

    //Show name data 

    var name = JSON.parse(localStorage.getItem('name'));


    $('.add-name').append(name);

    $('.post-wrapper-1').slick({
        loop:false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

      $('.post-wrapper-2').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '120px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '120px',
              slidesToShow: 1
            }
          }
        ]
      });

      $( ".bookmark-btn" ).click(function() {
        $(".bookmark-icon i" ).toggleClass( "hide" );
      });

      $( ".bookmark-btn-2" ).click(function() {
        $(".bookmark-icon-2 i" ).toggleClass( "hide" );
      });

      $( ".bookmark-btn-3" ).click(function() {
        $(".bookmark-icon-3 i" ).toggleClass( "hide" );
      });

      $( ".bookmark-btn-4" ).click(function() {
        $(".bookmark-icon-4 i" ).toggleClass( "hide" );
      });






      $("#post-1").click(function(){

        $(location).attr('href', 'selection-page-1.html')
      })

      
});