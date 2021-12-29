

// // ********************************************************************************************
// // ********************************************************************************************
// // ********************************************************************************************
// // Drills
// var controller = new ScrollMagic.Controller();
// $(document).ready(function () {
//   // console.log('arddddddd');
//   if ($("body").width() > 1340 && $("body").width() < 1600) {
//     var tween1 = new TimelineMax().add(
//       TweenLite.to(
//         ".firstDrillText.text1",
//         1,

//         {
//           x: -1300,
//           y: 0,
//         }, "first"
//       )
//     )
//       .add(
//         TweenLite.fromTo(
//           ".firstDrillText.text2",
//           1,
//           {
//             x: 1300,
//             y: -300,
//           },
//           {
//             x: 0,
//             y: -300,
//           }, "first"
//         )
//       );

//     var seen1 = new ScrollMagic.Scene({
//       triggerElement: ".firstContainer",
//       offset: -150,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 2000,
//       // ease: "power1.out",
//     })
//       .setTween(tween1)
//       .setPin(".firstContainer")
//       .addTo(controller);

//     var tween1 = new TimelineMax().add(
//       TweenLite.fromTo(
//         ".firstDrillText.text1",
//         1,
//         {
//           x: 0,
//         },
//         {
//           x: -2000,
//         }
//       )
//     );

//     var seen1 = new ScrollMagic.Scene({
//       triggerElement: ".firstContainer",
//       offset: -170,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 700,
//       // ease: "power1.out",
//     })
//       .setTween(tween1)
//       .addTo(controller);

//     // **************   ***********************************  ****************
//     // **************   Drills First Carousel ****************

//     var tweenFirstCarousel = new TimelineMax()
//       .add(
//         TweenLite.to(
//           ".drillsWork",
//           1,

//           {
//             opacity: 0,
//           }
//         )
//       )
//       .add(
//         TweenLite.fromTo(
//           ".drillsWork",
//           3,
//           {
//             // x: 0,
//             // y: -300,
//           },
//           {
//             // x: +2000,
//             // x: +2000,
//             // y: -300,
//             opacity: 0,
//           }
//         )
//       );
//     var seenFirstCarousel = new ScrollMagic.Scene({
//       triggerElement: ".firstCarousel",
//       offset: -100,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 4000,
//       // ease: "power1.out",
//     })
//       .setTween(tweenFirstCarousel)
//       .setPin(".firstCarousel")
//       .addTo(controller);
//     // *******
//     var tweenFirstCarousel = new TimelineMax()
//       .add(
//         TweenLite.fromTo(
//           ".carousel1",
//           3,
//           {
//             x: 2000,
//           },
//           {
//             x: 0,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".carousel1",
//           3,

//           {
//             x: -900,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".carImageWithHead",
//           1,

//           {
//             x: -1000,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".carousel1-image2",
//           1,

//           {
//             x: -2200,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".carousel1",
//           1,

//           {
//             x: -3100,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".carousel1-image3 ",
//           1,

//           {
//             x: -1900,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".carousel1 ",
//           1,

//           {
//             x: -5100,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".carousel1-image4 ",
//           1,

//           {
//             x: -1900,
//           }
//         )
//       );
//     var seenFirstCarousel = new ScrollMagic.Scene({
//       triggerElement: ".firstCarousel",
//       offset: -100,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 4000,
//       // ease: "power1.out",
//     })
//       .setTween(tweenFirstCarousel)
//       .addTo(controller);

//     // **************   ***********************************  ****************
//     // **************   Drills Second Carousel  ****************

//     var tweenSecondCarousel = new TimelineMax()
//       .add(
//         TweenLite.to(
//           ".Carousel2SecondPart",
//           1,

//           {
//             x: -2150,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".secondCarouselCont",
//           1,

//           {
//             x: -2550,
//           }
//         )
//       );

//     var seenSecondCarousel = new ScrollMagic.Scene({
//       triggerElement: ".secondCarousel",
//       offset: -100,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 2000,
//       // ease: "power1.out",
//     })
//       .setTween(tweenSecondCarousel)
//       .setPin(".secondCarousel")
//       .addTo(controller);
//     // *******

//     // **************   ***********************************  ****************
//     // **************   Drills Third Carousel  ****************

//     var tweenThirdCarousel = new TimelineMax()
//       .add(
//         TweenLite.to(
//           ".Carousel3SecondPart",
//           1,

//           {
//             x: -3000,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".Carousel3SecondPart",
//           1,

//           {
//             x: -4500,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".Carousel3SecondPart",
//           1,

//           {
//             x: -5900,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".textInCarousel3Independent1",
//           1,

//           {
//             x: -2250,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".Carousel3SecondPart",
//           1,

//           {
//             x: -7800,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".textInCarousel3Independent2",
//           1,

//           {
//             x: -2400,
//           }
//         )
//       );

//     var seenThirdCarousel = new ScrollMagic.Scene({
//       triggerElement: ".thirdCarousel",
//       offset: -100,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 2000,
//       // ease: "power1.out",
//     })
//       .setTween(tweenThirdCarousel)
//       .setPin(".thirdCarousel")
//       .addTo(controller);
//     // *******

//     // **************   ***********************************  ****************
//     // **************   Drills Fourth Carousel  ****************

//     var tweenThirdCarousel = new TimelineMax().add(
//       TweenLite.fromTo(
//         ".fourthCarouselImages",
//         1,

//         {
//           x: 2100,
//         },
//         {
//           x: -500,
//         }
//       )
//     );
//     var seenThirdCarousel = new ScrollMagic.Scene({
//       triggerElement: ".fourthCarousel",
//       offset: -100,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 2000,
//       // ease: "power1.out",
//     })
//       .setTween(tweenThirdCarousel)
//       .setPin(".fourthCarousel")
//       .addTo(controller);
//     // *******

//     // **************   ***********************************  ****************
//     // **************   Drills Fifth Carousel  ****************

//     var tweenThirdCarousel = new TimelineMax()
//       .add(
//         TweenLite.fromTo(
//           ".fifthCarouselImages",
//           4,

