var controller = new ScrollMagic.Controller();
$(document).ready(function () {
    $('body').css('overflow-y', 'hidden')
    window.onload = function () {
        document.getElementById('nprogress').remove()
    $('body').css('overflow-y', 'visible')
       
    };

    /*---------------power tools-------------*/

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

   
 })