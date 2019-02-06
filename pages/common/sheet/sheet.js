window.addEventListener('DOMContentLoaded', function () {

	let galleryItem = document.querySelectorAll('.jsGalleryItem');
	let galleryMain = document.querySelector('.jsGalleryMain');
	let galleryGrid = document.querySelector('.jsGalleryGrid');

	galleryMain.src = galleryItem[0].src;

	galleryGrid.addEventListener('click', event => {
		let target = event.target;
		if(target.classList.contains('jsGalleryItem')) {
			for (let i = 0; i < galleryItem.length; i++) {
				if (target == galleryItem[i]) {
					// alert(i);
					showGalleryItem(i);
					break;
				}
			}
		}
	});

	function showGalleryItem(n) {
		galleryMain.src = galleryItem[n].src;
	};

});
