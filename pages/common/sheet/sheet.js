window.addEventListener('DOMContentLoaded', function () {

	let galleryItem = document.querySelectorAll('.jsGalleryItem');
	let galleryMain = document.querySelector('.jsGalleryMain');
	let galleryGrid = document.querySelector('.jsGalleryGrid');

	galleryGrid.addEventListener('click', event => {
		let target = event.target;
		// console.log(target.classList);

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
		// console.log(galleryItem[n].src);
		galleryMain.src = galleryItem[n].src;
	};









	// galleryItem.forEach(function(item) {
	// 	console.log( item.src );
	// 	item.src = 'http://cruise.loc/common/catalog/img/abrau.jpg';
	// });

});
