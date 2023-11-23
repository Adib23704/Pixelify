let originalImageUrl;

fetch('https://picsum.photos/1024/1024')
	.then(response => {
		originalImageUrl = response.url;

		return response.blob();
	})
	.then(blob => {
		const imageElement = document.createElement('img');
		const imageUrl = URL.createObjectURL(blob);

		imageElement.src = imageUrl;
		imageElement.className = "imageHolder";

		const anchorElement = document.createElement('a');
		anchorElement.href = originalImageUrl;
		anchorElement.target = '_blank';
		anchorElement.appendChild(imageElement);

		const imageSection = document.getElementById("imageSection");
		imageSection.appendChild(anchorElement);

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
