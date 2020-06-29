$(document).ready(function(){ 
   var lampswitch=1;
   $(".lamp img").click(function(){
      if( lampswitch  == 0){
         lampswitch  = 1;
      }
      else{lampswitch  = 0;}
      if( lampswitch  == 0){
         loop();
         $(".lampcontroll").css({opacity:"0"});
         $(".largetitle").css({display:"none"});
         $(".scrollbtn").css({"z-index":"1"});
         $("#drawContainer").css({"z-index":"2"});
      }else{
         noLoop();
         $(".lampcontroll").css({opacity:"0.6"});
         $(".largetitle").css({display:"inline-block"});
         $(".scrollbtn").css({"z-index":"0"});
         $("#drawContainer").css({"z-index":"0"});
      }
   })
   $(".scrollbtn img").click(function(){
      /*
      $(".scrollbtn img").css({
         left: '100%',
         "-webkit-transform": "rotate(20deg)",
         "-moz-transform": "rotate(20deg)",
         "transform":"rotate(20deg)"
      });*/
   $(".largetitle").css({display:"none"});
   $(".scrollbtn img").fadeOut(2200);
   $(".lamp img").fadeOut(2200);
   $("#drawContainer").fadeOut(2200);
   $(".scroll").fadeIn(2200);
   $(".l-pic-index").animate({left:"0%"},2700);
   $(".r-pic-index").animate({left:"93%"},2700);
   $(".l-bg-index").animate({'width':'43%',right:'50%'},2700);
   $(".r-bg-index").animate({'width':'43%',left:'50%'},2700,function(){
          $(".main-index").fadeIn(800);
          setTimeout(function(){ 
            $(".main-index").css({
                top: "0",
                height: "100%",
                left: "0",
                width: "100%"})
          }, 2000);
      });
    });
  });
/*
function Switch() {
    var type = document.getElementsByClassName('lampcontroll');
    if (type == "light") {
        $(".lampcontroll") = "dark";
    } else {
        $(".lampcontroll") = "light";
    }
}
*/

var castleTag=[0,0,0,0,0,0,0]
var tempVar=0
$("#castle1").click(()=>{
   $("#castle1").removeClass("castleHover")
   castleTag[1]=1
   tempVar=0
   for(var i=1;i<=6;i++){
     if(castleTag[i]==1){
        tempVar++
     }
     if(tempVar==6){
       castleTag[0]=1
     }
   }
   TweenMax.to("#castle1",3,{
   position: "absolute",
   transform: "rotate(0deg)",
   top: "0",
   left: "0"
   })
   if(castleTag[0]==1){
      TweenMax.to(".castle",3,{
      delay: 3.5,
      opacity: 0
      })
      TweenMax.to(".map",5,{
      delay: 6,
      display: "flex",
      opacity: 1
      })
   }
})
$("#castle2").click(()=>{
   $("#castle2").removeClass("castleHover")
   castleTag[2]=1
   tempVar=0
   for(var i=1;i<=6;i++){
     if(castleTag[i]==1){
        tempVar++
     }
     if(tempVar==6){
       castleTag[0]=1
     }
   }
   TweenMax.to("#castle2",3,{
   position: "absolute",
   transform: "rotate(0deg)",
   top: "-1.2vmin",
   left: "21.5vmin"
   })
   if(castleTag[0]==1){
      TweenMax.to(".castle",3,{
      delay: 3.5,
      opacity: 0
      })
      TweenMax.to(".map",5,{
      delay: 6,
      display: "flex",
      opacity: 1
      })
   }
})
$("#castle3").click(()=>{
   $("#castle3").removeClass("castleHover")
   castleTag[3]=1
   tempVar=0
   for(var i=1;i<=6;i++){
     if(castleTag[i]==1){
        tempVar++
     }
     if(tempVar==6){
       castleTag[0]=1
     }
   }
   TweenMax.to("#castle3",3,{
   position: "absolute",
   transform: "rotate(0deg)",
   top: "-0.7vmin",
   left: "42vmin"
   })
   if(castleTag[0]==1){
      TweenMax.to(".castle",3,{
      delay: 3.5,
      opacity: 0
      })
      TweenMax.to(".map",5,{
      delay: 6,
      display: "flex",
      opacity: 1
      })
   }
})
$("#castle4").click(()=>{
   $("#castle4").removeClass("castleHover")
   castleTag[4]=1
   tempVar=0
   for(var i=1;i<=6;i++){
     if(castleTag[i]==1){
        tempVar++
     }
     if(tempVar==6){
       castleTag[0]=1
     }
   }
   TweenMax.to("#castle4",3,{
   width: "38vmin",
   position: "absolute",
   transform: "rotate(0deg)",
   top: "22vmin",
   left: "-4.5vmin"
   })
   if(castleTag[0]==1){
      TweenMax.to(".castle",3,{
      delay: 3.5,
      opacity: 0
      })
      TweenMax.to(".map",5,{
      delay: 6,
      display: "flex",
      opacity: 1
      })
   }
})
$("#castle5").click(()=>{
   $("#castle5").removeClass("castleHover")
   castleTag[5]=1
   tempVar=0
   for(var i=1;i<=6;i++){
     if(castleTag[i]==1){
        tempVar++
     }
     if(tempVar==6){
       castleTag[0]=1
     }
   }
   TweenMax.to("#castle5",3,{
   width: "width: 31vmin",
   position: "absolute",
   transform: "rotate(0deg)",
   top: "22vmin",
   left: "20vmin"
   })
   if(castleTag[0]==1){
      TweenMax.to(".castle",3,{
      delay: 3.5,
      opacity: 0
      })
      TweenMax.to(".map",5,{
      delay: 6,
      display: "flex",
      opacity: 1
      })
   }
}) 
$("#castle6").click(()=>{
   $("#castle6").removeClass("castleHover")
   castleTag[6]=1
   tempVar=0
   for(var i=1;i<=6;i++){
     if(castleTag[i]==1){
        tempVar++
     }
     if(tempVar==6){
       castleTag[0]=1
     }
   }
   TweenMax.to("#castle6",3,{
   width: "35vmin",
   position: "absolute",
   transform: "rotate(0deg)",
   top: "24.8vmin",
   left: "39.2vmin"
   })
   if(castleTag[0]==1){
      TweenMax.to(".castle",3,{
      delay: 4,
      opacity: 0
      })
      TweenMax.to(".map",5,{
      delay: 6.5,
      display: "flex",
      opacity: 1
      })
   }
})

let bg;
function preload(){
  bg = loadImage('background.jpg');
}

function setup() {
  let myCanvas = createCanvas(1000, 400);
  myCanvas.parent('drawContainer');
  background(bg);
  cursor("brush.png",10,100);
  noLoop();
}

function draw() {
	noStroke();
	fill((mouseX/3)%270,(255-mouseY/2)%270,(mouseX/3+mouseY/2)%270);
	ellipse(mouseX, mouseY, 20, 20);
}