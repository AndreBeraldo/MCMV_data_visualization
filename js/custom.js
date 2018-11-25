mapboxgl.accessToken = 'pk.eyJ1IjoicGh4Njc4IiwiYSI6ImNqZjVpb2RieTBudnMzM2x0eXUzZHUxdnoifQ.Dev7xcoIcb2V3lIJ8FvOAw';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/phx678/cjoxeq3hnc2182rmnjmxk348w',
  center: [-55.9253,-14.235],
  zoom: 3.5
});


var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');
map.addControl(new mapboxgl.FullscreenControl());


/*var marker = new mapboxgl.Marker()
  .setLngLat([30.5, 50.5])
  .addTo(map);*/



document.getElementById('visaoGeral').addEventListener('click', function () {
    map.flyTo({
        center: [-55.9253,-14.235],
		zoom: 3.5
    });
});

document.getElementById('sul').addEventListener('click', function () {
    map.flyTo({
        center: [-52,-27],
		zoom: 5.5
    });
});

document.getElementById('sudeste').addEventListener('click', function () {
    map.flyTo({
        center: [-47.2096,-20.0],
		zoom: 5.5
    });
});

document.getElementById('nordeste').addEventListener('click', function () {
    map.flyTo({
        center: [-45,-10],
		zoom: 5
    });
});
document.getElementById('centro-oeste').addEventListener('click', function () {
    map.flyTo({
        center: [-56,-16],
		zoom: 5
    });
});
document.getElementById('norte').addEventListener('click', function () {
    map.flyTo({
        center: [-60,-5],
		zoom: 4.5 
    });
});

document.getElementById('listing-group').addEventListener('change', function(e) {
		var handler = e.target.id;
		if (e.target.checked) {
			map[handler].enable();
		} else {
			map[handler].disable();
			
		}
});


map.setLayoutProperty('country-label-lg', 'text-field', ['name_pt']);



document.getElementById('addCirculo').addEventListener('click', function () {
    map.addLayer({
        "id": "point",
        "type": "circle",
        "source": {
        	"type": "geojson",
			"data":{
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [
							    [2.349014, 48.864716],
							    [-46.625, -23.53]
					]
				}
			}
        },
        "paint": {
            "circle-radius": 20,
            "circle-color": "#007cbf"
        }
    });
});