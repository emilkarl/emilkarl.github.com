$(document).ready(function(){
  $('.nav-toggle').on('click',function(){
    $('.hf-wrapper header').toggleClass('nav-active');
  });
  
  if($('.bucket-items-total').length > 0){
    $('.bucket-items-total').html($('article li').length);
    $('.bucket-items-completed').html($('article li.complete').length);
  }
});