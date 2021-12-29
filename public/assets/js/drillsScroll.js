// var controller = new ScrollMagic.Controller();
// $(document).ready(function () {
//   if ($("body").width() > 1340 && $("body").width() < 1600) {
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
//             x: -2100,
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
//             x: -5900,
//           }
//         )
//       )
//       .add(
//         TweenLite.to(
//           ".textInCarousel3Independent1",
//           1,

//           {
//             x: -2200,
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
//             x: -2500,
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
//         TweenLite.to(
//           ".carousel1-image2",
//           1,

//           {
//             x: -2300,
//             rotation: 363,
//           }
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

//     //   var tweenFirstCarousel = new TimelineMax().add(
//     //     TweenLite.to(
//     //       ".firstCoupleElements",
//     //       1,

//     //       {
//     //         x: -2000,
//     //       }
//     //     )
//     //   );

//     //   var seenFirstCarousel = new ScrollMagic.Scene({
//     //     triggerElement: ".firstCarousel",
//     //     offset: -90,
//     //     reverse: true,
//     //     triggerHook: "onLeave",
//     //     duration: 2000,
//     //     // ease: "power1.out",
//     //   })
//     //     .setTween(tweenFirstCarousel)
//     //     .addTo(controller);

//     //   var tweenFirstCarousel = new TimelineMax().add(
//     //     TweenLite.fromTo(
//     //       ".secondCoupleElements",
//     //       1,

//     //       {
//     //         x: 2800,
//     //       },
//     //       {
//     //         x: -200,
//     //       }
//     //     )
//     //   );

//     //   var seenFirstCarousel = new ScrollMagic.Scene({
//     //     triggerElement: ".firstCarousel",
//     //     offset: -90,
//     //     reverse: true,
//     //     triggerHook: "onLeave",
//     //     duration: 3000,
//     //     // ease: "power1.out",
//     //   })
//     //     .setTween(tweenFirstCarousel)
//     //     .addTo(controller);

//     // // ***********************************************************

//     // var tweenFirstCarousel2 = new TimelineMax().add(
//     //   TweenLite.fromTo(
//     //     ".carousel1-image2",
//     //     1,
//     //     {
//     //       x: 6000,
//     //     },
//     //     {
//     //       x: -1600,
//     //     }
//     //   )
//     // );
//   }

//   // ********************
//   // Video Play On Scroll
//   // ********************

//   // var frameNumber = 0, // start video at frame 0
//   //   // lower numbers = faster playback
//   //   playbackConst = 1200,
//   //   // get page height from video duration
//   //   setHeight = document.getElementById("set-height"),
//   //   // select video element
//   //   vid = document.getElementById("v0");
//   // // var vid = $('#v0')[0]; // jquery option

//   // // dynamically set the page height according to video length
//   // vid.addEventListener("loadedmetadata", function () {
//   //   setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
//   // });

//   // // Use requestAnimationFrame for smooth playback
//   // function scrollPlay() {
//   //   var frameNumber = window.pageYOffset / playbackConst;
//   //   console.log(frameNumber);
//   //   vid.currentTime = frameNumber * 1.6;
//   //   if (window.pageYOffset >= 8) {
//   //     console.log("its 5 ");
//   //     // setHeight.style.display = "none";
//   //     // vid.style.display = "none";
//   //   }
//   //   window.requestAnimationFrame(scrollPlay);
//   // }

//   // window.requestAnimationFrame(scrollPlay);
// });







