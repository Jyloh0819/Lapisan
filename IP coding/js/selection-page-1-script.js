$(document).ready(function(){ 

    $( ".bookmark-btn" ).click(function() {
        $(".bookmark-icon i" ).toggleClass( "hide" );
      });


    $(".back-button").click(function(){
        $(location).attr('href', 'first-page.html')

    })

    $( ".heart-btn" ).click(function() {
        $(".heart-icon i" ).toggleClass( "hide" );
      });

    $( ".heart-btn-2" ).click(function() {
        $(".heart-icon-2 i" ).toggleClass( "hide" );
      });

    $(".container-1").click(function(){
        $(location).attr('href', 'acar-page.html')

      });

    
});