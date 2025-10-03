function loadingAnimation(){
    var tl = gsap.timeline();

tl.from(".line h1", {
    y: 150,
    stagger: -0.25,
    duration: 0.6,
    delay: 0.5
});

tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
        var h5timer = document.querySelector("#line1-part1 h5");
        var grow = 0;

        var timer = setInterval(function () {
            if (grow < 100) {
                grow++;
                h5timer.innerHTML = grow;
            } else {
                h5timer.innerHTML = 100;
                clearInterval(timer); // stop when done
            }
        }, 33);
    }
});

tl.to(".line h2",{

    animationName:"anime",
    opacity:1

})

tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 2
});


tl.from("#nav",{
    opacity:0
})

tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    duration:0.6,
    opacity: 0,
    ease: "power4.out"
});

tl.set("#loader", { display: "none" });


tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:120,
    stager:.2
})




}

function cursorAnimaton(){

    document.addEventListener("mousemove", function(dets) {
    gsap.to("#crsr", {
        left: dets.x,
        top: dets.y,
        duration: 0.3,     // control smoothness (higher = slower)
        ease: "power3.out" // easing for natural motion
    });

});



Shery.makeMagnet("#nav-part2 h4");

}

loadingAnimation()

cursorAnimaton()