// ***************************9
var controller = new ScrollMagic.Controller();
$(document).ready(function () {
    if ($(window).width() <= 1024) {
        var transform_responsive = 'scale(325.5) translateX(33px)'
    } else {
        var transform_responsive = 'scale(325.5) translateX(45px)'
    }
    var homeTween1 = new TimelineMax()
    homeTween1.to('.ronixcompanysection-text', 1, {
        transform: transform_responsive,
    }, 'first')
    homeTween1.to('.ronixcompanysection-text-company', .5, {
        opacity: 0
    }, 'first')
    homeTween1.fromTo('.ronixcompanysection-backtextone', 1, {
        yPercent: -7,
        opacity: 0,
        xPercent: 20
    }, {
        yPercent: -7,
        opacity: .2,
        xPercent: 0
    }, 'second')
    homeTween1.fromTo('.ronixcompanysection-backtexttwo', 1, {
        yPercent: 35,
        opacity: 0,
        xPercent: -20
    }, {
        yPercent: 35,
        opacity: .2,
        xPercent: 0
    }, 'second')
    homeTween1.fromTo('.ronixcompanysection-header-title', 1, {
        opacity: 0,
        yPercent: 20
    }, {

        opacity: 1,
        yPercent: -183
    }, 'second')
    homeTween1.fromTo('.ronixcompanysection-img', 1, {
        opacity: 0,
        yPercent: 20
    }, {
        delay: .5,
        opacity: 1,
        yPercent: -31
    }, 'second')
    homeTween1.fromTo('.ronixcompanysection-paragraph', .5, {
        opacity: 0,
        yPercent: 50
    }, {
        opacity: 1,
        yPercent: -11
    })
    var secnehomeTween1 = new ScrollMagic.Scene({
        triggerElement: '.ronixcompanysection',
        offset: 0,
        reverse: true,
        triggerHook: 0,
        duration: 2000,

    })
        .setTween(homeTween1)
        .setPin('.ronixcompanysection')
        .addTo(controller);
    //     var homeTween2 = new TimelineMax()


    // var secnehomeTween2 = new ScrollMagic.Scene({
    //     triggerElement: '.ronixcompanysection-two',
    //     offset: 0,
    //     reverse: true,
    //     triggerHook: "onLeave",
    //     duration: 2000,

    // })
    //     .setTween(homeTween2)
    //     .setPin('.ronixcompanysection-two')
    //     .addTo(controller);

    // --------------Power tools js-------------------



    // -------------------saws-scroll--------------------
    let firset_section_title = '';
    let first_section_content = '';
    let first_section_title = '';
    if ($(window).width() > 1366) {
        firset_section_title = 200;
        first_section_content = 70;
        first_section_title = 300;
    } else {

        firset_section_title = 100;
        first_section_content = 0;
        first_section_title = 200;
    }
    var tween_swa_1 = new TimelineMax()
        .add(TweenLite.fromTo('.first-section-title', 1,
            {
                y: first_section_title,
            }, {
            y: firset_section_title,

        }
        ))
        .add(TweenLite.fromTo('.first-section-contnet ', 2,
            {
                y: 200,
                opacity: 0,
            }, {
            y: first_section_content,
            opacity: 1,

        }
        ))
        .add(TweenLite.to('.first-section-contnet ', 3,
            {
                x: '-100%',

            }
        ))

        .add(TweenLite.to('.first-section-contnet .three-item ', 4,
            {
                x: '-100%',

            }
        ))
        .add(TweenLite.to('.first-section-contnet .four-item ', 5,
            {
                x: '-200%',

            }
        ))
    var scene_swa_1 = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 8000,
    })

        .setTween(tween_swa_1)
        .setPin('.first-section')
        .addTo(controller);
    var tween_swa_1 = new TimelineMax()

        .add(TweenLite.to('.first-section-contnet .first-item', 3,
            {
                delay: 8,
                scale: 0.5
            }
        ))


        .add(TweenLite.to('.first-section-contnet .second-item ', 4,
            {
                delay: 8,
                scale: 0.5,
                opacity: 0,

            }
        ))
        .add(TweenLite.to('.first-section-contnet .three-item ', 5,
            {
                delay: 8,
                scale: 0.5,
                opacity: 0,

            }
        ))
    var scene_swa_1 = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 8000,
    })

        .setTween(tween_swa_1)
        .addTo(controller);











    var tween_swa_2 = new TimelineMax()
        .add(TweenLite.fromTo('.second-section .second-section-content', 1,
            {
                y: 300,
                opacity: 0,
            }, {
            y: 120,
            opacity: 1,

        }
        ))
        .add(TweenLite.to('.second-section .second-section-content', 2,
            {
                x: '-100%',
            }
        ))
        .add(TweenLite.to('.second-section .second-section-content', 3,
            {
                x: '-200%',
            }
        ))
        .add(TweenLite.to('.second-section .second-section-content', 3,
            {
                x: '-300%',
            }
        ))

    var scene_swa_2 = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 4000,
    })

        .setTween(tween_swa_2)
        .setPin('.second-section')
        .addTo(controller);
    var tween_swa_2 = new TimelineMax()

        .add(TweenLite.to('.second-section-content .first-item', 1,
            {
                delay: 3,
                rotate: '-30deg',
                opacity: 0
            }
        ))
        .add(TweenLite.to('.second-section-content .second-item', 2,
            {
                delay: 3,
                rotate: '-30deg',
                opacity: 0
            }
        ))
        .add(TweenLite.to('.second-section-content .three-item', 3,
            {
                delay: 3,
                rotate: '-30deg',
                opacity: 0
            }
        ))

    var scene_swa_2 = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 4000,
    })

        .setTween(tween_swa_2)
        .addTo(controller);









    var tween_swa_3 = new TimelineMax()
        .add(TweenLite.fromTo('.three-section-contnet ', 1,
            {
                y: 200,
                opacity: 0,
                scale: 2
            }, {
            y: first_section_content,
            opacity: 1,
            scale: 1

        }
        ))
        .add(TweenLite.to('.three-section-contnet ', 2,
            {
                x: '-101%',

            }
        ))

        .add(TweenLite.to('.three-section-contnet .three-item ', 3,
            {
                x: '-100%',

            }
        ))
        .add(TweenLite.to('.three-section-contnet .four-item ', 4,
            {
                x: '-200%',

            }
        ))
    var scene_swa_3 = new ScrollMagic.Scene({
        triggerElement: '.three-section',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 7000,
    })

        .setTween(tween_swa_3)
        .setPin('.three-section')
        .addTo(controller);

    var tween_swa_3 = new TimelineMax()
        .add(TweenLite.to('.three-section-contnet .second-item ', 4,
            {
                delay: 6,
                y: -100,
                opacity: 0,

            }
        ))
        .add(TweenLite.to('.three-section-contnet .three-item ', 5,
            {
                delay: 4,
                y: -100,
                opacity: 0,

            }
        ))
    var scene_swa_3 = new ScrollMagic.Scene({
        triggerElement: '.three-section',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 7000,
    })

        .setTween(tween_swa_3)
        .addTo(controller);













    var tween_swa_4 = new TimelineMax()
        .add(TweenLite.fromTo('.four-section .four-section-content', 1,
            {
                y: 300,
                opacity: 0,
            }, {
            y: 120,
            opacity: 1,

        }
        ))
        .add(TweenLite.to('.four-section .four-section-content', 2,
            {
                x: '-100%',
            }
        ))
        .add(TweenLite.to('.four-section .four-section-content', 3,
            {
                x: '-200%',
            }
        ))
        .add(TweenLite.to('.four-section .four-section-content', 3,
            {
                x: '-300%',
            }
        ))

    var scene_swa_4 = new ScrollMagic.Scene({
        triggerElement: '.four-section',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 4000,
    })

        .setTween(tween_swa_4)
        .setPin('.four-section')
        .addTo(controller);
    var tween_swa_4 = new TimelineMax()

        .add(TweenLite.to('.four-section-content .first-item', 1,
            {
                delay: 3,
                rotate: '-30deg',
                opacity: 0
            }
        ))
        .add(TweenLite.to('.four-section-content .second-item', 2,
            {
                delay: 3,
                rotate: '-30deg',
                opacity: 0
            }
        ))
        .add(TweenLite.to('.four-section-content .three-item', 3,
            {
                delay: 3,
                rotate: '-30deg',
                opacity: 0
            }
        ))

    var scene_swa_4 = new ScrollMagic.Scene({
        triggerElement: '.four-section',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 4000,
    })

        .setTween(tween_swa_4)
        .addTo(controller);






















    var tween_swa_5 = new TimelineMax()
        .add(TweenLite.fromTo('.five-section-contnet', 1,
            {
                y: 200,
                opacity: 0,
                scale: 2
            }, {
            y: first_section_content,
            opacity: 1,
            scale: 1

        }
        ))
        .add(TweenLite.to('.five-section-contnet ', 2,
            {
                x: '-101%',

            }
        ))

        .add(TweenLite.to('.five-section-contnet .three-item ', 3,
            {
                x: '-100%',

            }
        ))
        .add(TweenLite.to('.five-section-contnet .four-item ', 4,
            {
                x: '-200%',

            }
        ))

        .add(TweenLite.to('.five-section-contnet .four-item .long-content', 5,
            {

                x: '-100%',
            }
        ))

        .add(TweenLite.to('.five-section-contnet .four-item .long-content', 6,
            {

                x: '-200%',
            }
        ))
        .add(TweenLite.to('.five-section-contnet .four-item .long-content', 7,
            {

                x: '-300%',
            }
        ))

        .add(TweenLite.to('.five-section-contnet .five-item ', 7,
            {
                x: '-300%',

            }
        ))
    var scene_swa_5 = new ScrollMagic.Scene({
        triggerElement: '.five-section',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 12000,
    })

        .setTween(tween_swa_5)
        .setPin('.five-section')
        .addTo(controller);

    var tween_swa_5 = new TimelineMax()
        .add(TweenLite.to('.five-section-contnet .second-item ', 1,
            {
                delay: 4,
                y: 100,
                opacity: 0,

            }
        ))
        .add(TweenLite.to('.five-section-contnet .three-item ', 2,
            {
                delay: 4,
                y: 100,
                opacity: 0,
            }
        ))
        .add(TweenLite.to('.five-section-contnet .four-item .long-content .one-p', 3,
            {
                delay: 4,
                opacity: 0,
            }
        ))
        .add(TweenLite.to('.five-section-contnet .four-item .long-content .two-p', 4,
            {
                delay: 4,
                opacity: 0,
            }
        ))
        .add(TweenLite.to('.five-section-contnet .four-item .long-content .three-p', 5,
            {
                delay: 4,
                opacity: 0,
            }
        ))
        .add(TweenLite.to('.five-section-contnet .four-item ', 6,
            {
                delay: 4,
                y: 100,
                opacity: 0,

            }
        ))
    var scene_swa_5 = new ScrollMagic.Scene({
        triggerElement: '.five-section',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 12000,
    })

        .setTween(tween_swa_5)
        .addTo(controller);


    /* media PowerTools */
    if ($('body').width() <= 1366) {
        var Tween_power_tools = new TimelineMax()
        Tween_power_tools.to('.power-tools-title', 1, {
            opacity: 0
        })
        Tween_power_tools.to('.power-tools-tunnle', 1, {
            scale: 90,
            y: 2650,
            x: 1000
        })
        Tween_power_tools.fromTo('.power-tools-title-backwhite', 1, {
            scale: 3,
            opacity: 0,
            filter: 'blur(6px)'
        }, {

            scale: 1,
            opacity: 1,
            filter: 'blur(0)'
        })
        Tween_power_tools.to('.power-tools-scroll-down , .icon-scroll', 1, {
            opacity: 0
        })
        Tween_power_tools.to('.power-tools-title-backwhite', 1, {
            y: -180
        })
        Tween_power_tools.fromTo('.descriptionpowertools-image', .5, {

            opacity: 0,
            scale: .3
        }, {
            opacity: 1,
            scale: 1
        })
        Tween_power_tools.fromTo('.descriptionpowertools-description', .5, {
            opacity: 0,
            scale: .3
        }, {
            opacity: 1,
            scale: 1
        })
        var Tween_power_tools = new ScrollMagic.Scene({
            triggerElement: '.power-tools',
            reverse: true,
            triggerHook: 'onLeave',
            duration: 1000,
            ease: 'power1.out'
        })
            .setTween(Tween_power_tools)
            .setPin('.power-tools')
            .addTo(controller);
        var Tween_power_tools2 = new TimelineMax()
            .add(TweenLite.fromTo('.descriptionpowertools-text', .5, {
                opacity: 0,
                y: 500,
            }, {
                y: 50,
                opacity: 1
            }))


        var Tween_power_tools2 = new ScrollMagic.Scene({
            triggerElement: '.descriptionpowertools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 3000,

        })
            .setTween(Tween_power_tools2)
            .setPin('.descriptionpowertools')
            .addTo(controller);
        var Tween5 = new TimelineMax();
        Tween5.fromTo('.drills-select', 1,
            {
                x: ' 100%'
            },
            {
                x: '-200%'
            }
        )
        var scene5 = new ScrollMagic.Scene({
            triggerElement: '.drills',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
        })
            .setTween(Tween5)
            .setPin('.drills')
            .addTo(controller);
        var Tween5 = new TimelineMax();
        Tween5.fromTo('.drills-img1', 1,
            {
                opacity: 0,
            },
            {
                opacity: 1,
            }
        )
        var scene5 = new ScrollMagic.Scene({
            triggerElement: '.drills',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 600,
        })
            .setTween(Tween5)
            .addTo(controller);
        var Tween5 = new TimelineMax();
        Tween5.to('.drills-text-opacity-change', 1,

            {
                delay: 3,
                opacity: 0,
            }
        )
        var scene5 = new ScrollMagic.Scene({
            triggerElement: '.drills',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 1500,
        })
            .setTween(Tween5)
            .addTo(controller);
        var Tween5 = new TimelineMax();
        Tween5.fromTo('.drills-img2', 1,
            {
                opacity: 0,
                y: '-60%'
            },
            {
                delay: .5,
                opacity: 1,
                y: '0%'
            }
        )
        var scene5 = new ScrollMagic.Scene({
            triggerElement: '.drills',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 600,
        })
            .setTween(Tween5)
            .addTo(controller);
        var Tween5 = new TimelineMax();
        Tween5.fromTo('.drills-img3', 1,
            {
                opacity: 0,
                y: '50%'
            },
            {
                delay: 3,
                opacity: 1,
                y: '0%'
            }
        )
        var scene5 = new ScrollMagic.Scene({
            triggerElement: '.drills',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 800,
        })
            .setTween(Tween5)
            .addTo(controller);
        var Tween5 = new TimelineMax();
        Tween5.fromTo('.drills-video-text', 1,
            {
                x: ' 110%'
            },
            {
                delay: 3,
                x: '0'
            }
        )
        Tween5.to('.drills-img3', 1,
            {
                x: ' -100%'
            }
        )
        var scene5 = new ScrollMagic.Scene({
            triggerElement: '.drills',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
        })
            .setTween(Tween5)
            .addTo(controller);


        var Tween16 = new TimelineMax();
        Tween16.fromTo('.screwing-tools1', 3,
            {
                x: '100%'
            },
            {
                x: '-96%'
            }
        )
        Tween16.fromTo('.screwing-tools-scale-text', 1,
            {
                opacity: 0,
                scale: .5
            },
            {
                opacity: 1,
                scale: 1
            }
        )
        Tween16.to('.screwing-tools1', 3,
            {
                x: '-148%'
            }
        )
        Tween16.to('.Screwing3', 3,
            {
                opacity: 0
            }
        )
        Tween16.to('.screwing-tools1', 3,
            {
                x: '-200%'
            }
        )
        Tween16.fromTo('.screwing-tools-scale-text2', 1,
            {
                opacity: 0,
                scale: .5
            },
            {
                opacity: 1,
                scale: 1
            }
        )
        Tween16.to('.screwing-tools1', 3,
            {
                x: '-290%'
            }
        )
        Tween16.to('.screwing-tools-transform', 3,
            {
                x: '-150%'
            }
        )

        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.screwing-tools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 7000,
        })
            .setTween(Tween16)
            .setPin('.screwing-tools')
            .addTo(controller);
        var Tween16 = new TimelineMax();
        Tween16.fromTo('.Screwing4', 1,
            {
                opacity: 0,
                scale: .5
            },
            {
                delay: 22,
                opacity: 1,
                scale: 1
            }
        )

        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.screwing-tools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 5200,
        })
            .setTween(Tween16)
            .addTo(controller);

        var Tween16 = new TimelineMax();
        Tween16.fromTo('.screwing-tools-img1', 1,
            {
                scale: 1,
                opacity: 1
            },
            {
                delay: 0.1,
                scale: 1.3,
                opacity: 0
            }
        )

        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.screwing-tools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 1000,
        })
            .setTween(Tween16)
            .addTo(controller);


        var Tween16 = new TimelineMax();
        Tween16.fromTo('.screwing-tools-img2', 1,
            {
                y: '20%',
            },
            {
                delay: 1,
                y: '-0%',
            }
        )

        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.screwing-tools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 1000,
        })
            .setTween(Tween16)
            .addTo(controller);
        var Tween16 = new TimelineMax();
        Tween16.fromTo('.screwing-tools-img3', 1,
            {
                y: '-20%',
            },
            {
                delay: 1.2,
                y: '0%',
            }
        )

        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.screwing-tools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 1000,
        })
            .setTween(Tween16)
            .addTo(controller);
        var Tween16 = new TimelineMax();
        Tween16.to('.screwing-tools-title', 1,
            {
                opacity: 0
            }
        )

        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.screwing-tools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 300,
        })
            .setTween(Tween16)
            .addTo(controller);

        var Tween6 = new TimelineMax();
        Tween6.fromTo('.Grindingtools-select', 1,
            {
                x: '100%'
            },
            {
                x: '-200%'
            }
        )
        Tween6.fromTo('.Grindingtools-cut', 1,
            {
                opacity: 0,
                scale: .5
            },
            {
                opacity: 1,
                scale: 1
            }
        )


        Tween6.to('.Grindingtools-select', 1,
            {
                x: '-500%'
            }
        )

        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.Grindingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 4000,
        })
            .setTween(Tween6)
            .setPin('.Grindingtools')
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.to('.Grindingtools-img4', 1,
            {
                delay: 30,
                scale: .5
            }
        )
        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.Grindingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2900,
        })
            .setTween(Tween6)
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.to('.Grindingtools-img5', 1,
            {
                delay: 35,
                scale: .5
            }
        )
        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.Grindingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 3300,
        })
            .setTween(Tween6)
            .addTo(controller);

        var Tween6 = new TimelineMax();
        Tween6.to('.Grindingtools-img0', 1,
            {
                delay: .8,
                y: "10%",
                opacity: 0
            }
        )
        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.Grindingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 500,
        })
            .setTween(Tween6)
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.to('.Grindingtools-img', 1,
            {
                delay: 1.8,
                y: "20%",
                opacity: 0
            }
        )
        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.Grindingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 700,
        })
            .setTween(Tween6)
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.to('.Grindingtools-img3', 1,
            {
                delay: 2.8,
                y: "10%",
                opacity: 0
            }
        )
        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.Grindingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 900,
        })
            .setTween(Tween6)
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.to('.Grindingtools-change-opacity', 1,
            {
                delay: 1,
                opacity: 0
            }
        )
        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.Grindingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 500,
        })
            .setTween(Tween6)
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.to('.Grindingtools-img5', 1,
            {
                delay: 20,
                x: '-48%'
            }
        )
        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.Grindingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 4000,
        })
            .setTween(Tween6)
            .addTo(controller);


        var Tween7 = new TimelineMax();
        Tween7.fromTo('.SawingCuttingtools1', 1,
            {
                x: '101%'
            },
            {
                x: '-115%'
            }
        )
        Tween7.to('.SawingCuttingtools1-Video', .5,
            {
                x: '-50%'
            }
        )
        Tween7.to('.jigsaws-img', 1,
            {
                x: '-250%'
            }
        )
        Tween7.to('.jigsaws-img', 1,
            {
                opacity: 0,
                scale: .5
            }
        )
        Tween7.to('.SawingCuttingtools1', 1,
            {
                x: '-275%'
            }
        )
        Tween7.to('.jigsaws-img2', 1,
            {
                x: '-250%'
            }
        )
        Tween7.to('.jigsaws-img2', 1,
            {
                opacity: 0,
                scale: .5
            }
        )
        Tween7.to('.SawingCuttingtools1', 1,
            {
                x: '-435%'
            }
        )
        Tween7.to('.jigsaws-img3', 1,
            {
                x: '-250%'
            }
        )

        var scene7 = new ScrollMagic.Scene({
            triggerElement: '.SawingCuttingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 3000,
        })
            .setTween(Tween7)
            .setPin('.SawingCuttingtools')
            .addTo(controller);

        var Tween7 = new TimelineMax();
        Tween7.to('.SawingCuttingtools-title', .5,
            {
                opacity: 0
            }
        )
        var scene7 = new ScrollMagic.Scene({
            triggerElement: '.SawingCuttingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 300,
        })
            .setTween(Tween7)
            .addTo(controller);
        var Tween8 = new TimelineMax();
        Tween8.fromTo('.MeasuringSpraingTools1', 1,
            {
                x: '101%'
            },
            {
                x: '-15%'
            }
        )
        Tween8.to('.MeasuringSpraingTools-img1', 1,
            {
                x: '-260%'
            }
        )
        Tween8.to('.fade-out-in-bottom ,.MeasuringSpraingTools-img1', 1,
            {
                y: '50%',
                opacity: 0
            }
        )
        Tween8.to('.MeasuringSpraingTools1', 1,
            {
                x: '-180%'
            }
        )
        Tween8.fromTo('.MeasuringSpraingTools-text-opacity', 1,
            {
                opacity: 0,
                scale: .5
            },
            {
                opacity: 1,
                scale: 1
            }
        )
        Tween8.to('.MeasuringSpraingTools1', 1,
            {
                x: '-580%'
            }
        )
        Tween8.to('.MeasuringSpraingTools-img-transform', 1,
            {
                x: '-50%'
            }
        )
        var scene8 = new ScrollMagic.Scene({
            triggerElement: '.MeasuringSpraingTools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 3000,
        })
            .setTween(Tween8)
            .setPin('.MeasuringSpraingTools')
            .addTo(controller);

        var Tween8 = new TimelineMax();
        Tween8.to('.MeasuringSpraingTools-title', .5,
            {
                opacity: 0
            }
        )
        var scene8 = new ScrollMagic.Scene({
            triggerElement: '.MeasuringSpraingTools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 300,
        })
            .setTween(Tween8)
            .addTo(controller);

    }
    else {

        var Tween4 = new TimelineMax()
        Tween4.to('.power-tools-tunnle', 1, {
            scale: 90,
            y: 3700,
            x: 1500
        })
        Tween4.fromTo('.power-tools-title-backwhite', 1, {
            scale: 3,
            opacity: 0,
            filter: 'blur(6px)'
        }, {

            scale: 1.2,
            opacity: 1,
            filter: 'blur(0)'
        })
        Tween4.to('.power-tools-scroll-down , .icon-scroll', 1, {
            opacity: 0
        })
        Tween4.to('.power-tools-title-backwhite', 1, {
            y: -380
        })
        Tween4.fromTo('.descriptionpowertools-image', .5, {

            opacity: 0,
            scale: .3
        }, {
            opacity: 1,
            scale: 1
        })
        Tween4.fromTo('.descriptionpowertools-description', .5, {
            opacity: 0,
            scale: .3
        }, {
            opacity: 1,
            scale: 1
        })
        var scene4 = new ScrollMagic.Scene({
            triggerElement: '.power-tools',
            reverse: true,
            offset: 0,
            triggerHook: 'onLeave',
            duration: 2000,
            ease: 'power1.out'
        })
            .setTween(Tween4)
            .setPin('.power-tools')
            .addTo(controller);
        var Tween4 = new TimelineMax()
        Tween4.to('.power-tools-title', 1, {
            opacity: 0
        })
        var scene4 = new ScrollMagic.Scene({
            triggerElement: '.power-tools',
            reverse: true,
            triggerHook: 'onLeave',
            duration: 1000,
            ease: 'power1.out'
        })
            .setTween(Tween4)
            .addTo(controller);
        var Tween5 = new TimelineMax();
        Tween5.fromTo('.drills-select', 1,
            {
                x: ' 100%'
            },
            {
                x: '-183%'
            }
        )

        var scene5 = new ScrollMagic.Scene({
            triggerElement: '.drills',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
        })
            .setTween(Tween5)
            .setPin('.drills')
            .addTo(controller);
        var Tween5 = new TimelineMax();
        Tween5.fromTo('.drills-img1', 1,
            {
                opacity: 0,
            },
            {
                opacity: 1,
            }
        )
        var scene5 = new ScrollMagic.Scene({
            triggerElement: '.drills',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 600,
        })
            .setTween(Tween5)
            .addTo(controller);
        var Tween5 = new TimelineMax();
        Tween5.to('.drills-text-opacity-change', 1,

            {
                delay: 3,
                opacity: 0,
            }
        )
        var scene5 = new ScrollMagic.Scene({
            triggerElement: '.drills',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 1500,
        })
            .setTween(Tween5)
            .addTo(controller);
        var Tween5 = new TimelineMax();
        Tween5.fromTo('.drills-img2', 1,
            {
                opacity: 0,
                y: '-60%'
            },
            {
                delay: .5,
                opacity: 1,
                y: '0%'
            }
        )
        var scene5 = new ScrollMagic.Scene({
            triggerElement: '.drills',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 600,
        })
            .setTween(Tween5)
            .addTo(controller);
        var Tween5 = new TimelineMax();
        Tween5.fromTo('.drills-img3', 1,
            {
                opacity: 0,
                y: '50%'
            },
            {
                delay: 3,
                opacity: 1,
                y: '0%'
            }
        )

        var scene5 = new ScrollMagic.Scene({
            triggerElement: '.drills',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 800,
        })
            .setTween(Tween5)
            .addTo(controller);
        var Tween5 = new TimelineMax();

        Tween5.fromTo('.drills-video-text', 1,
            {
                x: ' 110%'
            },
            {
                delay: 3,
                x: '0'
            }
        )
        Tween5.to('.drills-img3', 1,
            {
                x: ' -100%'
            }
        )
        var scene5 = new ScrollMagic.Scene({
            triggerElement: '.drills',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
        })
            .setTween(Tween5)
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.fromTo('.screwing-tools1', 3,
            {
                x: '100%'
            },
            {
                x: '-96%'
            }
        )
        Tween6.fromTo('.screwing-tools-scale-text', 1,
            {
                opacity: 0,
                scale: .5
            },
            {
                opacity: 1,
                scale: 1
            }
        )
        Tween6.to('.screwing-tools1', 3,
            {
                x: '-150%'
            }
        )
        Tween6.to('.Screwing3', 3,
            {
                opacity: 0
            }
        )
        Tween6.to('.screwing-tools1', 3,
            {
                x: '-200%'
            }
        )
        Tween6.fromTo('.screwing-tools-scale-text2', 1,
            {
                opacity: 0,
                scale: .5
            },
            {
                opacity: 1,
                scale: 1
            }
        )
        Tween6.to('.screwing-tools1', 3,
            {
                x: '-283%'
            }
        )
        Tween6.to('.screwing-tools-transform', 3,
            {
                x: '-150%'
            }
        )
        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.screwing-tools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 7000,
        })
            .setTween(Tween6)
            .setPin('.screwing-tools')
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.fromTo('.Screwing4', 1,
            {
                opacity: 0,
                scale: .5
            },
            {
                delay: 22,
                opacity: 1,
                scale: 1
            }
        )

        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.screwing-tools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 5200,
        })
            .setTween(Tween6)
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.fromTo('.screwing-tools-img1', 1,
            {
                scale: 1,
                opacity: 1
            },
            {
                delay: .3,
                scale: 1.3,
                opacity: 0
            }
        )

        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.screwing-tools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 1000,
        })
            .setTween(Tween6)
            .addTo(controller);


        var Tween6 = new TimelineMax();
        Tween6.fromTo('.screwing-tools-img2', 1,
            {
                y: '10%',
            },
            {
                delay: 1,
                y: '-0%',
            }
        )

        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.screwing-tools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 1000,
        })
            .setTween(Tween6)
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.fromTo('.screwing-tools-img3', 1,
            {
                y: '-10%',
            },
            {
                delay: 1.2,
                y: '0%',
            }
        )

        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.screwing-tools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 1000,
        })
            .setTween(Tween6)
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.to('.screwing-tools-title', 1,
            {
                opacity: 0
            }
        )

        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.screwing-tools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 300,
        })
            .setTween(Tween6)
            .addTo(controller);

        var Tween6 = new TimelineMax();
        Tween6.fromTo('.Grindingtools-select', 1,
            {
                x: '100%'
            },
            {
                x: '-200%'
            }
        )
        Tween6.fromTo('.Grindingtools-cut', 1,
            {
                opacity: 0,
                scale: .5
            },
            {
                opacity: 1,
                scale: 1
            }
        )

        Tween6.to('.Grindingtools-select', 1,
            {
                x: '-480%'
            }
        )

        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.Grindingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 4000,
        })
            .setTween(Tween6)
            .setPin('.Grindingtools')
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.to('.Grindingtools-img4', 1,
            {
                delay: 30,
                scale: .8
            }
        )
        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.Grindingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2900,
        })
            .setTween(Tween6)
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.to('.Grindingtools-img5', 1,
            {
                delay: 35,
                scale: .8
            }
        )
        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.Grindingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 3300,
        })
            .setTween(Tween6)
            .addTo(controller);

        var Tween6 = new TimelineMax();
        Tween6.to('.Grindingtools-img0', 1,
            {
                delay: .8,
                y: "10%",
                opacity: 0
            }
        )
        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.Grindingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 500,
        })
            .setTween(Tween6)
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.to('.Grindingtools-img', 1,
            {
                delay: 1.8,
                y: "20%",
                opacity: 0
            }
        )
        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.Grindingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 700,
        })
            .setTween(Tween6)
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.to('.Grindingtools-img3', 1,
            {
                delay: 2.8,
                y: "10%",
                opacity: 0
            }
        )
        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.Grindingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 900,
        })
            .setTween(Tween6)
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.to('.Grindingtools-change-opacity', 1,
            {
                delay: 1,
                opacity: 0
            }
        )
        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.Grindingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 500,
        })
            .setTween(Tween6)
            .addTo(controller);
        var Tween6 = new TimelineMax();
        Tween6.to('.Grindingtools-img5', 1,
            {
                delay: 20,
                x: '-48%'
            }
        )
        var scene6 = new ScrollMagic.Scene({
            triggerElement: '.Grindingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 4000,
        })
            .setTween(Tween6)
            .addTo(controller);
        var Tween7 = new TimelineMax();
        Tween7.fromTo('.SawingCuttingtools1', 1,
            {
                x: '101%'
            },
            {
                x: '-115%'
            }
        )
        Tween7.to('.SawingCuttingtools1-Video', .5,
            {
                x: '-50%'
            }
        )
        Tween7.to('.jigsaws-img', 1,
            {
                x: '-250%'
            }
        )
        Tween7.to('.jigsaws-img', 1,
            {
                opacity: 0,
                scale: .5
            }
        )
        Tween7.to('.SawingCuttingtools1', 1,
            {
                x: '-275%'
            }
        )
        Tween7.to('.jigsaws-img2', 1,
            {
                x: '-250%'
            }
        )
        Tween7.to('.jigsaws-img2', 1,
            {
                opacity: 0,
                scale: .5
            }
        )
        Tween7.to('.SawingCuttingtools1', 1,
            {
                x: '-435%'
            }
        )
        Tween7.to('.jigsaws-img3', 1,
            {
                x: '-250%'
            }
        )

        var scene7 = new ScrollMagic.Scene({
            triggerElement: '.SawingCuttingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 3000,
        })
            .setTween(Tween7)
            .setPin('.SawingCuttingtools')
            .addTo(controller);

        var Tween7 = new TimelineMax();
        Tween7.to('.SawingCuttingtools-title', .5,
            {
                opacity: 0
            }
        )
        var scene7 = new ScrollMagic.Scene({
            triggerElement: '.SawingCuttingtools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 300,
        })
            .setTween(Tween7)
            .addTo(controller);
        var Tween8 = new TimelineMax();
        Tween8.fromTo('.MeasuringSpraingTools1', 1,
            {
                x: '101%'
            },
            {
                x: '-15%'
            }
        )
        Tween8.to('.MeasuringSpraingTools-img1', 1,
            {
                x: '-260%'
            }
        )
        Tween8.to('.fade-out-in-bottom ,.MeasuringSpraingTools-img1', 1,
            {
                y: '50%',
                opacity: 0
            }
        )
        Tween8.to('.MeasuringSpraingTools1', 1,
            {
                x: '-180%'
            }
        )
        Tween8.fromTo('.MeasuringSpraingTools-text-opacity', 1,
            {
                opacity: 0,
                scale: .5
            },
            {
                opacity: 1,
                scale: 1
            }
        )
        Tween8.to('.MeasuringSpraingTools1', 1,
            {
                x: '-580%'
            }
        )
        Tween8.to('.MeasuringSpraingTools-img-transform', 1,
            {
                x: '-50%'
            }
        )
        var scene8 = new ScrollMagic.Scene({
            triggerElement: '.MeasuringSpraingTools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 3000,
        })
            .setTween(Tween8)
            .setPin('.MeasuringSpraingTools')
            .addTo(controller);

        var Tween8 = new TimelineMax();
        Tween8.to('.MeasuringSpraingTools-title', .5,
            {
                opacity: 0
            }
        )
        var scene8 = new ScrollMagic.Scene({
            triggerElement: '.MeasuringSpraingTools',
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 300,
        })
            .setTween(Tween8)
            .addTo(controller);
    }

    /*---------------cordless tools-------------*/

    if ($(window).width() > 1366) {
        two_section_content = '-65%'

    } else {
        two_section_content = '-3%'

    }
    var Cordless_first = new TimelineMax();

    // Cordless_first.to('body', {
    //     overflowY: 'hidden',
    // })
    Cordless_first.fromTo('.cordless-title', 1,
        {
            opacity: 0,
        }, {
        delay: 4,
        opacity: 1,
        scale: 1
    })
    Cordless_first.fromTo('.cordless-box-img', 1,
        {
            opacity: 0,
            scale: 1.3
        }, {
        opacity: 1,
        scale: 1
    })
    Cordless_first.fromTo('.cordless-paragraph', 1,
        {
            opacity: 0,
            scale: 1.3
        }, {
        opacity: 1,
        scale: 1
    })
    // Cordless_first.to('body', {
    //     overflowY: 'visible'
    // })
    var Cordless_first_text = new TimelineMax();
    Cordless_first_text.fromTo('.text-two', 1,
        {
            opacity: 0,
            y: '50%'
        }, {
        opacity: 1,
        y: '-50%'
    })
    var Cordless_first_text = new ScrollMagic.Scene({
        triggerElement: '.SectionFirst',
        offset: 0,
        reverse: true,
        triggerHook: 'onLeave',
        duration: 300,
    })
        .setTween(Cordless_first_text)
        .setPin('.SectionFirst')
        .addTo(controller);
    var Cordless_first_text = new TimelineMax();
    Cordless_first_text.fromTo('.text-one', 1,
        {
            opacity: 1,
            x: '0%'
        }, {
        opacity: 0,
        x: '-20%'
    })
    var Cordless_first_text = new ScrollMagic.Scene({
        triggerElement: '.SectionFirst',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 300,
    })
        .setTween(Cordless_first_text)
        .addTo(controller);

    var Cordless_two_text = new TimelineMax();
    Cordless_two_text.fromTo('.cordless-tools-sectiontwo-title', 3,
        {
            opacity: 1,
        }, {
        opacity: 0,
        x: '-10%',
        y: '20%'
    })
    Cordless_two_text.fromTo('.cordless-battery-box', 5,
        {
            x: '120%'
        }, {
        x: '0%'
    })
    Cordless_two_text.to('.cordless-battery-box', 5,
        {
            scale: .3,
            opacity: 0
        })
    Cordless_two_text.fromTo('.cordless-battery-box2', 10,
        {
            x: '150%'
        }, {
        x: '-80%'
    })
    Cordless_two_text.to('.cordless-battery-box2-text-transform', 10,
        {
            opacity: 0
        }, 'first')
    Cordless_two_text.fromTo('.cordless-battery-box2-text-transform2', 10,
        {
            y: two_section_content,
            x: '150%'
        }, {
        y: two_section_content,
        x: '0%'
    }, 'first')
    Cordless_two_text.to('.cordless-battery-box2', 10,
        {
            scale: 1.3,
            opacity: 0
        })
    Cordless_two_text.fromTo('.cordless-battery-box3', 10,
        {
            x: '100%'
        }, {
        x: '-180%'
    })
    Cordless_two_text.to('.cordless-battery-box3', 10,
        {
            scale: .3,
            opacity: 0
        })
    Cordless_two_text.fromTo('.cordless-battery-box4', 10,
        {
            x: '50%'
        }, {
        x: '-280%'
    })
    Cordless_two_text.to('.another-text-transform', 10,
        {
            opacity: 0
        }, 'two')
    Cordless_two_text.fromTo('.another-text-transform2', 10,
        {
            y: '-80%',
            position: 'absolute',
            x: '120%'
        }, {
        y: '-80%',
        position: 'absolute',
        x: '-0%'
    }, 'two')
    Cordless_two_text.to('.another-text-transform2', 10,
        {
            opacity: 0
        }, 'three')
    Cordless_two_text.fromTo('.another-text-transform3', 10,
        {
            y: '-100%',
            position: 'absolute',
            x: '120%'
        }, {
        y: '-100%',
        position: 'absolute',
        x: '-0%'
    }, 'three')
    var Cordless_two_text = new ScrollMagic.Scene({
        triggerElement: '.cordless-tools-sectiontwo',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 4000,
    })
        .setTween(Cordless_two_text)
        .setPin('.cordless-tools-sectiontwo')
        .addTo(controller);
    var Cordless_three_text = new TimelineMax();
    Cordless_three_text.to('.cordless-tools-sectionthree-transform', 5,
        {
            delay: .2,
            opacity: 0,
            x: '-20%'
        }, 'one')
    Cordless_three_text.fromTo('.cordless-tools-sectionthree-transform2', 5,
        {
            y: '10%',
            opacity: 0
        }
        , {
            y: '-100%',
            opacity: 1
        }, 'one')
    Cordless_three_text.to('.cordless-tools-sectionthree-title', 2,
        {
            y: '-10%',
            opacity: 0
        })
    Cordless_three_text.to('.cordless-tools-sectionthree-img ,.cordless-tools-sectionthree-paragraph', 2,
        {
            y: '50%',
            opacity: 0
        })
    Cordless_three_text.fromTo('.cordless-tools-sectionthree-box-1', 5,
        {
            x: '150%',
        }
        , {
            x: '10%',
        })
    Cordless_three_text.to('.ampere-title ,.ampere-img', 5,
        {
            opacity: 0,
            y: '-50%'
        }
    )
    Cordless_three_text.to('.ampere-paragraph', 5,
        {
            opacity: 0,
            y: '50%'
        }
    )
    Cordless_three_text.fromTo('.cordless-tools-sectionthree-end', 5,
        {
            x: '10%',
            opacity: 0,
        }, {
        x: '-100%',
        opacity: 1,
    }
    )

    var Cordless_three_text = new ScrollMagic.Scene({
        triggerElement: '.cordless-tools-sectionthree',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 4000,
    })
        .setTween(Cordless_three_text)
        .setPin('.cordless-tools-sectionthree')
        .addTo(controller);
    var Cordless_four_text = new TimelineMax();
    Cordless_four_text.to('.sectionfoure-title', 3, {
        opacity: 0
    })
    Cordless_four_text.fromTo('.sectionfoure-box', 2,
        {
            opacity: 0
        }, {
        opacity: 1
    })
    Cordless_four_text.to('.sectionfoure-box', 3,
        {
            opacity: 0
        })
    Cordless_four_text.fromTo('.sectionfoure-box-img', 3,
        {
            x: '390%'
        }, {
        x: '230%'
    }, 'first')
    Cordless_four_text.to('.sectionfoure-box-img', 3,
        {
            scale: .3,
            opacity: 0
        })
    Cordless_four_text.fromTo('.sectionfoure-box-img1', 3,
        {
            x: '300%'
        }, {
        delay: 2,
        x: '120%'
    }, 'first')
    Cordless_four_text.to('.sectionfoure-box-img1', 5,
        {
            y: '-10%',
            opacity: 0
        })
    Cordless_four_text.fromTo('.sectionfoure-box-img2', 5,
        {
            x: '270%'
        }, {
        delay: 4.3,
        x: '-10%'
    }, 'first')
    Cordless_four_text.to('.sectionfoure-box-img2', 3,
        {
            y: '-10%',
            opacity: 0
        })

    Cordless_four_text.fromTo('.sectionfoure-box2', 3,
        {
            opacity: 0
        }, {
        opacity: 1,
    })
    Cordless_four_text.to('.sectionfoure-box2', 2,
        {
            opacity: 0
        })
    Cordless_four_text.fromTo('.sectionfoure-box3', 3,
        {
            opacity: 0
        }, {
        opacity: 1
    })
    Cordless_four_text.to('.sectionfoure-box3', 3,
        {
            opacity: 0
        })
    Cordless_four_text.fromTo('.sectionfoure-box-img3', 3,
        {
            x: '390%'
        }, {
        x: '-40%'
    })
    Cordless_four_text.to('.Chuck-img', 3,
        {
            x: "-200%"
        })
    Cordless_four_text.to('.sectionfoure-box-img3', 3,
        {
            opacity: 0
        }
    )
    Cordless_four_text.fromTo('.sectionfoure-box4', 1,
        {
            opacity: 0
        }, {
        opacity: 1
    })
    Cordless_four_text.to('.sectionfoure-box4-paragraph', 3,
        {
            opacity: 0
        })
    Cordless_four_text.fromTo('.sectionfoure-box4-paragraph2', 3,
        {
            opacity: 0
        }, {
        opacity: 1
    })
    Cordless_four_text.to('.sectionfoure-box4 , .sectionfoure-box4-paragraph2', 3,
        {
            opacity: 0
        })
    Cordless_four_text.fromTo('.sectionfoure-box5', 3,
        {
            opacity: 0,
            y: '30%',
        }, {
        opacity: 1,
        y: "5%",
    })
    var Cordless_four_text = new ScrollMagic.Scene({
        triggerElement: '.sectionfoure',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 5000,
    })
        .setTween(Cordless_four_text)
        .setPin('.sectionfoure')
        .addTo(controller);


    var Cordless_five_text = new TimelineMax();
    Cordless_five_text.to('.sectionfive-title', 3,
        {
            opacity: 0,
            scale: .3
        }, 'first')
    Cordless_five_text.fromTo('.sectionfive-box', 3,
        {
            opacity: 0,
            scale: .3
        }, {
        opacity: 1,
        scale: 1
    }, 'first')
    Cordless_five_text.to('.sectionfive-box', 3,
        {
            opacity: 0,
            scale: .3
        }, 'second')
    Cordless_five_text.fromTo('.sectionfive-box-content', 3,
        {
            x: '200%'
        }, {
        x: '100%'
    }, 'second')
    Cordless_five_text.fromTo('.sectionfive-img', 3,
        {
            x: '100%'
        }, {
        x: '-100%'
    })
    Cordless_five_text.to('.sectionfive-img ,.sectionfive-box-content ', 3,
        {
            y: '10%',
            opacity: 0
        })
    Cordless_five_text.fromTo('.sectionfive-box-content2', 3, {
        x: '0%'
    }, {
        x: "-100%"
    })
    Cordless_five_text.fromTo('.sectionfive-img2', 3,
        {
            x: '0'
        }, {
        x: '-300%'
    })
    Cordless_five_text.to('.sectionfive-img2 ,.sectionfive-box-content2 ', 3,
        {
            y: '10%',
            opacity: 0
        })
    Cordless_five_text.fromTo('.sectionfive-box-content3', 3, {
        x: '-150%'
    }, {
        x: "-300%"
    })
    Cordless_five_text.fromTo('.sectionfive-img3', 3,
        {
            x: '0'
        }, {
        x: '-500%'
    })

    var Cordless_five_text = new ScrollMagic.Scene({
        triggerElement: '.sectionfive',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 5000,
    })
        .setTween(Cordless_five_text)
        .setPin('.sectionfive')
        .addTo(controller);
    var Cordless_six_text = new TimelineMax();
    Cordless_six_text.to('.sectionsix-title', 3,
        {
            opacity: 0,
            scale: .3
        }, 'first')
    Cordless_six_text.fromTo('.sectionsix-box', 3,
        {
            opacity: 0,
            scale: .3
        }, {
        opacity: 1,
        scale: 1
    }, 'first')
    Cordless_six_text.to('.sectionsix-box', 3,
        {
            opacity: 0,
            scale: .3
        }, 'second')
    Cordless_six_text.fromTo('.sectionsix-box-content', 3,
        {
            x: '200%'
        }, {
        x: '100%'
    }, 'second')
    Cordless_six_text.fromTo('.sectionsix-img', 3,
        {
            x: '100%'
        }, {
        x: '-100%'
    })
    Cordless_six_text.to('.sectionsix-img ,.sectionsix-box-content ', 3,
        {
            y: '-10%',
            opacity: 0
        })
    Cordless_six_text.fromTo('.sectionsix-box-content2', 3, {
        x: '0%'
    }, {
        x: "-100%"
    })
    Cordless_six_text.fromTo('.sectionsix-img2', 3,
        {
            x: '0'
        }, {
        x: '-300%'
    })
    Cordless_six_text.to('.sectionsix-img2 ,.sectionsix-box-content2 ', 3,
        {
            y: '-10%',
            opacity: 0
        })
    Cordless_six_text.fromTo('.sectionsix-box-content3', 3, {
        x: '-150%'
    }, {
        x: "-300%"
    })
    Cordless_six_text.fromTo('.sectionsix-img3', 3,
        {
            x: '0'
        }, {
        x: '-500%'
    })
    Cordless_six_text.to('.sectionsix-img3 ,.sectionsix-box-content3 ', 3,
        {
            y: '-10%',
            opacity: 0
        })
    Cordless_six_text.fromTo('.sectionsix-box-content4', 3,
        {
            opacity: 0
        }, {
        opacity: 1
    })
    var Cordless_six_text = new ScrollMagic.Scene({
        triggerElement: '.sectionsix',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 5000,
    })
        .setTween(Cordless_six_text)
        .setPin('.sectionsix')
        .addTo(controller);

    var Cordless_seven_text = new TimelineMax();
    Cordless_seven_text.to('.sectionseven-title', 3,
        {
            opacity: 0,
            scale: .3
        }, 'first')
    Cordless_seven_text.fromTo('.sectionseven-box', 3,
        {
            opacity: 0,
            scale: .3
        }, {
        opacity: 1,
        scale: 1
    }, 'first')
    Cordless_seven_text.to('.sectionseven-box', 3,
        {
            opacity: 0,
            scale: .3
        }, 'second')
    Cordless_seven_text.fromTo('.sectionseven-box-content', 4, {
        x: '100%'
    }, {
        x: '0%'
    })
    Cordless_seven_text.fromTo('.sectionseven-img', 4,
        {
            x: '200%'
        }, {
        x: '0%'
    })
    Cordless_seven_text.to('.sectionseven-img ,.sectionseven-box-content', 4,
        {
            x: '200%'
        }, 'three')
    Cordless_seven_text.fromTo('.sectionseven-box-content2 ', 4,
        {
            x: '100%'
        }, {
        x: '-200%'
    }, 'three')
    Cordless_seven_text.fromTo('.sectionseven-img2', 4,
        {
            x: '100%'
        }, {
        x: '-200%'
    })
    Cordless_seven_text.to('.sectionseven-img2 ,.sectionseven-box-content2', 4,
        {
            x: '100%'
        }, 'fourth')
    Cordless_seven_text.fromTo('.sectionseven-box-content3 ', 4,
        {
            x: '100%'
        }, {
        x: '-400%'
    }, 'fourth')
    Cordless_seven_text.fromTo('.sectionseven-img3', 4,
        {
            x: '100%'
        }, {
        x: '-400%'
    })
    Cordless_seven_text.to('.sectionseven-img3 ,.sectionseven-box-content3', 4,
        {
            x: '100%'
        }, 'five')
    Cordless_seven_text.fromTo('.sectionseven-box-content4 ', 4,
        {
            x: '100%'
        }, {
        x: '-600%'
    }, 'five')
    Cordless_seven_text.fromTo('.sectionseven-img4', 4,
        {
            x: '200%'
        }, {
        x: '-600%'
    })
    Cordless_seven_text.to('.sectionseven-text-transform ', 4,
        {
            opacity: 0
        }, 'six')
    Cordless_seven_text.fromTo('.sectionseven-text-transform2 ', 4,
        {
            position: 'absolute',
            y: '-87%',
            x: '120%'
        }, {
        position: 'absolute',
        y: '-87%',
        x: '0%'
    }, 'six')
    var Cordless_seven_text = new ScrollMagic.Scene({
        triggerElement: '.sectionseven',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 6000,
    })
        .setTween(Cordless_seven_text)
        .setPin('.sectionseven')
        .addTo(controller);

    var Cordless_eight_text = new TimelineMax();
    Cordless_eight_text.fromTo('.sectioneight-box', 3,
        {
            opacity: 1,
            scale: 1
        }, {
        opacity: 0,
        scale: .3
    }, 'first')
    Cordless_eight_text.fromTo('.sectioneight-box1', 3,
        {
            opacity: 0,
            scale: .3
        }, {
        opacity: 1,
        scale: 1
    }, 'first')
    var Cordless_eight_text = new ScrollMagic.Scene({
        triggerElement: '.sectioneight',
        offset: 0,
        reverse: true,
        triggerHook: "onLeave",
        duration: 2000,
    })
        .setTween(Cordless_eight_text)
        .setPin('.sectioneight')
        .addTo(controller);

})







