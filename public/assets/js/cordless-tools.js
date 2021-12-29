var controller = new ScrollMagic.Controller();
$(document).ready(function () {
    $('body').css('overflow-y', 'hidden')

    window.onload = function () {
        document.getElementById('nprogress').remove()
        const video = document.querySelector('.cordless-video');
        video.play();
        video.onended = (event) => {
            $('body').css('overflow-y', 'visible')
            $('.cordless-video').remove()
        };
    };
    
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