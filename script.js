var crs=document.querySelector("#cursour")
var crsblr=document.querySelector("#cursour-blr")
document.addEventListener("mousemove", function (dets) {
    crs.style.left = dets.x + "px";
    crs.style.top = dets.y + "px";
    crsblr.style.left = dets.x - 250 + "px";
    crsblr.style.top = dets.y - 250 + "px";
  });
    
 var crs=document.querySelector("#cursour")
var h4=document.querySelectorAll("#nav a")
h4.forEach((el)=>{
    el.addEventListener("mouseenter",()=>{

        crs.style.scale=3
        crs.style.border="1px solid #fff"
        crs.style.backgroundColor="transparent"

    })
    el.addEventListener("mouseleave",()=>{
        crs.style.scale=1
        crs.style.border="1px solid #95c11e"
        crs.style.backgroundColor="#95c11e"

    })
    
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"82px",
    scrollTrigger:{
        trigger:"#nav",
        scoller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scoller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:1
    }
})

gsap.from("#about-us img , #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scoller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
})

gsap.from(".cr",{
    scale:0.8,
    opacity:0,
    duration:80,
    stagger:1,
    scrollTrigger:{
        trigger:".cr",
        scoller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 58%",
        scrub:2
    }
})

gsap.from("#colo1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colo1",
        scroller:"body",
        // markers:true,
        // start:"top 30%",
        // end:"top 47%",
        scrub:4
    } 
})
gsap.from("#colo2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colo1",
        scroller:"body",
        // markers:true,
        // start:"top 30%",
        // end:"top 47%",
        scrub:2
    } 
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:2
    } 
})