//           {
//             x: 2100,
//           },
//           {
//             x: -2000,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".fifthCarouselVideo",
//           4,

//           {
//             x: -1800,
//           }
//         )
//       );
//     var seenThirdCarousel = new ScrollMagic.Scene({
//       triggerElement: ".fifthCarousel",
//       offset: -100,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 4000,
//       // ease: "power1.out",
//     })
//       .setTween(tweenThirdCarousel)
//       .setPin(".fifthCarousel")
//       .addTo(controller);
//     // *******
//   } else {
//     // **************   Drills First Image with Texts   ****************
//     var tween1 = new TimelineMax().add(
//       TweenLite.fromTo(
//         ".firstDrillText.text2",
//         1,
//         {
//           x: 2000,
//           y: -300,
//         },
//         {
//           x: 0,
//           y: -300,
//         }
//       )
//     );

//     var seen1 = new ScrollMagic.Scene({
//       triggerElement: ".firstContainer",
//       offset: -170,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 700,
//       // ease: "power1.out",
//     })
//       .setTween(tween1)
//       .setPin(".firstContainer")
//       .addTo(controller);

//     var tween1 = new TimelineMax().add(
//       TweenLite.fromTo(
//         ".firstDrillText.text1",
//         1,
//         {
//           x: 0,
//         },
//         {
//           x: -2000,
//         }
//       )
//     );

//     var seen1 = new ScrollMagic.Scene({
//       triggerElement: ".firstContainer",
//       offset: -170,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 700,
//       // ease: "power1.out",
//     })
//       .setTween(tween1)
//       .addTo(controller);

//     // **************   ***********************************  ****************
//     // **************   Drills First Carousel ****************

//     var tweenFirstCarousel = new TimelineMax()
//       .add(
//         TweenLite.to(
//           ".drillsWork",
//           1,

//           {
//             opacity: 0,
//           }
//         )
//       )
//       .add(
//         TweenLite.fromTo(
//           ".drillsWork",
//           3,
//           {
//             // x: 0,
//             // y: -300,
//           },
//           {
//             // x: +2000,
//             // x: +2000,
//             // y: -300,
//             opacity: 0,
//           }
//         )
//       );
//     var seenFirstCarousel = new ScrollMagic.Scene({
//       triggerElement: ".firstCarousel",
//       offset: -100,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 4000,
//       // ease: "power1.out",
//     })
//       .setTween(tweenFirstCarousel)
//       .setPin(".firstCarousel")
//       .addTo(controller);
//     // *******
//     var tweenFirstCarousel = new TimelineMax()
//       .add(
//         TweenLite.fromTo(
//           ".carousel1",
//           3,
//           {
//             x: 2000,
//           },
//           {
//             x: 0,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".carousel1",
//           3,

//           {
//             x: -900,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".carImageWithHead",
//           1,

//           {
//             x: -1000,
//             rotation: 180,
//           }
//         )
//       )
//       .add(
//         TweenLite.fromTo(
//           ".carousel1-image2",
//           1,

//           {
//             x: 1000,
//             width: '5px'
//           }, {
//           x: -2400,
//           width: '600px'
//         }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".carousel1",
//           1,

//           {
//             x: -3100,
//             ease: "power4.out",
//           }
//         )
//       )
//       .add(
//         TweenLite.fromTo(
//           ".carousel1-image3 ",
//           1,

//           {
//             x: 1900,
//             width: "5px",
//           },
//           {
//             x: -1800,
//             width: "600px",
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".carousel1 ",
//           1,

//           {
//             x: -5100,
//           }
//         )
//       )
//       .add(
//         TweenLite.fromTo(
//           ".carousel1-image4 ",
//           1,

//           {
//             width: "5px",
//             x: 1000,
//           },
//           {
//             width: "600px",

//             x: -1900,
//           }
//         )
//       );
//     var seenFirstCarousel = new ScrollMagic.Scene({
//       triggerElement: ".firstCarousel",
//       offset: -100,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 4000,
//       // ease: "power1.out",
//     })
//       .setTween(tweenFirstCarousel)
//       .addTo(controller);

//     // **************   ***********************************  ****************
//     // **************   Drills Second Carousel  ****************

//     var tweenSecondCarousel = new TimelineMax()

//       .add(
//         TweenLite.to(
//           ".Carousel2SecondPart",
//           1,

//           {
//             x: -2150,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".secondCarouselCont",
//           1,

//           {
//             x: -2550,
//           }
//         )
//       );

//     var seenSecondCarousel = new ScrollMagic.Scene({
//       triggerElement: ".secondCarousel",
//       offset: -130,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 2000,
//       // ease: "power1.out",
//     })
//       .setTween(tweenSecondCarousel)
//       .setPin(".secondCarousel")
//       .addTo(controller);
//     // *******

//     // **************   ***********************************  ****************
//     // **************   Drills Third Carousel  ****************

//     var tweenThirdCarousel = new TimelineMax()
//       .add(
//         TweenLite.to(
//           ".Carousel3SecondPart",
//           1,

//           {
//             x: -1900,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".Carousel3SecondPart",
//           1,

//           {
//             x: -3720,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".Carousel3SecondPart",
//           1,

//           {
//             x: -5500,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".Carousel3SecondPart",
//           1,

//           {
//             x: -7000,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".textInCarousel3Independent1",
//           1,

//           {
//             x: -1950,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".Carousel3SecondPart",
//           1,

//           {
//             x: -8900,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".textInCarousel3Independent2",
//           1,

//           {
//             x: -2500,
//           }
//         )
//       );

//     var seenThirdCarousel = new ScrollMagic.Scene({
//       triggerElement: ".thirdCarousel",
//       offset: -150,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 2000,
//       // ease: "power1.out",
//     })
//       .setTween(tweenThirdCarousel)
//       .setPin(".thirdCarousel")
//       .addTo(controller);
//     // *******

//     // **************   ***********************************  ****************
//     // **************   Drills Fourth Carousel  ****************

