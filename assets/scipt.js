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
//var elem = document.getElementsByClassName("container-fluid");
var elem = document.documentElement;
// var full_screen_element = document.fullscreenElement;
	
// If no element is in full-screen
// if(full_screen_element !== null)
// 	console.log('FullScreen mode is activated');
// else{
//     console.log('FullScreen mode is not activated');
//    fullscreen();

// }
	
//elem.addEventListener("dblclick",)

// function fullscreen(){
//     if (elem.requestFullScreen) {
//         elem.requestFullScreen();
//        } else if (elem.webkitRequestFullScreen) {
//         elem.webkitRequestFullScreen();
//        } else if (elem.mozRequestFullScreen) {
//         elem.mozRequestFullScreen();
//        }
// }
// function cancelfull(){
//     if (elem.exitFullscreen) {
//         elem.exitFullscreen();
//        } else if (document.webkitRequestFullScreen) {
//         document.webkitCancelFullscreen()
//        } else if (elem.mozRequestFullScreen) {
//         document.mozCancelFullScreen();
//        }
// }

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

// var elem = document.getElementsByClassName("container-fluid");

// $(".container-fluid").dblclick(function() {
//     if (elem.requestFullscreen) {
//       elem.requestFullscreen();
//     } else if (elem.mozRequestFullScreen) { 
//       elem.mozRequestFullScreen();
//     } else if (elem.webkitRequestFullscreen) { 
//       elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { 
//       elem.msRequestFullscreen();
//     }
//   });
// var elem = document.documentElement;

/* View in fullscreen */
// function openFullscreen() {
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.webkitRequestFullscreen) { 
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) { 
//     elem.msRequestFullscreen();
//   }
// }

/* Close fullscreen */
// function closeFullscreen() {
//   if (document.exitFullscreen) {
//     document.exitFullscreen();
//   } else if (document.webkitExitFullscreen) { 
//     document.webkitExitFullscreen();
//   } else if (document.msExitFullscreen) { 
//     document.msExitFullscreen();
//   }
// }
