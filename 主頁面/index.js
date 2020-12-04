var muralswitch;
$(document).ready(function(){ 
   var lampswitch=1;
   muralswitch = 1;

   var pr1 = document.getElementById("pr1"); 
   $(".lamp img").hover(function(){
      pr1.setAttribute("data-balloon-visible", "");},
      function(){
         pr1.removeAttribute("data-balloon-visible")
   });

   var pr2 = document.getElementById("pr2"); 
   $("#drawContainer").hover(function(){
      pr2.setAttribute("data-balloon-visible", "");},
      function(){
         pr2.removeAttribute("data-balloon-visible")
   });

   var pr3 = document.getElementById("pr3"); 
   $("#muralContainer").hover(function(){
      pr3.setAttribute("data-balloon-visible", "");},
      function(){
         pr3.removeAttribute("data-balloon-visible")
   });
   
   var pr4 = document.getElementById("pr4"); 
   $(".scrollbtn img").hover(function(){
      pr4.setAttribute("data-balloon-visible", "");},
      function(){
         pr4.removeAttribute("data-balloon-visible")
   });

   $(".lamp img").click(function(){
      if( lampswitch  == 0){
         lampswitch  = 1;
         muralswitch = 1;
      }
      else{
         lampswitch  = 0;
         muralswitch = 0;
      }
      if( lampswitch  == 0){
         drawdraw.loop();
         mural.loop();
         $(".lampcontroll").css({opacity:"0"});
         $(".largetitle").css({display:"none"});
         $(".scrollbtn").css({"z-index":"1"});
         $("#drawContainer").css({"z-index":"2"});
         $("#muralContainer").css({"z-index":"2"});
         
      }else{
         drawdraw.noLoop();
         mural.noLoop();
         $(".lampcontroll").css({opacity:"0.6"});
         $(".largetitle").css({display:"inline-block"});
         $(".scrollbtn").css({"z-index":"0"});
         $("#drawContainer").css({"z-index":"0"});
         $("#muralContainer").css({"z-index":"0"});
      }
   });
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
   $("#muralContainer").fadeOut(2200);
   $(".menu").fadeOut(2200);
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
let video;
let poseNet;
let pose;
let skeleton;
let isControllable = false;
// let interationPosition;
// let interationWidth;
// let interationHeight;
let castle1Position,castle2Position,castle3Position,castle4Position,castle5Position,castle6Position,finishButtonPosition;
let castle1Width,castle2Width,castle3Width,castle4Width,castle5Width,castle6Width,finishButtonWidth;
let castle1Height,castle2Height,castle3Height,castle4Height,castle5Height,castle6Height,finishButtonHeight;
let bgImg;
var castleTag=[0,0,0,0,0,0,0]
var tempVar=0
$( document ).ready(function() {
   console.log("jquery loaded!!!");
   // interationPosition = $(".interation").offset();
   // interationWidth = $(".interation").width();
   // interationHeight = $(".interation").height();
   castle1Position = $("#castle1").offset();
   castle1Width = $("#castle1").width();
   castle1Height = $("#castle1").height();
   castle2Position = $("#castle2").offset();
   castle2Width = $("#castle2").width();
   castle2Height = $("#castle2").height();
   castle3Position = $("#castle3").offset();
   castle3Width = $("#castle3").width();
   castle3Height = $("#castle3").height();
   castle4Position = $("#castle4").offset();
   castle4Width = $("#castle4").width();
   castle4Height = $("#castle4").height();
   castle5Position = $("#castle5").offset();
   castle5Width = $("#castle5").width();
   castle5Height = $("#castle5").height();
   castle6Position = $("#castle6").offset();
   castle6Width = $("#castle6").width();
   castle6Height = $("#castle6").height();
   finishButtonPosition = $("#finishButton").offset();
   finishButtonWidth = $("#finishButton").width();
   finishButtonHeight = $("#finishButton").height();
   // console.log("left:"+interationPosition.left,"top:"+interationPosition.top);
   
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
         TweenMax.to(".castle",1,{
         delay: 4,
         display: "none",
         })
         TweenMax.to(".map",3,{
         delay: 3,
         display: "flex",
         opacity: 1
         })
         TweenMax.to(".map",3,{
         delay: 5,
         height: "65vmin",
         width: "104vmin"
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
         TweenMax.to(".castle",1,{
         delay: 4,
         display: "none",
         })
         TweenMax.to(".map",3,{
         delay: 3,
         display: "flex",
         opacity: 1
         })
         TweenMax.to(".map",3,{
         delay: 5,
         height: "65vmin",
         width: "104vmin"
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
         TweenMax.to(".castle",1,{
         delay: 4,
         display: "none",
         })
         TweenMax.to(".map",3,{
         delay: 3,
         display: "flex",
         opacity: 1
         })
         TweenMax.to(".map",3,{
         delay: 5,
         height: "65vmin",
         width: "104vmin"
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
        TweenMax.to(".castle",1,{
         delay: 4,
         display: "none",
         })
         TweenMax.to(".map",3,{
         delay: 3,
         display: "flex",
         opacity: 1
         })
         TweenMax.to(".map",3,{
         delay: 5,
         height: "65vmin",
         width: "104vmin"
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
         TweenMax.to(".castle",1,{
         delay: 4,
         display: "none",
         })
         TweenMax.to(".map",3,{
         delay: 3,
         display: "flex",
         opacity: 1
         })
         TweenMax.to(".map",3,{
         delay: 5,
         height: "65vmin",
         width: "104vmin"
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
         TweenMax.to(".castle",1,{
         delay: 4,
         display: "none",
         })
         TweenMax.to(".map",3,{
         delay: 3,
         display: "flex",
         opacity: 1
         })
         TweenMax.to(".map",3,{
         delay: 5,
         height: "65vmin",
         width: "104vmin"
         })
      }
     })
   $("#finishButton").click(()=>{
      $("#finishButton").css("display","none");
         TweenMax.to(".castle",1,{
          opacity: "0"
         })
         $(".map").css("height","65vmin");
         $(".map").css("width","104vmin");
         TweenMax.to(".map",3,{
         delay: 2,
         display: "flex",
         opacity: "1"
         })
   })
   $("#controllButton").click(()=>{
      if(isControllable){
         isControllable = false
         $("#controllButton").html("開啟<br>視訊互動")
      }else{
         isControllable = true
         $("#controllButton").html("關閉<br>視訊互動")
      }
   })
 });

 function preload(){
   
   leftHandImg = loadImage("left_hand.png");
   rightHandImg = loadImage("right_hand.png");
 }
 
 function setup() {
   // createCanvas(640, 480);
   // let container = select("#outerBlock");
   // console.log("container:"+container);
   // let myCanvas = createCanvas(container.width, container.height);
   // myCanvas.parent('outerBlock');
   createCanvas(windowWidth, windowHeight);
   let constraints = {
     video: {
       mandatory: {
         minWidth: 1280,
         minHeight: 720
       }
     }
   };
   video = createCapture(constraints);
   // video = createCapture(VIDEO);
   video.hide();
   poseNet = ml5.poseNet(video, modelLoaded);  //使用poseNet pre-trained model 來偵測姿勢和骨架
   poseNet.on('pose', gotPoses); //觸發事件來偵測姿勢
 
   //-------------------------------------鏡像翻轉位置也翻轉----------------------------------------------------
   // interationPosition = width - castle1Position.left - 200
   castle1Position.left = width - castle1Position.left - 200
   castle2Position.left = width - castle2Position.left - 200
   castle3Position.left = width - castle3Position.left - 200
   castle4Position.left = width - castle4Position.left - 200
   castle5Position.left = width - castle5Position.left - 200
   castle6Position.left = width - castle6Position.left - 200
   finishButtonPosition.left = width - finishButtonPosition.left - 200
 }

 function gotPoses(poses) {
   console.log(poses); //顯示各身體部位的位置和可能性
   if (poses.length > 0) { //如果有偵測到
     pose = poses[0].pose;   //紀錄偵測資料
     skeleton = poses[0].skeleton; //骨架資料
   }
 }
 
 
 function modelLoaded() {
   console.log('poseNet ready');
 }

 function draw() {
   //-----------------------先移動到canvas右側，將x座標反轉，達成鏡像---------------------------
   // image(video, 0, 0)
   translate(width,0);
   scale(-1,1);
   image(bgImg, 0, 0,width,height);
   // background(0)
   //----------------------------------------------------------------------------------------
 
   if (pose && isControllable) {
 
     image(leftHandImg,pose.rightWrist.x, pose.rightWrist.y,80,80);
     image(rightHandImg,pose.leftWrist.x, pose.leftWrist.y,50,50);
     // let eyeR = pose.rightEye;   //右眼位置
     // let eyeL = pose.leftEye;    //左眼位置
     // let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
     // fill(255, 0, 0);
     // ellipse(pose.nose.x, pose.nose.y, d);   //鼻子位置
     // fill(0, 0, 255);
     // ellipse(pose.rightWrist.x, pose.rightWrist.y, 32);    //右手腕位置
     // ellipse(pose.leftWrist.x, pose.leftWrist.y, 32);    //左手腕位置
     
     // for (let i = 0; i < pose.keypoints.length; i++) { //keypoint紀錄身體總共17個所有點
     //   let x = pose.keypoints[i].position.x;
     //   let y = pose.keypoints[i].position.y;
     //   fill(0,255,0);
     //   ellipse(x,y,16,16);
     // }
     
     // for (let i = 0; i < skeleton.length; i++) {   //skeleton紀錄骨架位置(每兩點位置)
     //   let a = skeleton[i][0];
     //   let b = skeleton[i][1];
     //   strokeWeight(2);
     //   stroke(255);
     //   line(a.position.x, a.position.y,b.position.x,b.position.y);      
     // } 
 
     //for interation block
     // fill(255,0,255);
     // ellipse(interationPosition.left,interationPosition.top,16,16);
     // let distance1 = dist(interationPosition.left+interationWidth/2,interationPosition.top,pose.leftWrist.x,pose.leftWrist.y);
     // let distance2 = dist(interationPosition.left+interationWidth/2,interationPosition.top,pose.rightWrist.x,pose.rightWrist.y);
     // // console.log(distance);
     // if(distance1<50||distance2<50){
     //   $(".interation").css("color","red");
     // }else{
     //   $(".interation").css("color","yellow");
     // }
 
     //for castle1 block
     // fill(255,255,0);
     // ellipse(castle1Position.left+castle1Width/2,castle1Position.top,16,16);
     let distanceC11 = dist(castle1Position.left+castle1Width/2,castle1Position.top,pose.leftWrist.x,pose.leftWrist.y);
     let distanceC12 = dist(castle1Position.left+castle1Width/2,castle1Position.top,pose.rightWrist.x,pose.rightWrist.y);
     // console.log(distanceC1);
     if(distanceC11<80||distanceC12<80){
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
           TweenMax.to(".castle",1,{
           delay: 4,
           display: "none",
           })
           TweenMax.to(".map",3,{
           delay: 3,
           display: "flex",
           opacity: 1
           })
           TweenMax.to(".map",3,{
           delay: 5,
           height: "65vmin",
           width: "104vmin"
           })
        }
     }
 
     //for castle2 block
     // fill(255,255,0);
     // ellipse(castle2Position.left+castle2Width/2,castle2Position.top,16,16);
     let distanceC21 = dist(castle2Position.left+castle2Width/2,castle2Position.top,pose.leftWrist.x,pose.leftWrist.y);
     let distanceC22 = dist(castle2Position.left+castle2Width/2,castle2Position.top,pose.rightWrist.x,pose.rightWrist.y);
     // console.log(distanceC1);
     if(distanceC21<80||distanceC22<80){
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
         TweenMax.to(".castle",1,{
         delay: 4,
         display: "none",
         })
         TweenMax.to(".map",3,{
         delay: 3,
         display: "flex",
         opacity: 1
         })
         TweenMax.to(".map",3,{
         delay: 5,
         height: "65vmin",
         width: "104vmin"
         })
      }
     }
 
     //for castle3 block
     // fill(255,255,0);
     // ellipse(castle3Position.left+castle3Width/2,castle3Position.top,16,16);
     let distanceC31 = dist(castle3Position.left+castle3Width/2,castle3Position.top,pose.leftWrist.x,pose.leftWrist.y);
     let distanceC32 = dist(castle3Position.left+castle3Width/2,castle3Position.top,pose.rightWrist.x,pose.rightWrist.y);
     // console.log(distanceC1);
     if(distanceC31<80||distanceC32<80){
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
         TweenMax.to(".castle",1,{
         delay: 4,
         display: "none",
         })
         TweenMax.to(".map",3,{
         delay: 3,
         display: "flex",
         opacity: 1
         })
         TweenMax.to(".map",3,{
         delay: 5,
         height: "65vmin",
         width: "104vmin"
         })
      }
     }
 
     //for castle4 block
     // fill(255,255,0);
     // ellipse(castle4Position.left+castle4Width/2,castle4Position.top,16,16);
     let distanceC41 = dist(castle4Position.left+castle4Width/2,castle4Position.top,pose.leftWrist.x,pose.leftWrist.y);
     let distanceC42 = dist(castle4Position.left+castle4Width/2,castle4Position.top,pose.rightWrist.x,pose.rightWrist.y);
     // console.log(distanceC1);
     if(distanceC41<80||distanceC42<80){
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
        TweenMax.to(".castle",1,{
         delay: 4,
         display: "none",
         })
         TweenMax.to(".map",3,{
         delay: 3,
         display: "flex",
         opacity: 1
         })
         TweenMax.to(".map",3,{
         delay: 5,
         height: "65vmin",
         width: "104vmin"
         })
      }
     }
 
     //for castle5 block
     // fill(255,255,0);
     // ellipse(castle5Position.left+castle5Width/2,castle5Position.top,16,16);
     let distanceC51 = dist(castle5Position.left+castle5Width/2,castle5Position.top,pose.leftWrist.x,pose.leftWrist.y);
     let distanceC52 = dist(castle5Position.left+castle5Width/2,castle5Position.top,pose.rightWrist.x,pose.rightWrist.y);
     // console.log(distanceC1);
     if(distanceC51<80||distanceC52<80){
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
         TweenMax.to(".castle",1,{
         delay: 4,
         display: "none",
         })
         TweenMax.to(".map",3,{
         delay: 3,
         display: "flex",
         opacity: 1
         })
         TweenMax.to(".map",3,{
         delay: 5,
         height: "65vmin",
         width: "104vmin"
         })
      }
     }
 
     //for castle6 block
     // fill(255,255,0);
     // ellipse(castle6Position.left+castle6Width/2,castle6Position.top,16,16);
     let distanceC61 = dist(castle6Position.left+castle6Width/2,castle6Position.top,pose.leftWrist.x,pose.leftWrist.y);
     let distanceC62 = dist(castle6Position.left+castle6Width/2,castle6Position.top,pose.rightWrist.x,pose.rightWrist.y);
     // console.log(distanceC1);
     if(distanceC61<80||distanceC62<80){
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
         TweenMax.to(".castle",1,{
         delay: 4,
         display: "none",
         })
         TweenMax.to(".map",3,{
         delay: 3,
         display: "flex",
         opacity: 1
         })
         TweenMax.to(".map",3,{
         delay: 5,
         height: "65vmin",
         width: "104vmin"
         })
      }
     }
 
     //for finishButton block
     // fill(255,255,0);
     // ellipse(finishButtonPosition.left+finishButtonWidth/2,finishButtonPosition.top,16,16);
     let distanceFB1 = dist(finishButtonPosition.left+finishButtonWidth/2,finishButtonPosition.top,pose.leftWrist.x,pose.leftWrist.y);
     let distanceFB2 = dist(finishButtonPosition.left+finishButtonWidth/2,finishButtonPosition.top,pose.rightWrist.x,pose.rightWrist.y);
     // console.log(distanceC1);
     if(distanceFB1<100||distanceFB2<100){
         $("#finishButton").css("display","none");
         TweenMax.to(".castle",1,{
          opacity: "0"
         })
         $(".map").css("height","65vmin");
         $(".map").css("width","104vmin");
         TweenMax.to(".map",3,{
         delay: 2,
         display: "flex",
         opacity: "1"
         })
     }
     
   }
   
 }
 
 function dist(posA_x,posA_y,posB_x,posB_y){
   let x = posA_x-posB_x;
   let y = posA_y-posB_y;
   return Math.sqrt(a*a+b*b);
 }




const s1 = ( p1 ) => {
   let bg;

   p1.preload=function(){
        bg = p1.loadImage('background.jpg');
   };

   p1.setup = function() {
      p1.createCanvas(1000, 400);
      p1.background(bg);
      p1.cursor("brush.png",10,100);
      p1.noLoop();
   };
 
   p1.draw = function() {
      p1.noStroke();
      p1.fill((p1.mouseX/3)%270,(255-p1.mouseY/2)%270,(p1.mouseX/3+p1.mouseY/2)%270);
      p1.ellipse(p1.mouseX, p1.mouseY, 20, 20);
   };
 };
 
 let drawdraw = new p5(s1,'drawContainer');


const s2 = ( p2 ) => {
   let draft, ready;
   p2.preload=function(){
      ready = p2.loadImage("上色1.jpg");
      draft = p2.loadImage("黑白1.jpg");
   };

   p2.setup = function() {
     p2.createCanvas(500,280);
     p2.noCursor();
     p2.cursor("brush2.png",10,10);
     p2.image(ready, 0, 0,500,280);
     p2.image(draft, 0, 0,500,280);
     ready.resize(500,280);
     draft.resize(500,280);  
   };
 
   p2.mouseDragged = function() {
      console.log(muralswitch);
      if (muralswitch==0)
      {
         p2.copy( ready, p2.mouseX, p2.mouseY, 20, 20, p2.mouseX, p2.mouseY, 20, 20);
      }
   };
 };
 
 let mural = new p5(s2,'muralContainer');

 $(document).ready(function() {
   $('#push').on('click',function(){
     $('#push, #pushed-right-1, #pushed-right-2, #pushed-right-3, #pushed-right-4').toggleClass('move');
     $('#push').toggleClass('rotate');
   });
 });       