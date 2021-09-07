import { gsap } from "gsap";

// function textScrollUp() {
// gsap.
//     from('h1, h3, p',
//         {
//             opacity: 0, yPercent: 100, duration: 0.5, ease: 'power1', stagger: 0.7,
//             scrollTrigger: {
//                 trigger: '.container',
//                 markers: true,
//                 // Takes 4 different key words
//                 // Default: play none none none
//                 // Params: onEnter onLeave onEnterBack onLeaveBack
//                 toggleActions: "restart none none none"
//             }
//         })
// }

// ScrollTrigger.create({
//    trigger: el,
//    animation: timeline,
//    markers: true,
//    start: 'top bottom-=30%',
//    end: "bottom top+=100px",
//    toggleActions: 'play reverse play reverse',
// })

// gsap.utils.toArray(['.container']).forEach(elem => {
//    const element = elem as Element;

//    ScrollTrigger.create({
//       trigger: element,
//       start: 'top-=40px center', 
//       end: 'bottom center',
//       markers: true,
//       animation: gsap.from('h2', {opacity: 0})
//    })
// })

export const setupHeaderAnimation = () => {
   let timeline = gsap.timeline();
   
   timeline.set(".bottom__bar__item", {opacity: 0})
   timeline.add(gsap.from('.hero__headings__h1', { delay: 0.3, opacity: 0, yPercent: 100, rotate: '5deg', duration: 0.5, ease: 'power1' }));
   timeline.add(gsap.from('.hero__headings__p, .hero__headings__button-wrap, .subtitle--hero',
   {
      delay: 0.3, opacity: 0, yPercent: 100, rotate: '5deg', duration: 0.5, ease: 'power1', stagger: 0.4,
   }));
   timeline.add(setupQuickAction, "<");
}
export const setupQuickAction = () => {

   let timeline = gsap.timeline();
   timeline.add(gsap.set(".bottom__bar__item", {opacity: 1}));
   timeline.add(gsap.from('.bottom__bar__item', {opacity: 0, y: "-=20", stagger: 0.4}));

   return timeline;
}
