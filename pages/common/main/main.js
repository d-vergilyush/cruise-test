window.addEventListener('DOMContentLoaded', function () {

let cards = document.querySelectorAll('.card');
if (window.matchMedia("(max-width: 992px)").matches) {
	for (let i = 4; i < cards.length; i++) {
		cards[i].style.display = 'none';
	}
}

let chooseBtn = document.querySelector('.jsScroll');

chooseBtn.addEventListener('click', function(event) {
	event.preventDefault();
	animate(function (timePassed) {
		let target = event.target;
		let section = document.querySelector('.catalog__title');
		window.scrollBy(0, section.getBoundingClientRect().top / 10 - 4);
	}, 1200);
});

function animate(draw, duration) {
	let start = performance.now();
	requestAnimationFrame(
		function animate(time) {
			let timePassed = time - start;
			if (timePassed > duration) {
				timePassed = duration;
			}
			draw(timePassed);

			if (timePassed < duration) {
				requestAnimationFrame(animate);
			}
		});
};


});
