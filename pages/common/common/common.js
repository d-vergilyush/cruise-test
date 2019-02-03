// $(document).ready(function () {

//     $('.jsClosePopup').click(function () {
//         $('.overlay').fadeOut();
//     });

//     $('.jsShowCallback').click(function () {
//         $('#callback').fadeIn();
//     });
//     $('.jsShowThx').click(function () {
//         $('#thx').fadeIn();
//     });

//     $(window).trigger('scroll');

//     scroll();

//     function scroll() {

//         let menu = document.getElementsByClassName('menu')[0];
//         let footerNav = document.getElementsByClassName('footer__nav')[0];


//         menu.addEventListener('click', showAnchor);
//         footerNav.addEventListener('click', showAnchor);

//         function showAnchor(event) {
//             event.preventDefault();
//             animate(function (timePassed) {
//                 let target = event.target;
//                 let section = document.getElementById(target.getAttribute('href').slice(1));
//                 window.scrollBy(0, section.getBoundingClientRect().top / 10);
//             }, 1500);
//         }

//         function animate(draw, duration) {
//             let start = performance.now();
//             requestAnimationFrame(
//                 function animate(time) {
//                     let timePassed = time - start;
//                     if (timePassed > duration) {
//                         timePassed = duration;
//                     }
//                     draw(timePassed);

//                     if (timePassed < duration) {
//                         requestAnimationFrame(animate);
//                     }
//                 });
//         }

//     }
// });

// function offset(el) {
//     var rect = el.getBoundingClientRect(),
//         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// }