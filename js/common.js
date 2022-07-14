$(window).on("load",function(){
  $("#title").delay(1800).animate({opacity: 0},1000).animate({width:"0"},0)
  $(".tit1").delay(300).animate({opacity:1},100).addClass("rol").delay(1200).animate({opacity: 0},0).delay(1200).animate({width:"0"},0)
  $(".tit2").delay(300).animate({opacity:1},100).addClass("roll").delay(1200).animate({opacity: 0},0).delay(1200).animate({width:"0"},0)
  $(".tit3").delay(330).animate({opacity:1},300).delay(2000).animate({opacity: 0},1200).delay(900).animate({width:"0"},0)
  $(".tit4").delay(730).animate({opacity:1},300).delay(1600).animate({opacity: 0},1200).delay(900).animate({width:"0"},0)
  $(".tit5").delay(1130).animate({opacity:1},300).delay(1000).animate({opacity: 0},1200).delay(900).animate({width:"0"},0)
  $("#cart").delay(2200).animate({opacity:1},1000)
  $(".head1").addClass("rot")
  $(".head2").addClass("rot")
})

$(window).scroll(function(){
  if($("body,html").scrollTop() >= 50){
    $(".head3").css({width:0,opacity:0}).removeClass("hed3")
  } else {
    $(".head3").css({width:200,opacity:1}).addClass("hed3")
  }
})
$(window).scroll(function(){
  if($("body,html").scrollTop() >= 400 && $("body,html").scrollTop() <= 1199){
    $("#top").animate({opacity:1},0)
    $("#top").removeClass("top1")
    $("#top").addClass("top2")
  } else if($("body,html").scrollTop() >= 1200 && $("body,html").scrollTop() <= 2279){
    $("#top").animate({opacity:1},0)
    $("#top").removeClass("top2")
    $("#top").addClass("top1")
  } else if ($("body,html").scrollTop() <= 399){
    $("#top").animate({opacity:0},0)
  } else if ($("body,html").scrollTop() >= 2280){
    $("#top").animate({opacity:1},0)
    $("#top").removeClass("top1")
    $("#top").addClass("top2")
  }
})

$(".pro21").on("click",function(){
  $(".pro1").css({display:"none"})
  $(".pro2").css({display:"block"})
  $("#pro").addClass("pron")
  $("#pro").removeClass("prot")
  $(".pro21").animate({opacity:0})
  $(".pro11").animate({opacity:1})
})

$(".pro11").on("click",function(){
  $(".pro2").css({display:"none"})
  $(".pro1").css({display:"block"})
  $("#pro").removeClass("pron")
  $("#pro").addClass("prot")
  $(".pro11").animate({opacity:0})
  $(".pro21").animate({opacity:1})
})

$(".pro1").on("mouseenter",function(){
  $(".pro111").css({display:"block"})
})
$(".pro1").on("mouseleave",function(){
  $(".pro111").css({display:"none"})
})
$(".pro111").on("mouseenter",function(){
  $(".pro111").css({display:"block"})
})
$(".pro111").on("mouseleave",function(){
  $(".pro111").css({display:"none"})
})

$(".pro2").on("mouseenter",function(){
  $(".pro211").css({display:"block"})
})
$(".pro2").on("mouseleave",function(){
  $(".pro211").css({display:"none"})
})
$(".pro211").on("mouseenter",function(){
  $(".pro211").css({display:"block"})
})
$(".pro211").on("mouseleave",function(){
  $(".pro211").css({display:"none"})
})

