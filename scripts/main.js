fetch('https://picsum.photos/640/619')
	.then(response => response.blob())
	.then(blob => {
		const imageElement = document.createElement('img');
		const imageUrl = URL.createObjectURL(blob);

		imageElement.src = imageUrl;
		imageElement.alt = 'Description of the image';
		imageElement.className = "imageHolder";

		const imageSection = document.getElementById("imageSection");
		imageSection.appendChild(imageElement);

		const img = document.querySelector('img.imageHolder');
		img.addEventListener('load', function () {
			new Pixelify(img, {
				pixel: 20,
				alpha: 1
			});

			URL.revokeObjectURL(imageUrl);
		});
	})
	.catch(error => console.error('Error fetching image:', error));