//     var tweenThirdCarousel = new TimelineMax().add(
//       TweenLite.fromTo(
//         ".fourthCarouselImages",
//         1,

//         {
//           x: 2100,
//         },
//         {
//           x: -500,
//         }
//       )
//     );
//     var seenThirdCarousel = new ScrollMagic.Scene({
//       triggerElement: ".fourthCarousel",
//       offset: -100,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 2000,
//       // ease: "power1.out",
//     })
//       .setTween(tweenThirdCarousel)
//       .setPin(".fourthCarousel")
//       .addTo(controller);
//     // *******

//     // **************   ***********************************  ****************
//     // **************   Drills Fifth Carousel  ****************

//     var tweenThirdCarousel = new TimelineMax()
//       .add(
//         TweenLite.fromTo(
//           ".fifthCarouselImages",
//           4,

//           {
//             x: 2100,
//           },
//           {
//             x: -2000,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".fifthCarouselVideo",
//           4,

//           {
//             x: -1800,
//           }
//         )
//       );
//     var seenThirdCarousel = new ScrollMagic.Scene({
//       triggerElement: ".fifthCarousel",
//       offset: -100,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 4000,
//       // ease: "power1.out",
//     })
//       .setTween(tweenThirdCarousel)
//       .setPin(".fifthCarousel")
//       .addTo(controller);
//     // *******
//   }
// });





// // **********************************************************
// // **********************************************************
// // **********************************************************
// // Hand Tools
// var controller = new ScrollMagic.Controller();
// $(document).ready(function () {
//   if ($("body").width() > 1340 && $("body").width() < 1600) {
//     // *** Second Section Moving Up ***
//     $(".secondSection").each(function () {
//       // build a tween
//       var tween = TweenMax.from($(this), 1, {
//         autoAlpha: 0,
//         y: "+=200",
//         x: "0",
//         ease: Linear.easeNone,
//       });

//       // build a scene
//       var scene = new ScrollMagic.Scene({
//         triggerElement: this,
//         triggerHook: 0.7,
//         offset: 0,
//         reverse: true,
//       })
//         .setTween(tween)
//         .addTo(controller);
//     });

//     // *** Second Section ***
//     var tween1 = new TimelineLite();
//     tween1.fromTo(
//       ".needle",
//       1,
//       {
//         scale: 0,
//         y: -500,
//         x: 2000,
//       },
//       {
//         y: -500,
//         x: 200,
//         scale: 1,
//       }
//     )

//     tween1.fromTo(
//       ".pliers",
//       1,
//       {
//         opacity: 1,
//       },
//       {
//         opacity: 0,
//       },

//     )

//     tween1.to(
//       ".needle",
//       1,

//       {
//         scale: 0,
//         y: -500,
//         x: -800,
//       },
//       "first"
//     )

//     tween1
//       .fromTo(
//         ".Locking",
//         1,
//         {
//           scale: 0,
//           y: -850,
//           x: 1000,
//         },
//         {
//           scale: 1,
//           y: -850,
//           x: 50,
//         },
//         "first"
//       )

//     tween1.to(
//       ".Locking",
//       1,

//       {
//         y: -850,
//         x: -850,
//       }, "second"
//     )

//     tween1.fromTo(
//       ".Diagonal",
//       1,
//       {
//         scale: 0,
//         y: -1200,
//         x: 1000,
//       },
//       {
//         scale: 1,
//         y: -1200,
//         x: 50,
//       }, "second"
//     )

//     tween1.to(
//       ".Diagonal",
//       1,

//       {
//         y: -1200,
//         x: -850,
//       }, "third"
//     )

//     tween1.fromTo(
//       ".Combination",
//       1,
//       {
//         scale: 0,
//         y: -1550,
//         x: 1000,
//       },
//       {
//         scale: 1,
//         y: -1550,
//         x: 50,
//       }, "third"
//     )

//     tween1.to(
//       ".Combination",
//       1,

//       {
//         y: -1550,
//         x: -850,
//       }, "fourth"
//     )

//     tween1.fromTo(
//       ".Tower",
//       1,
//       {
//         scale: 0,
//         y: -1900,
//         x: 1000,
//       },
//       {
//         scale: 1,
//         y: -1900,
//         x: 180,
//       }, "fourth"
//     )

//     tween1.to(
//       ".Tower",
//       1,

//       {
//         y: -1900,
//         x: -850,
//       }, "fifth"
//     )

//     tween1.fromTo(
//       ".Water",
//       1,
//       {
//         scale: 0,
//         y: -2250,
//         x: 1000,
//       },
//       {
//         scale: 1,
//         y: -2250,
//         x: 150,
//       }, "fifth"
//     )

//     tween1.to(
//       ".Water",
//       1,

//       {
//         y: -2250,
//         x: -1000,
//       }, "sixth"
//     )

//     tween1.fromTo(
//       ".Mini",
//       1,
//       {
//         scale: 0,
//         y: -2620,
//         x: 1000,
//       },
//       {
//         y: -2620,
//         x: 100,
//         scale: 1,
//       }, "sixth"
//     )

//     tween1.to(
//       ".Mini",
//       1,

//       {
//         y: -2620,
//         x: -850,
//       }, "seventh"
//     )

//     tween1.fromTo(
//       ".secondSectionVideo",
//       1,
//       {
//         scale: 0.1,
//         opacity: 0,
//         y: -3100,
//         x: 200,
//       },
//       {
//         scale: 0.9,
//         opacity: 1,
//         y: -3050,
//         x: 250,
//       }, "seventh"
//     )
//       ;

//     var seen1 = new ScrollMagic.Scene({
//       triggerElement: ".secondSection",
//       offset: -50,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 5000,
//       // ease: "power1.out",
//     })
//       .setTween(tween1)
//       .setPin(".secondSection")
//       .addTo(controller);

//     // *************************************************************************************
//     // *** Sixxth Section ***

//     $(".sixthSection").each(function () {
//       var tween2 = TweenMax.from($(this), 1, {
//         autoAlpha: 0,
//         y: "+=200",
//         x: "0",
//         ease: Linear.easeNone,
//       });

