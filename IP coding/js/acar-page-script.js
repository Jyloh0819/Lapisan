$(document).ready(function(){ 

    $( ".heart-btn" ).click(function() {
        $(".heart-icon i" ).toggleClass( "hide" );
        
      });

    $(".back-button").click(function() {
      $(location).attr("href", "selection-page-1.html")

    })

    $(".video-btn").click(function(){
      $(location).attr("href", "video.html")

    })

    document.getElementById('video-btn').addEventListener('click',function()
    {
    document.querySelector('.bg-modal').style.display = "flex";

    });

    document.querySelector('.close').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "none";
    });

    //var toggled =0;
    //$("#video-btn").click(function(){
      //toggled ++;
     // if(toggled ==1){
       // $('.bg-modal').removeClass();
      //  $('.bg-modal'),addClass('animation');
     // }

      //else{
      //  $('.bg-modal').removeClass();
     //   $('.bg-modal').addClass('.slide-out-bottom');
     //   toggled=0
     // }
 //   })



  
  
});