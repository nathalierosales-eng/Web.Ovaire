document.addEventListener('DOMContentLoaded', function() {
	// Carrusel Problema con miniaturas
	const problemaCarousel = document.querySelector('.problema-carousel');
	if (problemaCarousel) {
		const items = problemaCarousel.querySelectorAll('.carousel-item');
		const prevBtn = problemaCarousel.querySelector('.carousel-control.prev');
		const nextBtn = problemaCarousel.querySelector('.carousel-control.next');
		const thumbnails = problemaCarousel.querySelectorAll('.carousel-thumbnails img');
		let current = 0;
		let interval;

		function showItem(idx) {
			items.forEach((item, i) => {
				item.classList.toggle('active', i === idx);
			});
			thumbnails.forEach((thumb, i) => {
				thumb.classList.toggle('active', i === idx);
			});
			current = idx;
		}

		function nextItem() {
			let idx = (current + 1) % items.length;
			showItem(idx);
		}

		function prevItem() {
			let idx = (current - 1 + items.length) % items.length;
			showItem(idx);
		}

		if (nextBtn) nextBtn.addEventListener('click', () => {
			nextItem();
			resetInterval();
		});
		if (prevBtn) prevBtn.addEventListener('click', () => {
			prevItem();
			resetInterval();
		});

		thumbnails.forEach((thumb, i) => {
			thumb.addEventListener('click', () => {
				showItem(i);
				resetInterval();
			});
		});

		function startInterval() {
			interval = setInterval(nextItem, 3500);
		}
		function resetInterval() {
			clearInterval(interval);
			startInterval();
		}

		showItem(0);
		startInterval();
	}

	// Smooth scroll
	const btn = document.querySelector('.desplazamiento a');
	if (btn) {
		btn.addEventListener('click', function(e) {
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}

	// Carrusel Encuestas con miniaturas
	const carousel = document.querySelector('.carousel');
	if (carousel) {
		const items = carousel.querySelectorAll('.carousel-item');
		const prevBtn = carousel.querySelector('.carousel-control.prev');
		const nextBtn = carousel.querySelector('.carousel-control.next');
		const thumbnails = carousel.querySelectorAll('.carousel-thumbnails img');
		let current = 0;
		let interval;

		function showItem(idx) {
			items.forEach((item, i) => {
				item.classList.toggle('active', i === idx);
			});
			thumbnails.forEach((thumb, i) => {
				thumb.classList.toggle('active', i === idx);
			});
			current = idx;
		}

		function nextItem() {
			let idx = (current + 1) % items.length;
			showItem(idx);
		}

		function prevItem() {
			let idx = (current - 1 + items.length) % items.length;
			showItem(idx);
		}

		if (nextBtn) nextBtn.addEventListener('click', () => {
			nextItem();
			resetInterval();
		});
		if (prevBtn) prevBtn.addEventListener('click', () => {
			prevItem();
			resetInterval();
		});

		thumbnails.forEach((thumb, i) => {
			thumb.addEventListener('click', () => {
				showItem(i);
				resetInterval();
			});
		});

		function startInterval() {
			interval = setInterval(nextItem, 3500);
		}
		function resetInterval() {
			clearInterval(interval);
			startInterval();
		}

		showItem(0);
		startInterval();
	}
});
