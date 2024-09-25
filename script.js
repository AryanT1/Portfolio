function navanim() {
    gsap.from("#nav", {
        opacity: 0,
        y: -110,
        duration: 2,
        stagger: 0.2
    });
}

navanim();

gsap.from("#heading h1", {
    opacity: 0,
    y: 110,
    duration: 2,
    stagger: 0.2
});

gsap.from("#heading h5", {
    opacity: 0,
    y: 110,
    duration: 2,
    stagger: 0.2
});

gsap.from("#herofooter a", {
    opacity: 0,
    y: 110,
    duration: 2,
    stagger: 0.2
});

gsap.from("#iconset", {
    opacity: 0,
    y: 110,
    duration: 2,
    stagger: 0.2

});


document.querySelectorAll(".elem")
    .forEach(function (elem) {

        elem.addEventListener("mouseleave", function (dets) {
           
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            easeIn: Power3,
        
        });


    });

    });
document.querySelectorAll(".elem")
    .forEach(function (elem) {

        elem.addEventListener("mousemove", function (dets) {
            var diff = dets.clientY - elem.getBoundingClientRect().top ;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX
        });


    });

    });

    // script.js
const nav = document.getElementById('nav');
const heroHeight = document.getElementById('hero').offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > heroHeight) {
    nav.classList.add('hidden'); // Add a class to hide it
  } else {
    nav.classList.remove('hidden'); // Remove the class to show it
  }
});
