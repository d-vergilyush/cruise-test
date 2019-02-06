window.addEventListener('DOMContentLoaded', function () {

	const popup = document.querySelector('.popupWrap');
	const popupClose = document.querySelector('.jsClosePopup');
	const cards = document.querySelectorAll('.jsShowPopup');

	const showModal = function() {
		popup.style.display = 'block';
		// document.body.style.overflow = 'hidden';
	};

	cards.forEach(card => {
		card.addEventListener('click', showModal)
	});

	popupClose.addEventListener('click', () => {
		popup.style.display = 'none';
		// document.body.style.overflow = '';
	});

});
