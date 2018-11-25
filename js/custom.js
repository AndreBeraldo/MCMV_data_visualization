mapboxgl.accessToken = 'pk.eyJ1IjoicGh4Njc4IiwiYSI6ImNqZjVpb2RieTBudnMzM2x0eXUzZHUxdnoifQ.Dev7xcoIcb2V3lIJ8FvOAw';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/phx678/cjl4bcgfo1vvi2tn32sc5t628',
  center: [-10,20],
  zoom: 1.5
});


var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');
map.addControl(new mapboxgl.FullscreenControl());


/*var marker = new mapboxgl.Marker()
  .setLngLat([30.5, 50.5])
  .addTo(map);*/



document.getElementById('visaoGeral').addEventListener('click', function () {
    map.flyTo({
        center: [-10,20],
		zoom: 1.5
    });
});

document.getElementById('europa').addEventListener('click', function () {
    map.flyTo({
        center: [15.35,48.8566],
		zoom: 3
    });
});

document.getElementById('amNorte').addEventListener('click', function () {
    map.flyTo({
        center: [-98.4194,50],
		zoom: 2
    });
});

document.getElementById('amSul').addEventListener('click', function () {
    map.flyTo({
        center: [-47,-15],
		zoom: 2
    });
});
document.getElementById('asia').addEventListener('click', function () {
    map.flyTo({
        center: [105,30],
		zoom: 3
    });
});
document.getElementById('africa').addEventListener('click', function () {
    map.flyTo({
        center: [25,5],
		zoom: 2
    });
});
document.getElementById('oceania').addEventListener('click', function () {
    map.flyTo({
        center: [135,-25],
		zoom: 2
    });
});
document.getElementById('russia').addEventListener('click', function () {
    map.flyTo({
        center: [100,65],
		zoom: 2
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