//       // build a scene
//       var scene2 = new ScrollMagic.Scene({
//         triggerElement: this,
//         triggerHook: 0.7,
//         offset: 0,
//         reverse: true,
//       })
//         .setTween(tween2)
//         .addTo(controller);
//     });
//     var tween3 = new TimelineMax();
//     tween3.fromTo(
//       ".Needle-nose",
//       1,
//       {
//         // scale: 0,
//         y: -350,
//         x: 2000,
//       },
//       {
//         y: -350,
//         x: 150,
//         // scale: 1,
//       }, "first"
//     )
//     tween3.to(".Adjustable", 1, {
//       opacity: 0
//     }, "first")
//       ;
//     //   .add(
//     //     TweenLite.fromTo(
//     //       ".Adjustable",
//     //       1,
//     //       {
//     //         opacity: 1,
//     //       },
//     //       {
//     //         opacity: 0,
//     //       }
//     //     )
//     //   );
//     var seen3 = new ScrollMagic.Scene({
//       triggerElement: ".sixthSection",
//       offset: -50,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 1000,
//       // ease: "power1.out",
//     })
//       .setTween(tween3)
//       .setPin(".sixthSection")
//       .addTo(controller);

//     // *************************************************************************************
//     // *** Seventh Section ***
//     var tween4 = new TimelineMax()
//     tween4.fromTo(
//       ".CUTTING",
//       1,
//       {
//         opacity: 1,
//       },
//       {
//         opacity: 0,
//       }, "first"
//     )

//     tween4.fromTo(
//       ".Cut",
//       1,
//       {
//         scale: 0,
//         y: -500,
//         x: 2000,
//       },
//       {
//         y: -600,
//         x: 200,
//         scale: 1,
//       }, "first"
//     )


//     tween4.to(".Cut", 1, {
//       y: -600,
//       x: -1000,
//       scale: 1,
//     }, "second"
//     )

//     tween4.fromTo(
//       ".How",
//       1,
//       {
//         scale: 0,
//         y: -1100,
//         x: 1500,
//       },
//       {
//         y: -1250,
//         x: 100,
//         scale: 1,
//       }, "second"
//     )
//     tween4.to(".How", 1, {
//       y: -1250,
//       x: -1000,
//       scale: 1,
//     }, "third")

//     tween4.fromTo(
//       ".Knives",
//       1,
//       {
//         scale: 0,
//         y: -1500,
//         x: 2000,
//       },
//       {
//         y: -1850,
//         x: 200,
//         scale: 1,
//       }, "third"
//     )
//       ;
//     //   .add(
//     //     TweenLite.to(".Knives", 1, {
//     //       y: -1850,
//     //       x: -1800,
//     //       scale: 1,
//     //     })
//     // )
//     var seen4 = new ScrollMagic.Scene({
//       triggerElement: ".seventhSection",
//       offset: -50,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 2000,
//       // ease: "power1.out",
//     })
//       .setTween(tween4)
//       .setPin(".seventhSection")
//       .addTo(controller);

//     // *************************************************************************************
//     // *** Eighth Section ***
//     var tween5 = new TimelineMax();
//     tween5.fromTo(
//       ".eighthSectionPart.Screw",
//       1,
//       {
//         opacity: 1,
//       },
//       {
//         opacity: 0,
//       }, "first"
//     )
//     tween5.fromTo(
//       ".Shape",
//       1,
//       {
//         x: 1500,
//         y: -200,
//         scale: 0,
//       },
//       {
//         x: -100,
//         y: -450,
//         scale: 1,
//       }, "first"
//     )
//     tween5.to(".Shape", 1, {
//       //   y: -200,
//       x: -1000,
//       scale: 1,
//     }, "second"
//     )
//     tween5.fromTo(
//       ".Size",
//       1,
//       {
//         x: 1500,
//         y: -300,
//         scale: 0,
//       },
//       {
//         x: -150,
//         y: -720,
//         scale: 1,
//       }, "second"
//     )
//     tween5.to(".Size", 1, {
//       //   y: -300,
//       x: -1000,
//       scale: 1,
//     }, "third")
//     tween5.fromTo(
//       ".Handles",
//       1,
//       {
//         x: 1500,
//         y: -800,
//         scale: 0,
//       },
//       {
//         x: -150,
//         y: -1000,
//         scale: 1,
//       }, "third"
//     )
//       ;
//     //   .add(
//     //     TweenLite.to(".Handles", 1, {
//     //       //   y: -400,
//     //       x: -1800,
//     //       scale: 1,
//     //     })
//     // )
//     var seen5 = new ScrollMagic.Scene({
//       triggerElement: ".eighthSection",
//       offset: -50,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 2000,
//       // ease: "power1.out",
//     })
//       .setTween(tween5)
//       .setPin(".eighthSection")
//       .addTo(controller);

//     // *************************************************************************************
//     // *** Ninth Section ***
//     var tween6 = new TimelineMax();
//     tween6.fromTo(
//       ".ninthSectionPart.Measuring",
//       1,
//       {
//         opacity: 1,
//       },
//       {
//         opacity: 0,
//       }, "first"
//     )
//     tween6.fromTo(
//       ".Tapes",
//       1,
//       {
//         x: 2000,
//         y: -200,
//         scale: 0,
//       },
//       {
//         x: 50,
//         y: -450,
//         scale: 1,
//       }, "first"
//     )
//     tween6.to(".Tapes", 1, {
//       //   y: -200,
//       x: -1000,
//       scale: 1,
//     }, "second"
//     )
//     tween6.fromTo(
//       ".What",
//       1,
//       {
//         x: 1500,
//         y: -500,
//         scale: 0,
//       },
//       {
//         x: 50,
//         y: -750,
//         scale: 1,
//       }, "second"
//     )
//     tween6.to(".What", 1, {
//       //   y: -300,
//       x: -1000,
//       scale: 1,
//     }, "third")

