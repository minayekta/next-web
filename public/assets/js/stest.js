var controller = new ScrollMagic.Controller();
$(document).ready(function () {
  var tween1 = new TimelineMax().add(
    TweenLite.fromTo(
      ".-german-",
      1,
      {
        x: 1300,
        scale: 0,
        opacity: 1,
      },
      {
        x: 100,
        scale: 3,
        opacity: 0,
      }
    )
  );
  // .add(
  //   TweenLite.to(".-german-", 1, {
  //     // y: -600,
  //     // opacity: 0,
  //   })
  // );

  // var tween1 = gsap.to(
  //   ".-german-",

  //   {
  //     x: 360,
  //     // rotation: 360,
  //     // duration: 7,
  //     ease: "ease",
  //   }
  // );

  var seen1 = new ScrollMagic.Scene({
    triggerElement: ".-companysection-body",
    offset: 0,
    reverse: true,
    triggerHook: "onLeave",
    duration: 800,
    // ease: "power1.out",
  })
    .setTween(tween1)
    .setPin(".-companysection-body")
    .addTo(controller);

  // *************************************************
  var tween1 = new TimelineMax()
    .add(
      TweenLite.fromTo(
        ".-german2-",
        1,
        {
          x: 700,
          scale: 0,
        },
        {
          x: -300,
          scale: 1,
        }
      )
    )
    .add(
      TweenLite.to(".-german2-", 1, {
        // y: -600,
        // opacity: 0,
      })
    );

  // var tween1 = gsap.to(
  //   ".-german-",

  //   {
  //     x: 360,
  //     // rotation: 360,
  //     // duration: 7,
  //     ease: "ease",
  //   }
  // );

  var seen1 = new ScrollMagic.Scene({
    triggerElement: ".-companysection-body",
    offset: 0,
    reverse: true,
    triggerHook: "onLeave",
    duration: 1500,
    // ease: "power1.out",
  })
    .setTween(tween1)
    // .setPin(".-companysection-body")
    .addTo(controller);
});
