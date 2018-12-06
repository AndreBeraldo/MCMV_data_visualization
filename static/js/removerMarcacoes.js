document.getElementById("removerMarcacoes").onclick = function () { 

	var marker = new mapboxgl.Marker().addTo(map);
	marker.remove();

};