//     tween6.fromTo(
//       ".Design",
//       1,
//       {
//         x: 1500,
//         y: -800,
//         scale: 0,
//       },
//       {
//         x: 50,
//         y: -1050,
//         scale: 1,
//       }, "third"
//     )
//     tween6.to(".Design", 1, {
//       //   y: -400,
//       x: -1000,
//       scale: 1,
//     }, "fourth"
//     )
//     tween6.fromTo(
//       ".lastText",
//       1,
//       {
//         x: 1500,
//         y: -800,
//         scale: 0,
//       },
//       {
//         x: 100,
//         y: -1300,
//         scale: 1,
//       }, "fourth"
//     )
//       ;
//     var seen6 = new ScrollMagic.Scene({
//       triggerElement: ".ninthSection",
//       offset: -70,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 2000,
//       // ease: "power1.out",
//     })
//       .setTween(tween6)
//       .setPin(".ninthSection")
//       .addTo(controller);

//     // *************************************************************************************
//     // *** Tenth Section ***
//     var tween7 = new TimelineMax();
//     tween7.fromTo(
//       ".tenthSectionPart.Measuring",
//       1,
//       {
//         opacity: 1,
//       },
//       {
//         opacity: 0,
//       }, "first"
//     )
//     tween7.fromTo(
//       ".tenthSectionPart.What.lone",
//       1,
//       {
//         x: 2000,
//         y: -200,
//         scale: 0,
//         opacity: 0,
//       },
//       {
//         x: -250,
//         y: -350,
//         scale: 1,
//         opacity: 1,
//       }, "first"
//     )
//     tween7.to(".tenthSectionPart.What.lone", 1, {
//       //   y: -200,
//       x: -1000,
//       // y: -500,

//       scale: 1,
//     }, "second")
//     tween7.fromTo(
//       ".tenthSectionPart.What.all",
//       1,
//       {
//         x: 1500,
//         y: -200,
//         scale: 0,
//       },
//       {
//         x: 10,
//         y: -600,
//         scale: 1,
//       }, "second"
//     )
//     tween7.to(".tenthSectionPart.What.all", 1, {
//       //   y: -300,
//       x: -1000,
//       scale: 1,
//     }, "third")
//     tween7.fromTo(
//       ".tenthSectionPart.Design.lone",
//       1,
//       {
//         x: 1500,
//         y: -600,
//         scale: 0,
//       },
//       {
//         x: -250,
//         y: -900,
//         scale: 1,
//       }, "third"
//     )
//     tween7.to(".tenthSectionPart.Design.lone", 1, {
//       //   y: -400,
//       x: -1000,
//       // y: -1100,
//       scale: 1,
//     }, "fourth")
//     tween7.fromTo(
//       ".tenthSectionPart.Design.all",
//       1,
//       {
//         x: 1000,
//         y: -800,
//         scale: 0,
//       },
//       {
//         x: -100,
//         y: -1100,
//         scale: 1,
//       }, "fourth"
//     )
//       ;
//     var seen7 = new ScrollMagic.Scene({
//       triggerElement: ".tenthSection",
//       offset: -50,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 3000,
//       // ease: "power1.out",
//     })
//       .setTween(tween7)
//       .setPin(".tenthSection")
//       .addTo(controller);

//     // *************************************************************************************
//     // *** Eleventh Section ***
//     var tween8 = new TimelineMax();
//     tween8.fromTo(
//       ".eleventhSectionPart.CLAMPS",
//       1,
//       {
//         opacity: 1,
//       },
//       {
//         opacity: 0,
//         scale: 2,
//         x: 500,
//         y: -50,
//       }, "first"
//     )
//     tween8.fromTo(
//       ".loneImage1",
//       1,
//       {
//         // rotation: 100,
//         scale: 0,
//         opacity: 0,
//         x: 500,
//         y: -0,
//       },
//       {
//         // rotation: 0,
//         x: 50,
//         y: -250,
//         opacity: 1,
//         scale: 1,
//       }, "first"
//     )
//     tween8.to(".loneImage1", 1, {
//       //   y: -200,
//       scale: 0,
//       x: -1000,
//       rotation: -50,
//       y: -150,
//     }, "second"
//     )
//     tween8.fromTo(
//       ".loneImage2",
//       1,
//       {
//         scale: 0,
//         x: 1000,
//         y: -200,
//       },
//       {
//         scale: 1,
//         x: 50,
//         y: -550,
//       }, "second"
//     )
//     tween8.to(".loneImage2", 1, {
//       scale: 0,
//       rotation: -50,
//       y: -400,
//       x: -1000,
//     }, "third")
//     tween8.fromTo(
//       ".loneImage3",
//       1,
//       {
//         scale: 0,
//         x: 1000,
//         y: -500,
//       },
//       {
//         scale: 1,
//         x: 100,
//         y: -800,
//       }, "third"
//     )
//       ;
//     var seen8 = new ScrollMagic.Scene({
//       triggerElement: ".eleventhSection",
//       offset: -50,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 3000,
//       // ease: "power1.out",
//     })
//       .setTween(tween8)
//       .setPin(".eleventhSection")
//       .addTo(controller);

//     // *************************************************************************************
//     // *** Twelfth Section ***
//     var tween9 = new TimelineMax();
//     tween9.fromTo(
//       ".GENERAL",
//       1,
//       {
//         opacity: 1,
//         x: 250,
//         scale: 1.5,
//         y: 150,
//       },
//       {
//         opacity: 0,
//         scale: 0,
//         x: -600,
//         y: 230,
//       }, "first"
//     )
//     tween9.fromTo(
//       ".Claw",
//       1,
//       {
//         scale: 0,
//         x: 500,
//         y: -50,
//       },
//       {
//         scale: 1,
//         x: -100,
//         y: -50,
//       }, "first"
//     )
//     tween9.to(".Claw", 1, {
//       //   y: -200,
//       scale: 0,
//       x: -1000,
//       y: -50,
//     }, "second"
//     )
//     tween9.fromTo(
//       ".Machinist",
//       1,
//       {
//         scale: 0,
//         x: 500,
//         y: -350,
//       },
//       {
//         scale: 1,
//         x: -100,
//         y: -350,
//       }, "second"
//     )
//     tween9.to(".Machinist", 1, {
//       scale: 0,
//       y: -350,
//       x: -1000,
//     }, "third"
//     )
//     tween9.fromTo(
//       ".Axe ",
//       1,
//       {
//         scale: 0,
//         y: -650,
//         x: 500,
//       },
//       {
//         scale: 1,
//         y: -650,
//         x: -50,
//       }, "third"
//     )
//       ;
//     var seen9 = new ScrollMagic.Scene({
//       triggerElement: ".twelfthSection",
//       offset: -50,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 3000,
//       // ease: "power1.out",
//     })
//       .setTween(tween9)
//       .setPin(".twelfthSection")
//       .addTo(controller);

