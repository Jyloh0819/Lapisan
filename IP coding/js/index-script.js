$(document).ready(function(){ 

//redirect to page 

$('.submit-form').click(function(){

    //Get value from form
    var name = $('.name').val();
    
    //save to local storage
    localStorage.setItem('name', JSON.stringify(name));
    
    //redirect to homepage 
     $(location).attr('href', 'first-page.html');

})

$('.guest').click(function(){

    localStorage.clear();

    $(location).attr('href', 'first-page.html');

})

});