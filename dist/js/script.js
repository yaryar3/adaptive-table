

$(document).ready(function() {
    
   
  $('#th1').click(function(){
    
    $(this).parent().find('.imagerotate').toggleClass('imagerotate-animate');
    $('.table-hidden').toggle();
  });

});
  


