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