// ********************************************************************************************
// ********************************************************************************************
// ********************************************************************************************
// Drills
var controller = new ScrollMagic.Controller();
$(document).ready(function () {
    // console.log('arddddddd');
    if ($("body").width() > 1340 && $("body").width() < 1600) {
        var drillsTween1 = new TimelineMax().add(
            TweenLite.fromTo(
                ".firstDrillText.text1",
                1,

                {
                    x: 0,
                    y: 0,
                }, {
                x: -1300,
                y: 0,
            }, "first"
            )
        )
            .add(
                TweenLite.fromTo(
                    ".firstDrillText.text2",
                    1,
                    {
                        x: 1300,
                        y: -300,
                    },
                    {
                        x: 0,
                        y: -300,
                    }, "first"
                )
            )
            .add(
                TweenLite.fromTo(
                    ".firstContainer",
                    1,
                    {

                        y: -10,
                    },
                    {

                        y: -10,
                    }, "first"
                )
            );

        var seen1 = new ScrollMagic.Scene({
            triggerElement: ".firstContainer",
            offset: -100,
            reverse: true,
            triggerHook: "onLeave",
            duration: 1000,
            // ease: "power1.out",
        })
            .setTween(drillsTween1)
            .setPin(".firstContainer")
            .addTo(controller);

        // var drillsTween1 = new TimelineMax().add(
        //   TweenLite.fromTo(
        //     ".firstDrillText.text1",
        //     1,
        //     {
        //       x: 0,
        //     },
        //     {
        //       x: -2000,
        //     }
        //   )
        // );

        // var seen1 = new ScrollMagic.Scene({
        //   triggerElement: ".firstContainer",
        //   offset: -70,
        //   reverse: true,
        //   triggerHook: "onLeave",
        //   duration: 700,
        //   // ease: "power1.out",
        // })
        //   .setTween(drillsTween1)
        //   .addTo(controller);

        // **************   ***********************************  ****************
        // **************   Drills First Carousel ****************

        var tweenFirstCarousel = new TimelineMax()
            .add(
                TweenLite.to(
                    ".drillsWork",
                    1,

                    {
                        opacity: 0,
                    }
                )
            )
            .add(
                TweenLite.fromTo(
                    ".drillsWork",
                    3,
                    {
                        // x: 0,
                        y: 150,
                    },
                    {
                        // x: +2000,
                        // x: +2000,
                        y: 150,
                        opacity: 0,
                    }
                )
            );
        var seenFirstCarousel = new ScrollMagic.Scene({
            triggerElement: ".firstCarousel",
            offset: -70,
            reverse: true,
            triggerHook: "onLeave",
            duration: 4000,
            // ease: "power1.out",
        })
            .setTween(tweenFirstCarousel)
            // .setPin(".firstCarousel")
            .addTo(controller);
        // *******
        var tweenFirstCarousel = new TimelineMax()
            .add(
                TweenLite.to(
                    ".carousel1",
                    3,
                    {
                        y: 50,
                    },
                    {
                        y: 50,
                    }
                )
            )
            .add(
                TweenLite.fromTo(
                    ".carousel1",
                    3,
                    {
                        x: 2000,
                    },
                    {
                        x: 0,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".carousel1",
                    3,

                    {
                        x: -950,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".carImageWithHead",
                    1,

                    {
                        x: -1100,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".carousel1-image2",
                    1,

                    {
                        x: -2150,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".carousel1",
                    1,

                    {
                        delay: 0.1,
                        x: -3200,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".carousel1-image3 ",
                    1,

                    {
                        x: -1700,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".carousel1 ",
                    1,

                    {
                        delay: 0.1,
                        x: -5100,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".carousel1-image4 ",
                    1,

                    {
                        x: -1800,
                    }
                )
            );
        var seenFirstCarousel = new ScrollMagic.Scene({
            triggerElement: ".firstCarousel",
            offset: -70,
            reverse: true,
            triggerHook: "onLeave",
            duration: 5000,
            // ease: "power1.out",
        })
            .setTween(tweenFirstCarousel)
            .setPin(".firstCarousel")

            .addTo(controller);

        // **************   ***********************************  ****************
        // **************   Drills Second Carousel  ****************

        var tweenSecondCarousel = new TimelineMax()

            .add(
                TweenLite.to(
                    ".Carousel2SecondPart",
                    1,

                    {
                        y: -50,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".Carousel2SecondPart",
                    1,

                    {
                        x: -2150,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".secondCarouselCont",
                    1,

                    {
                        x: -2550,
                    }
                )
            );

        var seenSecondCarousel = new ScrollMagic.Scene({
            triggerElement: ".secondCarousel",
            offset: -80,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
            // ease: "power1.out",
        })
            .setTween(tweenSecondCarousel)
            .setPin(".secondCarousel")
            .addTo(controller);
        // *******

        // **************   ***********************************  ****************
        // **************   Drills Third Carousel  ****************

        var tweenThirdCarousel = new TimelineMax()
            .add(
                TweenLite.fromTo(
                    ".firstTextInCarousel3.part1",
                    1,

                    {
                        x: 0,
                    }, {
                    delay: 1,
                    x: -1500,
                }
                )
            )
            .add(
                TweenLite.fromTo(
                    ".firstTextInCarousel3.part2",
                    1,

                    {
                        x: 1500,
                        y: -180
                    }, {
                    x: 0,
                    y: -180

                }
                )
            )
            .add(
                TweenLite.to(
                    ".Carousel3SecondPart",
                    1,

                    {
                        delay: 0.3,
                        x: -2900,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".Carousel3SecondPart",
                    1,

                    {
                        delay: 0.3,

                        x: -4430,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".Carousel3SecondPart",
                    1,

                    {
                        delay: 0.3,

                        x: -5850,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".textInCarousel3Independent1",
                    1,

                    {
                        delay: 0.3,

                        x: -2200,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".Carousel3SecondPart",
                    1,

                    {
                        delay: 0.3,
                        x: -7800,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".textInCarousel3Independent2",
                    1,

                    {
                        delay: 0.3,

                        x: -2400,
                    }
                )
            );

        var seenThirdCarousel = new ScrollMagic.Scene({
            triggerElement: ".thirdCarousel",
            offset: -60,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
            // ease: "power1.out",
        })
            .setTween(tweenThirdCarousel)
            .setPin(".thirdCarousel")
            .addTo(controller);
        // *******

        // **************   ***********************************  ****************
        // **************   Drills Fourth Carousel  ****************

        var tweenThirdCarousel = new TimelineMax().add(
            TweenLite.fromTo(
                ".fourthCarouselImages",
                1,

                {
                    x: 2100,
                },
                {
                    x: -500,
                }
            )
        );
        var seenThirdCarousel = new ScrollMagic.Scene({
            triggerElement: ".fourthCarousel",
            offset: -70,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
            // ease: "power1.out",
        })
            .setTween(tweenThirdCarousel)
            .setPin(".fourthCarousel")
            .addTo(controller);
        // *******


        // **************   ***********************************  ****************
        // **************   Drills Fourth Carousel SedcondPart  ****************

        var tweenThirdCarouselSecond = new TimelineMax().add(
            TweenLite.fromTo(
                ".fourthCarouselImagesSecondPart",
                1,

                {
                    x: 2100,
                },
                {
                    x: -500,
                }
            )
        );
        var seenThirdCarouselSecond = new ScrollMagic.Scene({
            triggerElement: ".fourthCarouselSecondPart",
            offset: -70,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
            // ease: "power1.out",
        })
            .setTween(tweenThirdCarouselSecond)
            .setPin(".fourthCarouselSecondPart")
            .addTo(controller);
        // *******

        // **************   ***********************************  ****************
        // **************   Drills Fifth Carousel  ****************

        var tweenThirdCarousel = new TimelineMax()
            .add(
                TweenLite.fromTo(
                    ".fifthCarouselImages",
                    4,

                    {
                        x: 2100,
                    },
                    {
                        x: -2000,
                    }
                )
            )
            .add(
                TweenLite.fromTo(
                    ".fifthCarouselVideo",
                    4,

                    {
                        x: 1000,
                        opacity: 0,
                        scale: 0
                    }, {
                    y: -50,
                    x: -1700,
                    opacity: 1,
                    scale: 1
                }
                )
            );
        var seenThirdCarousel = new ScrollMagic.Scene({
            triggerElement: ".fifthCarousel",
            offset: 0,
            reverse: true,
            triggerHook: "onLeave",
            duration: 4000,
            // ease: "power1.out",
        })
            .setTween(tweenThirdCarousel)
            .setPin(".fifthCarousel")
            .addTo(controller);
        // *******
    } else {
        // **************   Drills First Image with Texts   ****************

        var drillsTween1 = new TimelineMax().add(
            TweenLite.fromTo(
                ".firstDrillText.text1",
                1,
                {
                    x: 0,
                },
                {
                    delay: 0.3,
                    x: -2000,
                }
            )
        );

        var seen1 = new ScrollMagic.Scene({
            triggerElement: ".firstContainer",
            offset: -70,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
            // ease: "power1.out",
        })
            .setTween(drillsTween1)
            .setPin(".firstContainer")
            .addTo(controller);

        var drillsTween1 = new TimelineMax().add(
            TweenLite.fromTo(
                ".firstDrillText.text2",
                1,
                {
                    x: 2000,
                    y: -300,
                },
                {
                    x: 0,
                    y: -300,
                }
            )
        );

        var seen1 = new ScrollMagic.Scene({
            triggerElement: ".firstContainer",
            offset: -70,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
            // ease: "power1.out",
        })
            .setTween(drillsTween1)
            .addTo(controller);


        // **************   ***********************************  ****************
        // **************   Drills First Carousel ****************

        var tweenFirstCarousel = new TimelineMax()
            .add(
                TweenLite.to(
                    ".drillsWork",
                    1,

                    {
                        opacity: 0,
                    }
                )
            )
            .add(
                TweenLite.fromTo(
                    ".drillsWork",
                    3,
                    {
                        // x: 0,
                        y: 300,
                    },
                    {
                        // x: +2000,
                        // x: +2000,
                        // y: -300,
                        opacity: 0,
                    }
                )
            );
        var seenFirstCarousel = new ScrollMagic.Scene({
            triggerElement: ".firstCarousel",
            offset: -70,
            reverse: true,
            triggerHook: "onLeave",
            duration: 4000,
            // ease: "power1.out",
        })
            .setTween(tweenFirstCarousel)
            .setPin(".firstCarousel")
            .addTo(controller);
        // *******
        var tweenFirstCarousel = new TimelineMax()
            .add(
                TweenLite.fromTo(
                    ".carousel1",
                    3,
                    {
                        x: 2000,
                    },
                    {
                        x: 0,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".carousel1",
                    3,

                    {
                        x: -950,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".carImageWithHead",
                    1,

                    {
                        x: -1000,
                        rotation: 180,
                    }
                )
            )
            .add(
                TweenLite.fromTo(
                    ".carousel1-image2",
                    1,

                    {
                        x: 1000,
                        width: '5px'
                    }, {
                    x: -2350,
                    width: '600px'
                }
                )
            )
            .add(
                TweenLite.to(
                    ".carousel1",
                    1,

                    {
                        x: -3250,
                        ease: "power4.out",
                    }
                )
            )
            .add(
                TweenLite.fromTo(
                    ".carousel1-image3 ",
                    1,

                    {
                        x: 1500,
                        width: "5px",
                    },
                    {
                        x: -1650,
                        width: "600px",
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".carousel1 ",
                    1,

                    {
                        x: -5250,
                    }
                )
            )
            .add(
                TweenLite.fromTo(
                    ".carousel1-image4 ",
                    1,

                    {
                        width: "5px",
                        x: 1000,
                    },
                    {
                        width: "600px",

                        x: -1650,
                    }
                )
            );
        var seenFirstCarousel = new ScrollMagic.Scene({
            triggerElement: ".firstCarousel",
            offset: -100,
            reverse: true,
            triggerHook: "onLeave",
            duration: 4000,
            // ease: "power1.out",
        })
            .setTween(tweenFirstCarousel)
            .addTo(controller);

        // **************   ***********************************  ****************
        // **************   Drills Second Carousel  ****************

        var tweenSecondCarousel = new TimelineMax()

            .add(
                TweenLite.fromTo(
                    ".Carousel2SecondPart",
                    1,

                    {
                        x: 1000,
                        scale: 0

                    }, {
                    x: -2150,
                    scale: 1

                }
                )
            )
            .add(
                TweenLite.to(
                    ".secondCarouselCont",
                    1,

                    {
                        x: -2550,
                    }
                )
            );

        var seenSecondCarousel = new ScrollMagic.Scene({
            triggerElement: ".secondCarousel",
            offset: -70,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
            // ease: "power1.out",
        })
            .setTween(tweenSecondCarousel)
            .setPin(".secondCarousel")
            .addTo(controller);
        // *******

        // **************   ***********************************  ****************
        // **************   Drills Third Carousel  ****************


        var tweenThirdCarousel = new TimelineMax()

            .add(
                TweenLite.fromTo(
                    ".firstTextInCarousel3.part1",
                    1,

                    {
                        x: 0,
                    }, {
                    delay: 0.3,
                    x: -1500,
                }
                )
            )
            .add(
                TweenLite.fromTo(
                    ".firstTextInCarousel3.part2",
                    1,

                    {
                        x: 1500,
                        y: -250
                    }, {
                    x: 0,
                    y: -250

                }
                )
            )
            .add(
                TweenLite.to(
                    ".Carousel3SecondPart",
                    1,

                    {
                        x: -1850,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".Carousel3SecondPart",
                    1,

                    {
                        x: -3620,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".Carousel3SecondPart",
                    1,

                    {
                        x: -5500,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".Carousel3SecondPart",
                    1,

                    {
                        x: -7000,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".textInCarousel3Independent1",
                    1,

                    {
                        x: -1900,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".Carousel3SecondPart",
                    1,

                    {
                        x: -8900,
                    }
                )
            )
            .add(
                TweenLite.to(
                    ".textInCarousel3Independent2",
                    1,

                    {
                        x: -2450,
                    }
                )
            );

        var seenThirdCarousel = new ScrollMagic.Scene({
            triggerElement: ".thirdCarousel",
            offset: -70,
            reverse: true,
            triggerHook: "onLeave",
            duration: 4000,
            // ease: "power1.out",
        })
            .setTween(tweenThirdCarousel)
            .setPin(".thirdCarousel")
            .addTo(controller);
        // *******

        // **************   ***********************************  ****************
        // **************   Drills Fourth Carousel  ****************

        var tweenThirdCarousel = new TimelineMax().add(
            TweenLite.fromTo(
                ".fourthCarouselImages",
                1,

                {
                    x: 2100,
                },
                {
                    x: -500,
                }
            )
        );
        var seenThirdCarousel = new ScrollMagic.Scene({
            triggerElement: ".fourthCarousel",
            offset: -70,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
            // ease: "power1.out",
        })
            .setTween(tweenThirdCarousel)
            .setPin(".fourthCarousel")
            .addTo(controller);
        // *******

        // **************   ***********************************  ****************
        // **************   Drills Fourth Carousel SedcondPart  ****************

        var tweenThirdCarouselSecond = new TimelineMax().add(
            TweenLite.fromTo(
                ".fourthCarouselImagesSecondPart",
                1,

                {
                    x: 2100,
                },
                {
                    x: -500,
                }
            )
        );
        var seenThirdCarouselSecond = new ScrollMagic.Scene({
            triggerElement: ".fourthCarouselSecondPart",
            offset: -70,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
            // ease: "power1.out",
        })
            .setTween(tweenThirdCarouselSecond)
            .setPin(".fourthCarouselSecondPart")
            .addTo(controller);
        // *******

        // **************   ***********************************  ****************
        // **************   Drills Fifth Carousel  ****************

        var tweenFifthCarousel = new TimelineMax()
            .add(
                TweenLite.fromTo(
                    ".fifthCarouselImages",

                    1,

                    {
                        x: 2100,
                    },
                    {
                        x: -2000,
                    }
                )
            )
            .add(
                TweenLite.fromTo(
                    ".fifthCarouselVideo",
                    1,

                    {
                        x: 1000,
                        opacity: 0,
                        scale: 0
                    }, {
                    x: -1550,
                    opacity: 1,
                    scale: 1
                }
                )
            );
        var seenFifthCarousel = new ScrollMagic.Scene({
            triggerElement: ".fifthCarousel",
            offset: -70,
            reverse: true,
            triggerHook: "onLeave",
            duration: 4000,
            // ease: "power1.out",
        })
            .setTween(tweenFifthCarousel)
            .setPin(".fifthCarousel")
            .addTo(controller);
        // *******
    }
});







// **********************************************************
// **********************************************************
// **********************************************************
// Hand Tools
var controller = new ScrollMagic.Controller();
$(document).ready(function () {
    if ($("body").width() > 1340 && $("body").width() < 1600) {
        // *** Second Section Moving Up ***
        $(".secondSection").each(function () {
            // build a tween
            var handToolsTween = TweenMax.from($(this), 1, {
                autoAlpha: 0,
                y: "+=200",
                x: "0",
                ease: Linear.easeNone,
            });

            // build a scene
            var scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.7,
                offset: 0,
                reverse: true,
            })
                .setTween(handToolsTween)
                .addTo(controller);
        });

        // *** Second Section ***
        var handToolsTween1 = new TimelineLite();
        handToolsTween1.fromTo(
            ".needle",
            1,
            {
                scale: 0,
                y: -500,
                x: 2000,
            },
            {
                y: -500,
                x: 200,
                scale: 1,
            }
        )

        handToolsTween1.fromTo(
            ".pliers",
            1,
            {
                opacity: 1,
            },
            {
                opacity: 0,
            },

        )

        handToolsTween1.to(
            ".needle",
            1,

            {
                scale: 0,
                y: -500,
                x: -800,
            },
            "first"
        )

        handToolsTween1
            .fromTo(
                ".Locking",
                1,
                {
                    scale: 0,
                    y: -850,
                    x: 1000,
                },
                {
                    scale: 1,
                    y: -850,
                    x: 50,
                },
                "first"
            )

        handToolsTween1.to(
            ".Locking",
            1,

            {
                y: -850,
                x: -850,
            }, "second"
        )

        handToolsTween1.fromTo(
            ".Diagonal",
            1,
            {
                scale: 0,
                y: -1200,
                x: 1000,
            },
            {
                scale: 1,
                y: -1200,
                x: 50,
            }, "second"
        )

        handToolsTween1.to(
            ".Diagonal",
            1,

            {
                y: -1200,
                x: -850,
            }, "third"
        )

        handToolsTween1.fromTo(
            ".Combination",
            1,
            {
                scale: 0,
                y: -1550,
                x: 1000,
            },
            {
                scale: 1,
                y: -1550,
                x: 50,
            }, "third"
        )

        handToolsTween1.to(
            ".Combination",
            1,

            {
                y: -1550,
                x: -850,
            }, "fourth"
        )

        handToolsTween1.fromTo(
            ".Tower",
            1,
            {
                scale: 0,
                y: -1900,
                x: 1000,
            },
            {
                scale: 1,
                y: -1900,
                x: 180,
            }, "fourth"
        )

        handToolsTween1.to(
            ".Tower",
            1,

            {
                y: -1900,
                x: -850,
            }, "fifth"
        )

        handToolsTween1.fromTo(
            ".Water",
            1,
            {
                scale: 0,
                y: -2250,
                x: 1000,
            },
            {
                scale: 1,
                y: -2250,
                x: 150,
            }, "fifth"
        )

        handToolsTween1.to(
            ".Water",
            1,

            {
                y: -2250,
                x: -1000,
            }, "sixth"
        )

        handToolsTween1.fromTo(
            ".Mini",
            1,
            {
                scale: 0,
                y: -2620,
                x: 1000,
            },
            {
                y: -2620,
                x: 100,
                scale: 1,
            }, "sixth"
        )

        handToolsTween1.to(
            ".Mini",
            1,

            {
                y: -2620,
                x: -850,
            }, "seventh"
        )

        handToolsTween1.fromTo(
            ".secondSectionVideo",
            1,
            {
                scale: 0.1,
                opacity: 0,
                y: -3100,
                x: 200,
            },
            {
                scale: 0.9,
                opacity: 1,
                y: -3050,
                x: 250,
            }, "seventh"
        )
            ;

        var seen1 = new ScrollMagic.Scene({
            triggerElement: ".secondSection",
            offset: -50,
            reverse: true,
            triggerHook: "onLeave",
            duration: 5000,
            // ease: "power1.out",
        })
            .setTween(handToolsTween1)
            .setPin(".secondSection")
            .addTo(controller);

        // *************************************************************************************
        // *** Sixxth Section ***

        $(".sixthSection").each(function () {
            var handToolsTween2 = TweenMax.from($(this), 1, {
                autoAlpha: 0,
                y: "+=200",
                x: "0",
                ease: Linear.easeNone,
            });

            // build a scene
            var scene2 = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.7,
                offset: 0,
                reverse: true,
            })
                .setTween(handToolsTween2)
                .addTo(controller);
        });
        var handToolsTween3 = new TimelineMax();
        handToolsTween3.fromTo(
            ".Needle-nose",
            1,
            {
                // scale: 0,
                y: -350,
                x: 2000,
            },
            {
                y: -350,
                x: 150,
                // scale: 1,
            }, "first"
        )
        handToolsTween3.to(".Adjustable", 1, {
            opacity: 0
        }, "first")
            ;
        //   .add(
        //     TweenLite.fromTo(
        //       ".Adjustable",
        //       1,
        //       {
        //         opacity: 1,
        //       },
        //       {
        //         opacity: 0,
        //       }
        //     )
        //   );
        var seen3 = new ScrollMagic.Scene({
            triggerElement: ".sixthSection",
            offset: -50,
            reverse: true,
            triggerHook: "onLeave",
            duration: 1000,
            // ease: "power1.out",
        })
            .setTween(handToolsTween3)
            .setPin(".sixthSection")
            .addTo(controller);

        // *************************************************************************************
        // *** Seventh Section ***
        var handToolsTween4 = new TimelineMax()
        handToolsTween4.fromTo(
            ".CUTTING",
            1,
            {
                opacity: 1,
            },
            {
                opacity: 0,
            }, "first"
        )

        handToolsTween4.fromTo(
            ".Cut",
            1,
            {
                scale: 0,
                y: -500,
                x: 2000,
            },
            {
                y: -600,
                x: 200,
                scale: 1,
            }, "first"
        )


        handToolsTween4.to(".Cut", 1, {
            y: -600,
            x: -1000,
            scale: 1,
        }, "second"
        )

        handToolsTween4.fromTo(
            ".How",
            1,
            {
                scale: 0,
                y: -1100,
                x: 1500,
            },
            {
                y: -1250,
                x: 100,
                scale: 1,
            }, "second"
        )
        handToolsTween4.to(".How", 1, {
            y: -1250,
            x: -1000,
            scale: 1,
        }, "third")

        handToolsTween4.fromTo(
            ".Knives",
            1,
            {
                scale: 0,
                y: -1500,
                x: 2000,
            },
            {
                y: -1850,
                x: 200,
                scale: 1,
            }, "third"
        )
            ;
        //   .add(
        //     TweenLite.to(".Knives", 1, {
        //       y: -1850,
        //       x: -1800,
        //       scale: 1,
        //     })
        // )
        var seen4 = new ScrollMagic.Scene({
            triggerElement: ".seventhSection",
            offset: -50,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
            // ease: "power1.out",
        })
            .setTween(handToolsTween4)
            .setPin(".seventhSection")
            .addTo(controller);

        // *************************************************************************************
        // *** Eighth Section ***
        var handToolsTween5 = new TimelineMax();
        handToolsTween5.fromTo(
            ".eighthSectionPart.Screw",
            1,
            {
                opacity: 1,
            },
            {
                opacity: 0,
            }, "first"
        )
        handToolsTween5.fromTo(
            ".Shape",
            1,
            {
                x: 1500,
                y: -200,
                scale: 0,
            },
            {
                x: -100,
                y: -450,
                scale: 1,
            }, "first"
        )
        handToolsTween5.to(".Shape", 1, {
            //   y: -200,
            x: -1000,
            scale: 1,
        }, "second"
        )
        handToolsTween5.fromTo(
            ".Size",
            1,
            {
                x: 1500,
                y: -300,
                scale: 0,
            },
            {
                x: -150,
                y: -720,
                scale: 1,
            }, "second"
        )
        handToolsTween5.to(".Size", 1, {
            //   y: -300,
            x: -1000,
            scale: 1,
        }, "third")
        handToolsTween5.fromTo(
            ".Handles",
            1,
            {
                x: 1500,
                y: -800,
                scale: 0,
            },
            {
                x: -150,
                y: -1000,
                scale: 1,
            }, "third"
        )
            ;
        //   .add(
        //     TweenLite.to(".Handles", 1, {
        //       //   y: -400,
        //       x: -1800,
        //       scale: 1,
        //     })
        // )
        var seen5 = new ScrollMagic.Scene({
            triggerElement: ".eighthSection",
            offset: -50,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
            // ease: "power1.out",
        })
            .setTween(handToolsTween5)
            .setPin(".eighthSection")
            .addTo(controller);

        // *************************************************************************************
        // *** Ninth Section ***
        var handToolsTween6 = new TimelineMax();
        handToolsTween6.fromTo(
            ".ninthSectionPart.Measuring",
            1,
            {
                opacity: 1,
            },
            {
                opacity: 0,
            }, "first"
        )
        handToolsTween6.fromTo(
            ".Tapes",
            1,
            {
                x: 2000,
                y: -200,
                scale: 0,
            },
            {
                x: 160,
                y: -450,
                scale: 1,
            }, "first"
        )
        handToolsTween6.to(".Tapes", 1, {
            //   y: -200,
            x: -1000,
            scale: 1,
        }, "second"
        )
        handToolsTween6.fromTo(
            ".What",
            1,
            {
                x: 1500,
                y: -500,
                scale: 0,
            },
            {
                x: 150,
                y: -750,
                scale: 1,
            }, "second"
        )
        handToolsTween6.to(".What", 1, {
            //   y: -300,
            x: -1000,
            scale: 1,
        }, "third")

        handToolsTween6.fromTo(
            ".Design",
            1,
            {
                x: 1500,
                y: -800,
                scale: 0,
            },
            {
                x: 150,
                y: -1050,
                scale: 1,
            }, "third"
        )
        handToolsTween6.to(".Design", 1, {
            //   y: -400,
            x: -1000,
            scale: 1,
        }, "fourth"
        )
        handToolsTween6.fromTo(
            ".lastText",
            1,
            {
                x: 1500,
                y: -800,
                scale: 0,
            },
            {
                x: 100,
                y: -1300,
                scale: 1,
            }, "fourth"
        )
            ;
        var seen6 = new ScrollMagic.Scene({
            triggerElement: ".ninthSection",
            offset: -70,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
            // ease: "power1.out",
        })
            .setTween(handToolsTween6)
            .setPin(".ninthSection")
            .addTo(controller);

        // *************************************************************************************
        // *** Tenth Section ***
        var handToolsTween7 = new TimelineMax();
        handToolsTween7.fromTo(
            ".tenthSectionPart.Measuring",
            1,
            {
                opacity: 1,
            },
            {
                opacity: 0,
            }, "first"
        )
        handToolsTween7.fromTo(
            ".tenthSectionPart.What.lone",
            1,
            {
                x: 2000,
                y: -200,
                scale: 0,
                opacity: 0,
            },
            {
                x: -250,
                y: -350,
                scale: 1,
                opacity: 1,
            }, "first"
        )
        handToolsTween7.to(".tenthSectionPart.What.lone", 1, {
            //   y: -200,
            x: -1000,
            // y: -500,

            scale: 1,
        }, "second")
        handToolsTween7.fromTo(
            ".tenthSectionPart.What.all",
            1,
            {
                x: 1500,
                y: -200,
                scale: 0,
            },
            {
                x: 10,
                y: -600,
                scale: 1,
            }, "second"
        )
        handToolsTween7.to(".tenthSectionPart.What.all", 1, {
            //   y: -300,
            x: -1000,
            scale: 1,
        }, "third")
        handToolsTween7.fromTo(
            ".tenthSectionPart.Design.lone",
            1,
            {
                x: 1500,
                y: -600,
                scale: 0,
            },
            {
                x: -250,
                y: -900,
                scale: 1,
            }, "third"
        )
        handToolsTween7.to(".tenthSectionPart.Design.lone", 1, {
            //   y: -400,
            x: -1000,
            // y: -1100,
            scale: 1,
        }, "fourth")
        handToolsTween7.fromTo(
            ".tenthSectionPart.Design.all",
            1,
            {
                x: 1000,
                y: -800,
                scale: 0,
            },
            {
                x: -100,
                y: -1100,
                scale: 1,
            }, "fourth"
        )
            ;
        var seen7 = new ScrollMagic.Scene({
            triggerElement: ".tenthSection",
            offset: -50,
            reverse: true,
            triggerHook: "onLeave",
            duration: 3000,
            // ease: "power1.out",
        })
            .setTween(handToolsTween7)
            .setPin(".tenthSection")
            .addTo(controller);

        // *************************************************************************************
        // *** Eleventh Section ***
        var handToolsTween8 = new TimelineMax();
        handToolsTween8.fromTo(
            ".eleventhSectionPart.CLAMPS",
            1,
            {
                opacity: 1,
            },
            {
                opacity: 0,
                scale: 2,
                x: 500,
                y: -50,
            }, "first"
        )
        handToolsTween8.fromTo(
            ".loneImage1",
            1,
            {
                // rotation: 100,
                scale: 0,
                opacity: 0,
                x: 500,
                y: -0,
            },
            {
                // rotation: 0,
                x: 50,
                y: -250,
                opacity: 1,
                scale: 1,
            }, "first"
        )
        handToolsTween8.to(".loneImage1", 1, {
            //   y: -200,
            scale: 0,
            x: -1000,
            rotation: -50,
            y: -150,
        }, "second"
        )
        handToolsTween8.fromTo(
            ".loneImage2",
            1,
            {
                scale: 0,
                x: 1000,
                y: -200,
            },
            {
                scale: 1,
                x: 50,
                y: -550,
            }, "second"
        )
        handToolsTween8.to(".loneImage2", 1, {
            scale: 0,
            rotation: -50,
            y: -400,
            x: -1000,
        }, "third")
        handToolsTween8.fromTo(
            ".loneImage3",
            1,
            {
                scale: 0,
                x: 1000,
                y: -500,
            },
            {
                scale: 1,
                x: 100,
                y: -800,
            }, "third"
        )
            ;
        var seen8 = new ScrollMagic.Scene({
            triggerElement: ".eleventhSection",
            offset: -50,
            reverse: true,
            triggerHook: "onLeave",
            duration: 3000,
            // ease: "power1.out",
        })
            .setTween(handToolsTween8)
            .setPin(".eleventhSection")
            .addTo(controller);

        // *************************************************************************************
        // *** Twelfth Section ***
        var handToolsTween9 = new TimelineMax();
        handToolsTween9.fromTo(
            ".GENERAL",
            1,
            {
                opacity: 1,
                x: 250,
                scale: 1.5,
                y: 150,
            },
            {
                opacity: 0,
                scale: 0,
                x: -600,
                y: 230,
            }, "first"
        )
        handToolsTween9.fromTo(
            ".Claw",
            1,
            {
                scale: 0,
                x: 500,
                y: -50,
            },
            {
                scale: 1,
                x: -100,
                y: -50,
            }, "first"
        )
        handToolsTween9.to(".Claw", 1, {
            //   y: -200,
            scale: 0,
            x: -1000,
            y: -50,
        }, "second"
        )
        handToolsTween9.fromTo(
            ".Machinist",
            1,
            {
                scale: 0,
                x: 500,
                y: -350,
            },
            {
                scale: 1,
                x: -100,
                y: -350,
            }, "second"
        )
        handToolsTween9.to(".Machinist", 1, {
            scale: 0,
            y: -350,
            x: -1000,
        }, "third"
        )
        handToolsTween9.fromTo(
            ".Axe ",
            1,
            {
                scale: 0,
                y: -650,
                x: 500,
            },
            {
                scale: 1,
                y: -650,
                x: -50,
            }, "third"
        )
            ;
        var seen9 = new ScrollMagic.Scene({
            triggerElement: ".twelfthSection",
            offset: -50,
            reverse: true,
            triggerHook: "onLeave",
            duration: 3000,
            // ease: "power1.out",
        })
            .setTween(handToolsTween9)
            .setPin(".twelfthSection")
            .addTo(controller);

    } else {
        // *** Second Section Moving Up ***
        $(".secondSection").each(function () {
            // build a handToolsTween
            var handToolsTween = TweenMax.from($(this), 1, {
                autoAlpha: 0,
                y: "+=200",
                x: "0",
                ease: Linear.easeNone,
            });

            // build a scene
            var scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.7,
                offset: 0,
                reverse: true,
            })
                .setTween(handToolsTween)
                .addTo(controller);
        });

        // *** Second Section ***
        var handToolsTween1 = new TimelineMax();
        handToolsTween1.fromTo(
            ".needle",
            1,
            {
                scale: 0,
                y: -700,
                x: 2000,
            },
            {
                y: -700,
                x: 200,
                scale: 1,
            }, "first"
        )
        handToolsTween1.fromTo(
            ".pliers",
            1,
            {
                opacity: 1,
            },
            {
                opacity: 0,
            }, "first"
        )
        handToolsTween1.to(
            ".needle",
            1,

            {
                scale: 0,
                y: -700,
                x: -1000,
            }, "second"
        )
        handToolsTween1.fromTo(
            ".Locking",
            1,
            {
                scale: 0,
                y: -1250,
                x: 1500,
            },
            {
                scale: 1,
                y: -1250,
                x: 150,
            }, "second"
        )
        handToolsTween1.to(
            ".Locking",
            1,

            {
                y: -1250,
                x: -1000,
            }, "third"
        )
        handToolsTween1.fromTo(
            ".Diagonal",
            1,
            {
                scale: 0,
                y: -1800,
                x: 1500,
            },
            {
                scale: 1,
                y: -1800,
                x: 50,
            }, "third"
        )
        handToolsTween1.to(
            ".Diagonal",
            1,

            {
                y: -1800,
                x: -1000,
            }, "fourth"
        )
        handToolsTween1.fromTo(
            ".Combination",
            1,
            {
                scale: 0,
                y: -2350,
                x: 1500,
            },
            {
                scale: 1,
                y: -2350,
                x: 50,
            }, "fourth"
        )
        handToolsTween1.to(
            ".Combination",
            1,

            {
                y: -2350,
                x: -1000,
            }, "fifth"
        )
        handToolsTween1.fromTo(
            ".Tower",
            1,
            {
                scale: 0,
                y: -2850,
                x: 1500,
            },
            {
                scale: 1,
                y: -2850,
                x: 50,
            }, "fifth"
        )
        handToolsTween1.to(
            ".Tower",
            1,

            {
                y: -2850,
                x: -1000,
            }, "sixth"
        )
        handToolsTween1.fromTo(
            ".Water",
            1,
            {
                scale: 0,
                y: -3400,
                x: 1500,
            },
            {
                scale: 1,
                y: -3400,
                x: 50,
            }, "sixth"
        )
        handToolsTween1.to(
            ".Water",
            1,

            {
                y: -3400,
                x: -1000,
            }, "seventh"
        )
        handToolsTween1.fromTo(
            ".Mini",
            1,
            {
                scale: 0,
                y: -3950,
                x: 1500,
            },
            {
                y: -3950,
                x: 50,
                scale: 1,
            }, "seventh"
        )
        handToolsTween1.to(
            ".Mini",
            1,

            {
                y: -3950,
                x: -1000,
            }, "eighth"
        )
        handToolsTween1.fromTo(
            ".secondSectionVideo",
            1,
            {
                scale: 0.1,
                opacity: 0,
                y: -4550,
                x: 400,
            },
            {
                scale: 0.9,
                opacity: 1,
                y: -4450,
                x: 400,
            }, "eighth"
        )
            ;

        var seen1 = new ScrollMagic.Scene({
            triggerElement: ".secondSection",
            offset: -50,
            reverse: true,
            triggerHook: "onLeave",
            duration: 5000,
            // ease: "power1.out",
        })
            .setTween(handToolsTween1)
            .setPin(".secondSection")
            .addTo(controller);

        // *************************************************************************************
        // *** Sixxth Section ***

        $(".sixthSection").each(function () {
            var handToolsTween2 = TweenMax.from($(this), 1, {
                autoAlpha: 0,
                y: "+=200",
                x: "0",
                ease: Linear.easeNone,
            });

            // build a scene
            var scene2 = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.7,
                offset: 0,
                reverse: true,
            })
                .setTween(handToolsTween2)
                .addTo(controller);
        });
        var handToolsTween3 = new TimelineMax();
        handToolsTween3.fromTo(
            ".Needle-nose",
            1,
            {
                scale: 0,
                y: -500,
                x: 1500,
            },
            {
                y: -500,
                x: 200,
                scale: 1,
            }, "first"
        )
        handToolsTween3.to(".Adjustable", 1, {
            scale: 0.5,
            x: 200
        }, "first"
        )

        //   .add(
        //     TweenLite.fromTo(
        //       ".Adjustable",
        //       1,
        //       {
        //         opacity: 1,
        //       },
        //       {
        //         opacity: 0,
        //       }
        //     )
        //   );
        var seen3 = new ScrollMagic.Scene({
            triggerElement: ".sixthSection",
            offset: -50,
            reverse: true,
            triggerHook: "onLeave",
            duration: 1000,
            // ease: "power1.out",
        })
            .setTween(handToolsTween3)
            .setPin(".sixthSection")
            .addTo(controller);

        // *************************************************************************************
        // *** Seventh Section ***
        var handToolsTween4 = new TimelineMax();
        handToolsTween4.fromTo(
            ".CUTTING",
            1,
            {
                opacity: 1,
            },
            {
                opacity: 0,
            }, "first"
        )
        handToolsTween4.fromTo(
            ".Cut",
            1,
            {
                scale: 0,
                y: -600,
                x: 2000,
            },
            {
                y: -900,
                x: 200,
                scale: 1,
            }, "first"
        )
        handToolsTween4.to(".Cut", 1, {
            y: -600,
            x: -1500,
            scale: 1,
        }, "second"
        )
        handToolsTween4.fromTo(
            ".How",
            1,
            {
                scale: 0,
                y: -1500,
                x: 1500,
            },
            {
                y: -1800,
                x: 200,
                scale: 1,
            }, "second"
        )
        handToolsTween4.to(".How", 1, {
            y: -1500,
            x: -1500,
            scale: 1,
        }, "third"
        )
        handToolsTween4.fromTo(
            ".Knives",
            1,
            {
                scale: 0,
                y: -2450,
                x: 1500,
            },
            {
                y: -2750,
                x: 200,
                scale: 1,
            }, "third"
        )

        //   .add(
        //     TweenLite.to(".Knives", 1, {
        //       y: -2450,
        //       x: -1800,
        //       scale: 1,
        //     })
        // )
        var seen4 = new ScrollMagic.Scene({
            triggerElement: ".seventhSection",
            offset: -50,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
            // ease: "power1.out",
        })
            .setTween(handToolsTween4)
            .setPin(".seventhSection")
            .addTo(controller);

        // *************************************************************************************
        // *** Eighth Section ***
        var handToolsTween5 = new TimelineMax();
        handToolsTween5.fromTo(
            ".eighthSectionPart.Screw",
            1,
            {
                opacity: 1,
            },
            {
                opacity: 0,
            }, "first"
        )
        handToolsTween5.fromTo(
            ".Shape",
            1,
            {
                x: 2000,
                y: -200,
                scale: 0,
            },
            {
                x: -100,
                y: -600,
                scale: 1,
            }, "first"
        )
        handToolsTween5.to(".Shape", 1, {
            //   y: -200,
            x: -1500,
            scale: 1,
        }, "second"
        )
        handToolsTween5.fromTo(
            ".Size",
            1,
            {
                x: 1500,
                y: -500,
                scale: 0,
            },
            {
                x: 50,
                y: -970,
                scale: 1,
            }, "second"
        )
        handToolsTween5.to(".Size", 1, {
            //   y: -300,
            x: -1500,
            scale: 1,
        }, "third"
        )
        handToolsTween5.fromTo(
            ".Handles",
            1,
            {
                x: 1500,
                y: -900,
                scale: 0,
            },
            {
                x: -150,
                y: -1350,
                scale: 1,
            }, "third"
        )

        //   .add(
        //     TweenLite.to(".Handles", 1, {
        //       //   y: -400,
        //       x: -1800,
        //       scale: 1,
        //     })
        // )
        var seen5 = new ScrollMagic.Scene({
            triggerElement: ".eighthSection",
            offset: -100,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
            // ease: "power1.out",
        })
            .setTween(handToolsTween5)
            .setPin(".eighthSection")
            .addTo(controller);

        // *************************************************************************************
        // *** Ninth Section ***
        var handToolsTween6 = new TimelineMax();
        handToolsTween6.fromTo(
            ".ninthSectionPart.Measuring",
            1,
            {
                opacity: 1,
            },
            {
                opacity: 0,
            }, "first"
        )
        handToolsTween6.fromTo(
            ".Tapes",
            1,
            {
                x: 2000,
                y: -200,
                scale: 0,
            },
            {
                x: 10,
                y: -700,
                scale: 1,
            }, "first"
        )
        handToolsTween6.to(".Tapes", 1, {
            //   y: -200,
            x: -1500,
            scale: 1,
        }, "second"
        )
        handToolsTween6.fromTo(
            ".What",
            1,
            {
                x: 1500,
                y: -800,
                scale: 0,
            },
            {
                x: 10,
                y: -1100,
                scale: 1,
            }, "second"
        )
        handToolsTween6.to(".What", 1, {
            //   y: -300,
            x: -1500,
            scale: 1,
        }, "third"
        )
        handToolsTween6.fromTo(
            ".Design",
            1,
            {
                x: 1500,
                y: -1400,
                scale: 0,
            },
            {
                x: 10,
                y: -1550,
                scale: 1,
            }, "third"
        )
        handToolsTween6.to(".Design", 1, {
            //   y: -400,
            x: -1500,
            scale: 1,
        }, "fourth"
        )
        handToolsTween6.fromTo(
            ".lastText",
            1,
            {
                x: 1000,
                y: -1600,
                scale: 0,
            },
            {
                x: 150,
                y: -1800,
                scale: 1,
            }, "fourth"
        )

        var seen6 = new ScrollMagic.Scene({
            triggerElement: ".ninthSection",
            offset: -50,
            reverse: true,
            triggerHook: "onLeave",
            duration: 2000,
            // ease: "power1.out",
        })
            .setTween(handToolsTween6)
            .setPin(".ninthSection")
            .addTo(controller);

        // *************************************************************************************
        // *** Tenth Section ***
        var handToolsTween7 = new TimelineMax();
        handToolsTween7.fromTo(
            ".tenthSectionPart.Measuring",
            1,
            {
                opacity: 1,
            },
            {
                opacity: 0,
            }, "first"
        )
        handToolsTween7.fromTo(
            ".tenthSectionPart.What.lone",
            1,
            {
                x: 2000,
                y: -200,
                scale: 0,
            },
            {
                x: -100,
                y: -500,
                scale: 1,
            }, "first"
        )
        handToolsTween7.to(".tenthSectionPart.What.lone", 1, {
            //   y: -200,
            x: -1500,
            y: -500,

            scale: 1,
        }, "second"
        )
        handToolsTween7.fromTo(
            ".tenthSectionPart.What.all",
            1,
            {
                x: 1500,
                y: -300,
                scale: 0,
            },
            {
                x: -100,
                y: -700,
                scale: 1,
            }, "second"
        )
        handToolsTween7.to(".tenthSectionPart.What.all", 1, {
            //   y: -300,
            x: -1500,
            scale: 1,
        }, "third"
        )
        handToolsTween7.fromTo(
            ".tenthSectionPart.Design.lone",
            1,
            {
                x: 1500,
                y: -600,
                scale: 0,
            },
            {
                x: -150,
                y: -1100,
                scale: 1,
            }, "third"
        )
        handToolsTween7.to(".tenthSectionPart.Design.lone", 1, {
            //   y: -400,
            x: -1500,
            y: -1100,
            scale: 1,
        }, "fourth"
        )
        handToolsTween7.fromTo(
            ".tenthSectionPart.Design.all",
            1,
            {
                x: 1500,
                y: -900,
                scale: 0,
            },
            {
                x: -150,
                y: -1350,
                scale: 1,
            }, "fourth"
        )

        var seen7 = new ScrollMagic.Scene({
            triggerElement: ".tenthSection",
            offset: -100,
            reverse: true,
            triggerHook: "onLeave",
            duration: 3000,
            // ease: "power1.out",
        })
            .setTween(handToolsTween7)
            .setPin(".tenthSection")
            .addTo(controller);

        // *************************************************************************************
        // *** Eleventh Section ***
        var handToolsTween8 = new TimelineMax();
        handToolsTween8.fromTo(
            ".eleventhSectionPart.CLAMPS",
            1,
            {
                opacity: 1,
            },
            {
                opacity: 0,
                scale: 2,
                x: 700,
                y: -150,
            }, "first"
        )
        handToolsTween8.fromTo(
            ".loneImage1",
            1,
            {
                rotation: 100,
                scale: 0,
                opacity: 0,
                x: 500,
                y: -950,
            },
            {
                rotation: 0,
                x: 150,
                y: -350,
                opacity: 1,
                scale: 1,
            }, "first"
        )
        handToolsTween8.to(".loneImage1", 1, {
            //   y: -200,
            scale: 0,
            x: -1800,
            rotation: -50,
            y: -450,
        }, "second"
        )
        handToolsTween8.fromTo(
            ".loneImage2",
            1,
            {
                rotation: -100,
                scale: 0,
                x: -2000,
                y: -1750,
            },
            {
                rotation: 0,
                scale: 1,
                x: 100,
                y: -600,
            }, "second"
        )
        handToolsTween8.to(".loneImage2", 1, {
            scale: 0,
            rotation: 50,
            y: -800,
            x: 1800,
        }, "third"
        )
        handToolsTween8.fromTo(
            ".loneImage3",
            1,
            {
                scale: 0,
                opacity: 0,
                y: -1150,
                x: -550,
            },
            {
                scale: 1.5,
                opacity: 1,
                y: -1150,
                x: 450,
            }, "third"
        )

        var seen8 = new ScrollMagic.Scene({
            triggerElement: ".eleventhSection",
            offset: -50,
            reverse: true,
            triggerHook: "onLeave",
            duration: 3000,
            // ease: "power1.out",
        })
            .setTween(handToolsTween8)
            .setPin(".eleventhSection")
            .addTo(controller);

        // *************************************************************************************
        // *** Twelfth Section ***
        var handToolsTween9 = new TimelineMax();
        handToolsTween9.fromTo(
            ".GENERAL",
            1,
            {
                opacity: 1,
                y: 250,
            },
            {
                opacity: 0,
                scale: 0,
                x: -600,
                y: 250,
            }, "first"
        )
        handToolsTween9.fromTo(
            ".Claw",
            1,
            {
                scale: 0,
                x: 500,
                y: -100,
            },
            {
                scale: 1,
                x: -100,
                y: -100,
            }, "first"
        )
        handToolsTween9.to(".Claw", 1, {
            //   y: -200,
            scale: 0,
            x: -1800,
            y: -100,
        }, "second"
        )
        handToolsTween9.fromTo(
            ".Machinist",
            1,
            {
                scale: 0,
                x: 500,
                y: -500,
            },
            {
                scale: 1,
                x: -100,
                y: -500,
            }, "second"
        )
        handToolsTween9.to(".Machinist", 1, {
            scale: 0,
            y: -500,
            x: -1800,
        }, "third"
        )
        handToolsTween9.fromTo(
            ".Axe ",
            1,
            {
                scale: 0,
                y: -900,
                x: 500,
            },
            {
                scale: 1,
                y: -900,
                x: -150,
            }, "third"
        )

        var seen9 = new ScrollMagic.Scene({
            triggerElement: ".twelfthSection",
            offset: -50,
            reverse: true,
            triggerHook: "onLeave",
            duration: 3000,
            // ease: "power1.out",
        })
            .setTween(handToolsTween9)
            .setPin(".twelfthSection")
            .addTo(controller);
    }
});
