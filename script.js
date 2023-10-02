//page1animation
let vidcont = document.querySelector(".vidcont");
let page1anim = function () {
  let cursor = document.querySelector(".cursor");

  vidcont.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
      left: dets.clientX - 20,
      top: dets.clientY - 20,
    });
  });

  vidcont.addEventListener("mouseleave", function (dets) {
    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
    });
  });

  gsap.from(".page1>h1 , .vid", {
    y: 900,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  });

  gsap.to(".nav_item h3 ", {
    y: -100,
    duration: 1,
    scrollTrigger: {
      trigger: ".nav_item h3",
      scroller: "body",
      // markers:true,
      start: "top 0%",
      end: "top 200%",
      scrub: 1,
    },
  });
  gsap.to(".logo h2 ", {
    y: -100,
    duration: 1,
    scrollTrigger: {
      trigger: ".nav_item h3",
      scroller: "body",
      start: "top 0%",
      end: "top 200%",
      scrub: 0.5,
    },
  });

  gsap.from(".subnav", {
    x: 200,
    rotate: 360,
    scrollTrigger: {
      trigger: ".nav_item h3",
      scroller: "body",
      start: "top 0%",
      end: "top 200%",
      scrub: 2,
    },
  });
};
page1anim();
//darkmode
let darkmode = function () {
  let moon = document.querySelector(".moon");
  let sun = document.querySelector(".sun");

  moon.addEventListener("click", function () {
    moon.style.display = "none";
    sun.style.display = "block";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  });

  sun.addEventListener("click", function () {
    sun.style.display = "none";
    moon.style.display = "block";
    document.body.style.backgroundColor = "#F7F7F7";
    document.body.style.color = "black";
  });
};
darkmode();
//elmbox animation
let elmboxanim = function () {
  //elmtag1

  let elmtag = document.querySelector(".elmtag");
  let elmtaginfo = document.querySelector(".elmtaginfo");

  elmtag.addEventListener("mouseenter", function () {
    gsap.to(elmtaginfo, {
      opacity: 1,
      y: 12,
      borderRadius: "1px  24px 24px",
      duration: 0.5,
    });
  });

  elmtag.addEventListener("mouseleave", function () {
    gsap.to(elmtaginfo, {
      opacity: 0,
      y: 0,
      duration: 0.2,
    });
  });

  //elmtag3

  let elmtag2 = document.querySelector(".elmtag2");
  let elmtaginfo2 = document.querySelector(".elmtaginfo2");

  elmtag2.addEventListener("mouseenter", function () {
    gsap.to(elmtaginfo2, {
      opacity: 1,
      y: 12,
      borderRadius: "1px  24px 24px",
      duration: 0.5,
    });
  });

  elmtag2.addEventListener("mouseleave", function () {
    gsap.to(elmtaginfo2, {
      opacity: 0,
      y: 0,
      duration: 0.2,
    });
  });

  //elmtag3

  let elmtag3 = document.querySelector(".elmtag3");
  let elmtaginfo3 = document.querySelector(".elmtaginfo3");

  elmtag3.addEventListener("mouseenter", function () {
    gsap.to(elmtaginfo3, {
      opacity: 1,
      y: 12,
      borderRadius: "1px  24px 24px",
      duration: 0.5,
    });
  });

  elmtag3.addEventListener("mouseleave", function () {
    gsap.to(elmtaginfo3, {
      opacity: 0,
      y: 0,
      duration: 0.2,
    });
  });
};
elmboxanim();


//page3 cursor effect
let page3crsr =()=>{
//page3 cursor float

let crsbody = document.querySelector(".crsbody");
let page3 = document.querySelector(".page3");
let child = document.querySelectorAll(".child");
// page3.addEventListener("mousemove",function(dets){

//   gsap.to(crsbody,{
//     transform: "translate(50%,50%)scale(1)",
//     left:dets.clientX-150,
//     top:dets.clientY-150,
//   })
// })
// page3.addEventListener("mouseleave",function(){

//   gsap.to(crsbody,{
//     transform: "translate(50%,50%)scale(0)",

//   })
// })

//cursor page3

page3.addEventListener("mouseenter", function () {
  child.forEach((elm) => {
    elm.addEventListener("mousemove", function (dets) {
      gsap.to(crsbody, {
        transform: "translate(50%,50%)scale(1)",
        left: dets.clientX - 150,
        top: dets.clientY - 150,
        duration: 0.5,
      });
    });

    elm.addEventListener("mouseleave", function (dets) {
      gsap.to(crsbody, {
        transform: "translate(50%,50%)scale(0)",
        duration: 0.2,
      });
    });
  });
});

page3.addEventListener("mouseleave", function () {
  gsap.to(crsbody, {
    transform: "translate(50%,50%)scale(0)",
  });
});


}
page3crsr();

let tl = gsap.timeline({
  scrollTrigger:{
    trigger:".page2 .elm",
    scroller:"body",
    markers:true,
    start:"top 60%",
    end:"top -100%",
    scrub:2

  }
})

let tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:".page4",
    scroller:"body",
    markers:true,
    start:"top 120%",
    end:"top 40%",
    scrub:2

  }
})

tl.from(".page2 .elm",{
  x:700,
  opacity:0,

})

tl.from(".page3 .child",{
  x:-700,
  opacity:0
})

tl1.from(".page4",{
  opacity:0,
  duration:0.5,
  y:400
})