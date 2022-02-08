// Confetti  JS
// start
const start = () => {
    setTimeout(function () {
        confetti.start()
    }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};
//  Stop
const stop = () => {
    setTimeout(function () {
        confetti.stop()
    }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};

start();
//stop();


var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});



function toggleFullscreen() {
    if (!document.webkitFullscreenElement) {
     if (elem.requestFullScreen) {
      elem.requestFullScreen();
     } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
     } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
     }
    } 
    else  {
        return document.exitFullscreen()|| document.webkitCancelFullscreen() || document.mozCancelFullScreen() ;
       
    }
   }
   
   document.addEventListener("dblclick", toggleFullscreen);

