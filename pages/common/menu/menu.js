// $(document).ready(function () {
//     $(".menu__item, [data-scroll]").on("click", function (e) {
//         e.preventDefault();

//         var id = $(this).attr('href') || $(this).attr('data-scroll');
//         if (id) {
//             var top = $(id).offset().top;
//             $('body,html').animate({scrollTop: top}, 1500);
//         }

//         var target = $(this).attr('data-target');
//         if (target) {
//             yaCounter51455630.reachGoal(`${target}`);
//         }
//     });
// });

window.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.jsShowMenu');
	const menu = document.querySelector('.jsMainMenu');

	burger.addEventListener('click', () => {
		menu.classList.toggle('fadeIn');
		menu.classList.toggle('fadeOut');
		setTimeout(function() {
		burger.classList.toggle('on');
		menu.classList.toggle('show');
		}, 1000);
	});
});
