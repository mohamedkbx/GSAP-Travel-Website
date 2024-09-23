let controller;
let slideScene;
let pageScene;
function animateSlides() {
  //init controller
  controller = new ScrollMagic.Controller();
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");
  //   loop over each slide
  sliders.forEach((slide, index, sliders) => {
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
    //create scence
    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: false,
    })
      .setTween(slideT1)
      .addIndicators({ colorStart: "white", colorTrigger: "white", name: "slide" })
      .addTo(controller);
    //add new Animation
    const pageT1 = gsap.timeline();
    let nextSlide = sliders.length - 1 === index ? "end" : sliders[index + 1];
    pageT1.fromTo(nextSlide, { y: "0%" }, { y: "50%" });
    pageT1.fromTo(slide, { opacity: "1", scale: "1" }, { opacity: "0", scale: "0.5" });
    pageT1.fromTo(nextSlide, { y: "50%" }, { y: "0%" }, "-=0.5");
    pageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0,
    })
      .setPin(slide, { pushFollowers: false })
      .setTween(pageT1)
      .addTo(controller)
      .addIndicators({ colorStart: "white", colorTrigger: "white", name: "page", indent: 200 });
  });
}

// cursur animation

let mouse = document.querySelector(".cursor");
let mouseTxt = mouse.querySelector("span");
let burger = document.querySelector(".burger");

function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}
function activeCursor(e) {
  let item = e.target;
  if (item.id === "logo" || item.classList.contains("burger")) {
    mouse.classList.add("nav-active");
  } else {
    mouse.classList.remove("nav-active");
  }
  if (item.classList.contains("explore")) {
    mouse.classList.add("explore-active");
    mouseTxt.innerText = "Tap";
    gsap.to(".title-swipe", 1, { y: "0%" });
  } else {
    mouse.classList.remove("explore-active");
    mouseTxt.innerText = "";
    gsap.to(".title-swipe", 1, { y: "100%" });
  }
}

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", { rotate: "-135deg", y: 5, backgroundColor: "black" });
    gsap.to(".line2", { rotate: "135deg", y: -5, backgroundColor: "black" });
    gsap.to("#logo", 1, { color: "black" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", { rotate: "0deg", y: 0, backgroundColor: "white" });
    gsap.to(".line2", { rotate: "0deg", y: 0, backgroundColor: "white" });
    gsap.to("#logo", 1, { color: "white" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
    document.body.classList.remove("hide");
  }
}
//event listeners
burger.addEventListener("click", navToggle);
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);

animateSlides();
