$(document).ready(function(){
    $("#des").click(function(){
        $("#show").toggle();
        $("#hide").toggle();
    });
    $("#dev").click(function(){
        $("#devshow").toggle();
        $("#devhide").toggle();
    });
    $("#proman").click(function(){
        $("#pmshow").toggle();
        $("#pmhide").toggle();
    });
    $('.text').hide();
    $('.imgs1').animate({
        opacity:1
    });
    $('.imgs1').hover(function() {
        $(this).find('.text1').fadeIn(300);
      }, function() {
        $(this).find('.text1').fadeOut(100);  
      });
      $('.imgs2').hover(function() {
        $(this).find('.text2').fadeIn(300);
      }, function() {
        $(this).find('.text2').fadeOut(100);  
      });
      $('.imgs3').hover(function() {
        $(this).find('.text3').fadeIn(300);
      }, function() {
        $(this).find('.text3').fadeOut(100);  
      });
      $('.imgs4').hover(function() {
        $(this).find('.text4').fadeIn(300);
      }, function() {
        $(this).find('.text4').fadeOut(100);  
      });
      $('.imgs5').hover(function() {
        $(this).find('.text5').fadeIn(300);
      }, function() {
        $(this).find('.text5').fadeOut(100);  
      });
      $('.imgs6').hover(function() {
        $(this).find('.text6').fadeIn(300);
      }, function() {
        $(this).find('.text6').fadeOut(100);  
      });
      $('.imgs7').hover(function() {
        $(this).find('.text7').fadeIn(300);
      }, function() {
        $(this).find('.text7').fadeOut(100);  
      });
      $('.imgs8').hover(function() {
        $(this).find('.text8').fadeIn(300);
      }, function() {
        $(this).find('.text8').fadeOut(100);  
      });
});
// document.getElementById("button").onclick =function(){
//     Var name = ""
//     var email = ""
//     var comment = ""
    

//     name=document.getElementById("name").Value
//     email=document.getElementById("email").Value
//     comment = document.getElementById("info").value
// }
