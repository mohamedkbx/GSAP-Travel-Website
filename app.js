let controller;
let slideScene;

function animateSlides() {
  //init controller
  controller = new ScrollMagic.Controller();
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");
  //   loop over each slide
  sliders.forEach((slide) => {
    const revelImg = slide.querySelector(".revel-img");
    const img = slide.querySelector("img");
    const revelText = slide.querySelector(".revel-text");
    //GSAP
    const slideT1 = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slideT1.to(revelImg, { x: "100%" });
    slideT1.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
    slideT1.fromTo(revelText, { x: "0%" }, { x: "100%" }, "-=0.70");
    slideT1.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=0.4");
  });
}

animateSlides();
