function nextsequence() {
  var r;
  r=(Math.random())*10;
  r=Math.floor(r);
  r=r%4;
  return (r);
}
function playsound(color){
  var audio= new Audio("sounds/"+color+".mp3");
  audio.play();
}
var buttoncolors=["red","blue","green","yellow"];
var gamepattern=[];
var userclickedpattern=[];
var random_color;
var color=nextsequence();
random_color=buttoncolors[color];
gamepattern.push(random_color);
//alert(random_color);
$("#"+random_color).fadeOut(100).fadeIn(100);
var audio= new Audio("sounds/"+random_color+".mp3");
audio.play();
$(".btn").click(function(){
  var chosen_color;
  chosen_color=$(this).attr("id");
  userclickedpattern.push(chosen_color);
  playsound(chosen_color);
  alert(userclickedpattern);
});