//   } else {
//     // *** Second Section Moving Up ***
//     $(".secondSection").each(function () {
//       // build a tween
//       var tween = TweenMax.from($(this), 1, {
//         autoAlpha: 0,
//         y: "+=200",
//         x: "0",
//         ease: Linear.easeNone,
//       });

//       // build a scene
//       var scene = new ScrollMagic.Scene({
//         triggerElement: this,
//         triggerHook: 0.7,
//         offset: 0,
//         reverse: true,
//       })
//         .setTween(tween)
//         .addTo(controller);
//     });

//     // *** Second Section ***
//     var tween1 = new TimelineMax();
//     tween1.fromTo(
//       ".needle",
//       1,
//       {
//         scale: 0,
//         y: -700,
//         x: 2000,
//       },
//       {
//         y: -700,
//         x: 200,
//         scale: 1,
//       }, "first"
//     )
//     tween1.fromTo(
//       ".pliers",
//       1,
//       {
//         opacity: 1,
//       },
//       {
//         opacity: 0,
//       }, "first"
//     )
//     tween1.to(
//       ".needle",
//       1,

//       {
//         scale: 0,
//         y: -700,
//         x: -1000,
//       }, "second"
//     )
//     tween1.fromTo(
//       ".Locking",
//       1,
//       {
//         scale: 0,
//         y: -1250,
//         x: 1500,
//       },
//       {
//         scale: 1,
//         y: -1250,
//         x: 150,
//       }, "second"
//     )
//     tween1.to(
//       ".Locking",
//       1,

//       {
//         y: -1250,
//         x: -1000,
//       }, "third"
//     )
//     tween1.fromTo(
//       ".Diagonal",
//       1,
//       {
//         scale: 0,
//         y: -1800,
//         x: 1500,
//       },
//       {
//         scale: 1,
//         y: -1800,
//         x: 50,
//       }, "third"
//     )
//     tween1.to(
//       ".Diagonal",
//       1,

//       {
//         y: -1800,
//         x: -1000,
//       }, "fourth"
//     )
//     tween1.fromTo(
//       ".Combination",
//       1,
//       {
//         scale: 0,
//         y: -2350,
//         x: 1500,
//       },
//       {
//         scale: 1,
//         y: -2350,
//         x: 50,
//       }, "fourth"
//     )
//     tween1.to(
//       ".Combination",
//       1,

//       {
//         y: -2350,
//         x: -1000,
//       }, "fifth"
//     )
//     tween1.fromTo(
//       ".Tower",
//       1,
//       {
//         scale: 0,
//         y: -2850,
//         x: 1500,
//       },
//       {
//         scale: 1,
//         y: -2850,
//         x: 50,
//       }, "fifth"
//     )
//     tween1.to(
//       ".Tower",
//       1,

//       {
//         y: -2850,
//         x: -1000,
//       }, "sixth"
//     )
//     tween1.fromTo(
//       ".Water",
//       1,
//       {
//         scale: 0,
//         y: -3400,
//         x: 1500,
//       },
//       {
//         scale: 1,
//         y: -3400,
//         x: 50,
//       }, "sixth"
//     )
//     tween1.to(
//       ".Water",
//       1,

//       {
//         y: -3400,
//         x: -1000,
//       }, "seventh"
//     )
//     tween1.fromTo(
//       ".Mini",
//       1,
//       {
//         scale: 0,
//         y: -3950,
//         x: 1500,
//       },
//       {
//         y: -3950,
//         x: 50,
//         scale: 1,
//       }, "seventh"
//     )
//     tween1.to(
//       ".Mini",
//       1,

//       {
//         y: -3950,
//         x: -1000,
//       }, "eighth"
//     )
//     tween1.fromTo(
//       ".secondSectionVideo",
//       1,
//       {
//         scale: 0.1,
//         opacity: 0,
//         y: -4550,
//         x: 400,
//       },
//       {
//         scale: 1,
//         opacity: 1,
//         y: -4550,
//         x: 400,
//       }, "eighth"
//     )
//       ;

//     var seen1 = new ScrollMagic.Scene({
//       triggerElement: ".secondSection",
//       offset: -50,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 5000,
//       // ease: "power1.out",
//     })
//       .setTween(tween1)
//       .setPin(".secondSection")
//       .addTo(controller);

//     // *************************************************************************************
//     // *** Sixxth Section ***

//     $(".sixthSection").each(function () {
//       var tween2 = TweenMax.from($(this), 1, {
//         autoAlpha: 0,
//         y: "+=200",
//         x: "0",
//         ease: Linear.easeNone,
//       });

//       // build a scene
//       var scene2 = new ScrollMagic.Scene({
//         triggerElement: this,
//         triggerHook: 0.7,
//         offset: 0,
//         reverse: true,
//       })
//         .setTween(tween2)
//         .addTo(controller);
//     });
//     var tween3 = new TimelineMax();
//     tween3.fromTo(
//       ".Needle-nose",
//       1,
//       {
//         scale: 0,
//         y: -500,
//         x: 1500,
//       },
//       {
//         y: -500,
//         x: 200,
//         scale: 1,
//       }, "first"
//     )
//     tween3.to(".Adjustable", 1, {
//       scale: 0.5,
//       x: 200
//     }, "first"
//     )

