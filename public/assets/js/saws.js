var controller = new ScrollMagic.Controller();

$(document).ready(function () {
    // -------------------saws-scroll--------------------
    $('body').css('overflow-y', 'hidden')
    window.onload = function () {
        document.getElementById('nprogress').remove()
        setTimeout(function () {
            $('.cover-btn').addClass('active');
            setTimeout(function () {
                $('.swas-img').addClass('start-animated');
            }, 1000)
            setTimeout(function () {
                $('.swas-page').removeClass('first-action');
                $('.scroll-body').addClass('fade-in');
                $('.one-section').addClass('fade-out');

                $('.swas-img').addClass('fade-out');
                $('body').css('overflow-y', 'visible')

            }, 3700);
        }, 500)

    };

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
})