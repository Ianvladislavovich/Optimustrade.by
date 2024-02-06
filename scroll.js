function splitscroll() {
    const controller = new ScrollMagic.Controller();
  
    new ScrollMagic.Scene({
      duration: '300%',
      triggerElement: '.main_title',
      triggerHook: 0,
    })
      .setPin('.main_title')
      .addTo(controller);
  }
  
splitscroll();



