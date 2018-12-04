/*var bounds = [
    [-80,-27], // Southwest coordinates
    [5,-10]  // Northeast coordinates
];*/

mapboxgl.accessToken = 'pk.eyJ1IjoicGh4Njc4IiwiYSI6ImNqZjVpb2RieTBudnMzM2x0eXUzZHUxdnoifQ.Dev7xcoIcb2V3lIJ8FvOAw';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/phx678/cjp3a11ip1ye02sn28wte5vqn',
  center: [-55.9253,-14.235],
  zoom: 3.5,
  //maxBounds: bounds
});


var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');
map.addControl(new mapboxgl.FullscreenControl());


/*var marker = new mapboxgl.Marker()
  .setLngLat([-47.2096,-20.0])
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

