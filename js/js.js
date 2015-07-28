


$('.tab-content').eq(1).hide();

$('.tab-control').on('click', function(e){
  e.preventDefault();
  if ($(this).hasClass('active')){
    $(this).removeClass('active').next('.tab-content').not(':animated').slideToggle();
  } else {
    $(this).addClass('active').next('.tab-content').not(':animated').slideToggle();
  }
});
