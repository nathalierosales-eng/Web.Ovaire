document.addEventListener('DOMContentLoaded', function() {
	// Carrusel Problema con miniaturas (videos)
	const problemaCarousel = document.querySelector('.problema-carousel');
	if (problemaCarousel) {
		const items = problemaCarousel.querySelectorAll('.carousel-item');
		const prevBtn = problemaCarousel.querySelector('.carousel-control.prev');
		const nextBtn = problemaCarousel.querySelector('.carousel-control.next');
		const thumbnails = problemaCarousel.querySelectorAll('.carousel-thumbnails img');
		const videos = problemaCarousel.querySelectorAll('video');
		let current = 0;
		let interval;
		let intervalDelay = 6000; // aumentar un poco el tiempo entre slides (6s)

		function pauseAllVideos(except) {
			videos.forEach(v => {
				if (v !== except) {
					try { v.pause(); } catch (e) {}
				}
			});
		}

		function showItem(idx) {
			items.forEach((item, i) => {
				item.classList.toggle('active', i === idx);
			});
			thumbnails.forEach((thumb, i) => {
				thumb.classList.toggle('active', i === idx);
			});
			// cuando cambiamos de slide, pausamos cualquier video que estuviera reproduciéndose
			pauseAllVideos();
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
			interval = setInterval(nextItem, intervalDelay);
		}
		function resetInterval() {
			clearInterval(interval);
			startInterval();
		}

		// comportamiento de videos: pausar otros al reproducir, permitir click para play/pause,
		// y pausar auto-advance mientras un video está reproduciéndose
		videos.forEach(v => {
			// asegurar playsinline en móviles
			v.setAttribute('playsinline', '');

			// click en el video alterna reproducción
			v.addEventListener('click', (e) => {
				if (v.paused) {
					v.play();
				} else {
					v.pause();
				}
			});

			v.addEventListener('play', () => {
				pauseAllVideos(v);
				clearInterval(interval); // pausar auto-advance mientras se reproduce
			});

			v.addEventListener('pause', () => {
				// reanudar el auto-advance después de una pausa
				resetInterval();
			});

			v.addEventListener('ended', () => {
				// cuando termina, pasar al siguiente y reanudar el intervalo
				nextItem();
				resetInterval();
			});
		});

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

	// Carrusel Encuestas con miniaturas (imágenes)
	const carousel = document.querySelector('.carousel');
	if (carousel) {
		const items = carousel.querySelectorAll('.carousel-item');
		const prevBtn = carousel.querySelector('.carousel-control.prev');
		const nextBtn = carousel.querySelector('.carousel-control.next');
		const thumbnails = carousel.querySelectorAll('.carousel-thumbnails img');
		const videos = carousel.querySelectorAll('video'); // por si hay videos también
		let current = 0;
		let interval;
		let intervalDelay = 6000; // 6s

		function pauseAllVideos(except) {
			videos.forEach(v => {
				if (v !== except) {
					try { v.pause(); } catch (e) {}
				}
			});
		}

		function showItem(idx) {
			items.forEach((item, i) => {
				item.classList.toggle('active', i === idx);
			});
			thumbnails.forEach((thumb, i) => {
				thumb.classList.toggle('active', i === idx);
			});
			pauseAllVideos();
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
			interval = setInterval(nextItem, intervalDelay);
		}
		function resetInterval() {
			clearInterval(interval);
			startInterval();
		}

		// Si hay videos dentro de este carrusel, aplicar misma lógica de pausa/play
		videos.forEach(v => {
			v.setAttribute('playsinline', '');
			v.addEventListener('click', () => {
				if (v.paused) v.play(); else v.pause();
			});
			v.addEventListener('play', () => {
				pauseAllVideos(v);
				clearInterval(interval);
			});
			v.addEventListener('pause', () => {
				resetInterval();
			});
			v.addEventListener('ended', () => {
				nextItem();
				resetInterval();
			});
		});

		showItem(0);
		startInterval();
	}
});