//     //   .add(
//     //     TweenLite.fromTo(
//     //       ".Adjustable",
//     //       1,
//     //       {
//     //         opacity: 1,
//     //       },
//     //       {
//     //         opacity: 0,
//     //       }
//     //     )
//     //   );
//     var seen3 = new ScrollMagic.Scene({
//       triggerElement: ".sixthSection",
//       offset: -50,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 1000,
//       // ease: "power1.out",
//     })
//       .setTween(tween3)
//       .setPin(".sixthSection")
//       .addTo(controller);

//     // *************************************************************************************
//     // *** Seventh Section ***
//     var tween4 = new TimelineMax();
//     tween4.fromTo(
//       ".CUTTING",
//       1,
//       {
//         opacity: 1,
//       },
//       {
//         opacity: 0,
//       }, "first"
//     )
//     tween4.fromTo(
//       ".Cut",
//       1,
//       {
//         scale: 0,
//         y: -600,
//         x: 2000,
//       },
//       {
//         y: -900,
//         x: 200,
//         scale: 1,
//       }, "first"
//     )
//     tween4.to(".Cut", 1, {
//       y: -600,
//       x: -1500,
//       scale: 1,
//     }, "second"
//     )
//     tween4.fromTo(
//       ".How",
//       1,
//       {
//         scale: 0,
//         y: -1500,
//         x: 1500,
//       },
//       {
//         y: -1800,
//         x: 200,
//         scale: 1,
//       }, "second"
//     )
//     tween4.to(".How", 1, {
//       y: -1500,
//       x: -1500,
//       scale: 1,
//     }, "third"
//     )
//     tween4.fromTo(
//       ".Knives",
//       1,
//       {
//         scale: 0,
//         y: -2450,
//         x: 1500,
//       },
//       {
//         y: -2750,
//         x: 200,
//         scale: 1,
//       }, "third"
//     )

//     //   .add(
//     //     TweenLite.to(".Knives", 1, {
//     //       y: -2450,
//     //       x: -1800,
//     //       scale: 1,
//     //     })
//     // )
//     var seen4 = new ScrollMagic.Scene({
//       triggerElement: ".seventhSection",
//       offset: -50,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 2000,
//       // ease: "power1.out",
//     })
//       .setTween(tween4)
//       .setPin(".seventhSection")
//       .addTo(controller);

//     // *************************************************************************************
//     // *** Eighth Section ***
//     var tween5 = new TimelineMax();
//     tween5.fromTo(
//       ".eighthSectionPart.Screw",
//       1,
//       {
//         opacity: 1,
//       },
//       {
//         opacity: 0,
//       }, "first"
//     )
//     tween5.fromTo(
//       ".Shape",
//       1,
//       {
//         x: 2000,
//         y: -200,
//         scale: 0,
//       },
//       {
//         x: 100,
//         y: -600,
//         scale: 1,
//       }, "first"
//     )
//     tween5.to(".Shape", 1, {
//       //   y: -200,
//       x: -1500,
//       scale: 1,
//     }, "second"
//     )
//     tween5.fromTo(
//       ".Size",
//       1,
//       {
//         x: 1500,
//         y: -500,
//         scale: 0,
//       },
//       {
//         x: 250,
//         y: -970,
//         scale: 1,
//       }, "second"
//     )
//     tween5.to(".Size", 1, {
//       //   y: -300,
//       x: -1500,
//       scale: 1,
//     }, "third"
//     )
//     tween5.fromTo(
//       ".Handles",
//       1,
//       {
//         x: 1500,
//         y: -900,
//         scale: 0,
//       },
//       {
//         x: -150,
//         y: -1350,
//         scale: 1,
//       }, "third"
//     )

//     //   .add(
//     //     TweenLite.to(".Handles", 1, {
//     //       //   y: -400,
//     //       x: -1800,
//     //       scale: 1,
//     //     })
//     // )
//     var seen5 = new ScrollMagic.Scene({
//       triggerElement: ".eighthSection",
//       offset: -100,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 2000,
//       // ease: "power1.out",
//     })
//       .setTween(tween5)
//       .setPin(".eighthSection")
//       .addTo(controller);

//     // *************************************************************************************
//     // *** Ninth Section ***
//     var tween6 = new TimelineMax();
//     tween6.fromTo(
//       ".ninthSectionPart.Measuring",
//       1,
//       {
//         opacity: 1,
//       },
//       {
//         opacity: 0,
//       }, "first"
//     )
//     tween6.fromTo(
//       ".Tapes",
//       1,
//       {
//         x: 2000,
//         y: -200,
//         scale: 0,
//       },
//       {
//         x: -50,
//         y: -700,
//         scale: 1,
//       }, "first"
//     )
//     tween6.to(".Tapes", 1, {
//       //   y: -200,
//       x: -1500,
//       scale: 1,
//     }, "second"
//     )
//     tween6.fromTo(
//       ".What",
//       1,
//       {
//         x: 1500,
//         y: -800,
//         scale: 0,
//       },
//       {
//         x: -100,
//         y: -1100,
//         scale: 1,
//       }, "second"
//     )
//     tween6.to(".What", 1, {
//       //   y: -300,
//       x: -1500,
//       scale: 1,
//     }, "third"
//     )
//     tween6.fromTo(
//       ".Design",
//       1,
//       {
//         x: 1500,
//         y: -1400,
//         scale: 0,
//       },
//       {
//         x: -50,
//         y: -1550,
//         scale: 1,
//       }, "third"
//     )
//     tween6.to(".Design", 1, {
//       //   y: -400,
//       x: -1500,
//       scale: 1,
//     }, "fourth"
//     )
//     tween6.fromTo(
//       ".lastText",
//       1,
//       {
//         x: 1000,
//         y: -1600,
//         scale: 0,
//       },
//       {
//         x: 150,
//         y: -1800,
//         scale: 1,
//       }, "fourth"
//     )

//     var seen6 = new ScrollMagic.Scene({
//       triggerElement: ".ninthSection",
//       offset: -50,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 2000,
//       // ease: "power1.out",
//     })
//       .setTween(tween6)
//       .setPin(".ninthSection")
//       .addTo(controller);

