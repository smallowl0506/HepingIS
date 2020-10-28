var percent = 0

var timer = setInterval(function(){
  $(".bar").css("width",percent+"%")
  percent+=0.5
  if (percent>102){
    $(".pageLoading").addClass("complete")
    clearInterval(timer)
  }
},20)

$(".backtoindex").click(function () {
  window.history.back();
});

<<<<<<< HEAD
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
=======
$(function(){
  AOS.init();
})

$("#flip").click(function(){
  $("#p").slideToggle("slow");
});

$("#flip2").click(function(){
  $("#p2").slideToggle("slow");
});

$("#flip3").click(function(){
  $("#p3").slideToggle("slow");
});

$("#flip4").click(function(){
  $("#p4").slideToggle("slow");
});

$("#flip5").click(function(){
  $("#p5").slideToggle("slow");
});

>>>>>>> 10fdbdbfb6d29db6dab312d11943e46409b6e57e