$("#about").on("mouseenter",function(){
  $(".aboutimg").stop().animate({marginLeft:-50})
})
$("#about").on("mouseleave",function(){
  $(".aboutfont li").css({opacity:0})
  $(".aboutimg").stop().animate({marginLeft:120})
})
$(".about1").on("mouseenter",function(){
  $(".aboutfont li").css({opacity:0})
  $(".aboutfont li:eq(0)").stop().animate({opacity:1},100)
})
$(".about1").on("mouseleave",function(){
  $(".aboutfont li").css({opacity:0})
})
$(".about2").on("mouseenter",function(){
  $(".aboutfont li").css({opacity:0})
  $(".aboutfont li:eq(1)").stop().animate({opacity:1},100)
})
$(".about2").on("mouseleave",function(){
  $(".aboutfont li").css({opacity:0})
})
$(".about3").on("mouseenter",function(){
  $(".aboutfont li").css({opacity:0})
  $(".aboutfont li:eq(2)").stop().animate({opacity:1},100)
})
$(".about3").on("mouseleave",function(){
  $(".aboutfont li").css({opacity:0})
})
$(".about4").on("mouseenter",function(){
  $(".aboutfont li").css({opacity:0})
  $(".aboutfont li:eq(3)").stop().animate({opacity:1},100)
})
$(".about4").on("mouseleave",function(){
  $(".aboutfont li").css({opacity:0})
})

$(window).scroll(function(){
  if($("body,html").scrollTop() >= 400){
    $("table").animate({opacity: 1},1000);
    $(".cert").animate({opacity:1},1000)
    $("#cert").addClass("hp");
  }
})

$(window).scroll(function(){
  if($("body,html").scrollTop() >= 700 && $("body,html").scrollTop() <= 1800 ){
    $("#ab").css({opacity:1})
  }
})

$(window).scroll(function(){
  if($("body,html").scrollTop() >= 1200){
    $("#port").animate({opacity:1},500).addClass("ht");
  }
})
$(window).scroll(function(){
  if($("body,html").scrollTop() >= 700 && $("body,html").scrollTop() <= 1400 ){
    $("#cart ul li a").css({color:"#797979"}).removeClass("don")
    $("#cart ul li a:eq(0)").css({color:"#fff"}).addClass("don")
  } else if($("body,html").scrollTop() >= 1401 && $("body,html").scrollTop() <= 1900){
    $("#cart ul li a").css({color:"#797979"}).removeClass("don")
    $("#cart ul li a:eq(1)").css({color:"#fff"}).addClass("don")
  } else if($("body,html").scrollTop() >= 1901 && $("body,html").scrollTop() <= 5100){
    $("#cart ul li a").css({color:"#797979"}).removeClass("don")
    $("#cart ul li a:eq(2)").css({color:"#fff"}).addClass("don")
  } else if($("body,html").scrollTop() <= 699){
    $("#cart ul li a").css({color:"#fff"}).removeClass("don")
  }
})

$(window).on("load",function(){

  $(".hd1").delay(2400).animate({opacity:1},500)
  $(".hd2").delay(2500).animate({opacity:1},500)
  $(".hd3").delay(2600).animate({opacity:1},500)
  $(".hd4").delay(2700).animate({opacity:1},500)
  $(".hd5").delay(2800).animate({opacity:1},500)
  $(".hd6").delay(2900).animate({opacity:1},500)
  $(".hd7").delay(3000).animate({opacity:1},500)
  $(".hd8").delay(3100).animate({opacity:1},500)
  $(".hd9").delay(3200).animate({opacity:1},500)
  $(".hd10").delay(3300).animate({opacity:1},500)
  $(".hd11").delay(3400).animate({opacity:1},500)
  $(".hd12").delay(3500).animate({opacity:1},500)
  $(".hd13").delay(3600).animate({opacity:1},500)
  $(".hd14").delay(3700).animate({opacity:1},500)
  $(".hd15").delay(3800).animate({opacity:1},500)
  $(".hd16").delay(3900).animate({opacity:1},500)
  $(".hd17").delay(4000).animate({opacity:1},500)
  $(".hd18").delay(4100).animate({opacity:1},500)
  $(".hd19").delay(4200).animate({opacity:1},500)
  $(".hd20").delay(4300).animate({opacity:1},500)
  $(".hd21").delay(4400).animate({opacity:1},500)
  $(".hd22").delay(4500).animate({opacity:1},500)
})