//     // *************************************************************************************
//     // *** Tenth Section ***
//     var tween7 = new TimelineMax();
//     tween7.fromTo(
//       ".tenthSectionPart.Measuring",
//       1,
//       {
//         opacity: 1,
//       },
//       {
//         opacity: 0,
//       }, "first"
//     )
//     tween7.fromTo(
//       ".tenthSectionPart.What.lone",
//       1,
//       {
//         x: 2000,
//         y: -200,
//         scale: 0,
//       },
//       {
//         x: -100,
//         y: -500,
//         scale: 1,
//       }, "first"
//     )
//     tween7.to(".tenthSectionPart.What.lone", 1, {
//       //   y: -200,
//       x: -1500,
//       y: -500,

//       scale: 1,
//     }, "second"
//     )
//     tween7.fromTo(
//       ".tenthSectionPart.What.all",
//       1,
//       {
//         x: 1500,
//         y: -300,
//         scale: 0,
//       },
//       {
//         x: -100,
//         y: -700,
//         scale: 1,
//       }, "second"
//     )
//     tween7.to(".tenthSectionPart.What.all", 1, {
//       //   y: -300,
//       x: -1500,
//       scale: 1,
//     }, "third"
//     )
//     tween7.fromTo(
//       ".tenthSectionPart.Design.lone",
//       1,
//       {
//         x: 1500,
//         y: -600,
//         scale: 0,
//       },
//       {
//         x: -150,
//         y: -1100,
//         scale: 1,
//       }, "third"
//     )
//     tween7.to(".tenthSectionPart.Design.lone", 1, {
//       //   y: -400,
//       x: -1500,
//       y: -1100,
//       scale: 1,
//     }, "fourth"
//     )
//     tween7.fromTo(
//       ".tenthSectionPart.Design.all",
//       1,
//       {
//         x: 1500,
//         y: -900,
//         scale: 0,
//       },
//       {
//         x: -150,
//         y: -1350,
//         scale: 1,
//       }, "fourth"
//     )

//     var seen7 = new ScrollMagic.Scene({
//       triggerElement: ".tenthSection",
//       offset: -100,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 3000,
//       // ease: "power1.out",
//     })
//       .setTween(tween7)
//       .setPin(".tenthSection")
//       .addTo(controller);

//     // *************************************************************************************
//     // *** Eleventh Section ***
//     var tween8 = new TimelineMax();
//     tween8.fromTo(
//       ".eleventhSectionPart.CLAMPS",
//       1,
//       {
//         opacity: 1,
//       },
//       {
//         opacity: 0,
//         scale: 2,
//         x: 700,
//         y: -150,
//       }, "first"
//     )
//     tween8.fromTo(
//       ".loneImage1",
//       1,
//       {
//         rotation: 100,
//         scale: 0,
//         opacity: 0,
//         x: 500,
//         y: -950,
//       },
//       {
//         rotation: 0,
//         x: 150,
//         y: -350,
//         opacity: 1,
//         scale: 1,
//       }, "first"
//     )
//     tween8.to(".loneImage1", 1, {
//       //   y: -200,
//       scale: 0,
//       x: -1800,
//       rotation: -50,
//       y: -450,
//     }, "second"
//     )
//     tween8.fromTo(
//       ".loneImage2",
//       1,
//       {
//         rotation: -100,
//         scale: 0,
//         x: -2000,
//         y: -1750,
//       },
//       {
//         rotation: 0,
//         scale: 1,
//         x: 100,
//         y: -600,
//       }, "second"
//     )
//     tween8.to(".loneImage2", 1, {
//       scale: 0,
//       rotation: 50,
//       y: -800,
//       x: 1800,
//     }, "third"
//     )
//     tween8.fromTo(
//       ".loneImage3",
//       1,
//       {
//         scale: 0,
//         opacity: 0,
//         y: -1150,
//         x: -550,
//       },
//       {
//         scale: 1.5,
//         opacity: 1,
//         y: -1150,
//         x: 450,
//       }, "third"
//     )

//     var seen8 = new ScrollMagic.Scene({
//       triggerElement: ".eleventhSection",
//       offset: -50,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 3000,
//       // ease: "power1.out",
//     })
//       .setTween(tween8)
//       .setPin(".eleventhSection")
//       .addTo(controller);

//     // *************************************************************************************
//     // *** Twelfth Section ***
//     var tween9 = new TimelineMax();
//     tween9.fromTo(
//       ".GENERAL",
//       1,
//       {
//         opacity: 1,
//         y: 250,
//       },
//       {
//         opacity: 0,
//         scale: 0,
//         x: -600,
//         y: 250,
//       }, "first"
//     )
//     tween9.fromTo(
//       ".Claw",
//       1,
//       {
//         scale: 0,
//         x: 500,
//         y: -100,
//       },
//       {
//         scale: 1,
//         x: -100,
//         y: -100,
//       }, "first"
//     )
//     tween9.to(".Claw", 1, {
//       //   y: -200,
//       scale: 0,
//       x: -1800,
//       y: -100,
//     }, "second"
//     )
//     tween9.fromTo(
//       ".Machinist",
//       1,
//       {
//         scale: 0,
//         x: 500,
//         y: -500,
//       },
//       {
//         scale: 1,
//         x: -100,
//         y: -500,
//       }, "second"
//     )
//     tween9.to(".Machinist", 1, {
//       scale: 0,
//       y: -500,
//       x: -1800,
//     }, "third"
//     )
//     tween9.fromTo(
//       ".Axe ",
//       1,
//       {
//         scale: 0,
//         y: -900,
//         x: 500,
//       },
//       {
//         scale: 1,
//         y: -900,
//         x: -150,
//       }, "third"
//     )

//     var seen9 = new ScrollMagic.Scene({
//       triggerElement: ".twelfthSection",
//       offset: -50,
//       reverse: true,
//       triggerHook: "onLeave",
//       duration: 3000,
//       // ease: "power1.out",
//     })
//       .setTween(tween9)
//       .setPin(".twelfthSection")
//       .addTo(controller);
//   }
// });
