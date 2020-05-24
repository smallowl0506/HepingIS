TweenMax.staggerFrom(".castle",8,{
  left: 3000,
  // delay: 5,
  // ease: Elastic.easeOut.config(0.2,0.3)
  //(偏移量多寡,軟性程度)
},1)
$("body").click(
()=>{
  TweenMax.to("#castle1",3,{
  position: "absolute",
  transform: "rotate(0deg)",
  top: "0",
  left: "0"
  })
  TweenMax.to("#castle2",3,{
  position: "absolute",
  transform: "rotate(0deg)",
  top: "-8px",
  left: "145px"
  })
  TweenMax.to("#castle3",3,{
  position: "absolute",
  transform: "rotate(0deg)",
  top: "-4px",
  left: "281px"
  })
  TweenMax.to("#castle4",3,{
  width: "255px",
  position: "absolute",
  transform: "rotate(0deg)",
  top: "36.5%",
  left: "-30px"
  })
  TweenMax.to("#castle5",3,{
  width: "205px",
  position: "absolute",
  transform: "rotate(0deg)",
  top: "37%",
  left: "135px"
  })
  TweenMax.to("#castle6",3,{
  width: "235px",
  position: "absolute",
  transform: "rotate(0deg)",
  top: "41.5%",
  left: "261px"
  })
  TweenMax.to(".castle",3,{
  delay: 3.5,
  opacity: 0
  })
   TweenMax.to(".map",5,{
  delay: 6,
  display: "flex",
  opacity: 1
  })
})