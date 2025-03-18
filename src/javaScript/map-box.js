mapboxgl.accessToken = 'pk.eyJ1IjoicXlrZXp5amV6IiwiYSI6ImNsenM0d2k0NzFjeWQydHB5eHA3dGU0MmwifQ.ff6blcBq9RCTt6O5auIsSQ';
            
    const map = new mapboxgl.Map({
        container: 'map', // Ensure this ID matches the div in your HTML
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-74.006, 40.7128], // New York coordinates
        zoom: 12
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Fixed marker at New York
    const marker = new mapboxgl.Marker({ color: 'red' })
        .setLngLat([-74.006, 40.7128])
        .addTo(map);

    // Create popup content
    const popupContent = document.createElement('div');
    popupContent.className = 'p-3';
    popupContent.innerHTML = `<h5 class='font-bold'>New York, USA</h5>`;

    const imageContainer = document.createElement('div');
    imageContainer.className = 'flex space-x-2 overflow-x-auto';

    // Example images (Replace with actual uploaded images)
    const sampleImages = [
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100'
    ];

    sampleImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'w-24 h-24 rounded-lg shadow-md';
        imageContainer.appendChild(img);
    });

    popupContent.appendChild(imageContainer);

    // Add popup to marker
    const popup = new mapboxgl.Popup().setDOMContent(popupContent);
    marker.setPopup(popup);