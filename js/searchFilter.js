const search = document.querySelector('#search');

const imgTexts = document.querySelectorAll('a[data-caption]');

const handleSearch = event => {
	const searchTerm = event.target.value.toLowerCase();
	
	imgTexts.forEach(imgText => {
		const text = imgText.getAttribute('data-caption').toLowerCase();
		const img = imgText;

		if (text.indexOf(searchTerm) > -1) {
			img.style.display = "block";
		} else {
			img.style.display = "none";
		}
	}) ;
};

search.addEventListener('keyup', handleSearch);


