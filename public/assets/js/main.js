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



})






