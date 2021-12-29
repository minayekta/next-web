var controller = new ScrollMagic.Controller();
$(document).ready(function () {
    $('body').css('overflow-y', 'hidden')
    window.onload = function () {
        document.getElementById('nprogress').remove()
        const video = document.querySelector('.drills-video');
        video.play();
        video.onended = (event) => {
            $('body').css('overflow-y', 'visible')
            $('.drills-video').remove()
        };
    };


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
                        // delay: 0.3,
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
                        x: -2370,

                    }
                )
            )
            .add(
                TweenLite.to(
                    ".textInCarousel3Independent2",
                    1,

                    {
                        delay: 0.3,
                        x: -2370,

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
                    1,

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
            )
            .add(
                TweenLite.to(
                    ".fifthCarouselVideo",
                    1,
                    {
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
            duration: 3000,
            // ease: "power1.out",
        })
            .setTween(tweenThirdCarousel)
            .setPin(".fifthCarousel")
            .addTo(controller);
        // *******
    } else {
        // **************   Drills First Image with Texts   ****************
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
                        y: 10
                    }, {
                    delay: 0.3,
                    x: -1500,
                    y: 10

                }
                )
            )
            .add(
                TweenLite.fromTo(
                    ".firstTextInCarousel3.part2",
                    1,

                    {
                        x: 1500,
                        y: -230
                    }, {
                    x: 0,
                    y: -230

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
                    x: -1550,
                    opacity: 1,
                    scale: 1
                }
                )
            )
            .add(
                TweenLite.to(
                    ".fifthCarouselVideo",
                    1,
                    {
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
