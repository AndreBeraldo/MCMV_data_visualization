/*var bounds = [
    [-80,-27], // Southwest coordinates
    [5,-10]  // Northeast coordinates
];*/

mapboxgl.accessToken = 'pk.eyJ1IjoicGh4Njc4IiwiYSI6ImNqZjVpb2RieTBudnMzM2x0eXUzZHUxdnoifQ.Dev7xcoIcb2V3lIJ8FvOAw';
map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/phx678/cjp3a11ip1ye02sn28wte5vqn?optimize=true',
    center: [-55.9253, -14.235],
    zoom: 3.5,
    tolerance: 2.7
    //maxBounds: bounds
});

var toggleableLayerIds = ['mcmv', 'norte', 'sul', 'centro-oeste', 'nordeste', 'sudeste' ];



var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');
map.addControl(new mapboxgl.FullscreenControl());

map.on('load', function () {

    let mcmv_data = {
        'type': 'geojson',
        'data': geocode_data
    }
    // FONTE DE DADOS
    map.addSource('mcmv_data', mcmv_data);

    // CAMADA DE EXIBIÇÃO DOS PONTOS
    map.addLayer({
        "id": "mcmv",
        "type": "circle",
        "source": "mcmv_data",
        "layout": {
            "visibility": 'visible'
        },
        "paint": {
            'circle-radius':  6,
            //     {
            //     'base': 3,
            //     'stops': [[5, 5], [5, 5]]
            // },
            'circle-color': [
                'match',
                ['get', 'faixa'],
                'Faixa 1', '#ce0600',
                'Faixa 2', '#21497a',
                'Faixa 3', '#0efb28',
                /* other */ '#000000'
            ]
        },
        "filter": ["==", "$type", "Point"]
    });

    map.addLayer({
    "id": "norte",
    "type": "circle",
    "source": "mcmv_data",
    "layout": {
        "visibility": 'none'
    },
    "paint": {
        'circle-radius':  6,
        //     {
        //     'base': 3,
        //     'stops': [[5, 5], [5, 5]]
        // },
        'circle-color': '#ce0600'
    },
    "filter": ["==", "regiao", "norte"]

    });

    map.addLayer({
    "id": "nordeste",
    "type": "circle",
    "source": "mcmv_data",
    "layout": {
        "visibility": 'none'
    },
    "paint": {
        'circle-radius':  6,
        //     {
        //     'base': 3,
        //     'stops': [[5, 5], [5, 5]]
        // },
        'circle-color': '#ce0600'
    },
    "filter": ["==", "regiao", "nordeste"]

    });

    map.addLayer({
    "id": "sul",
    "type": "circle",
    "source": "mcmv_data",
    "layout": {
        "visibility": 'none'
    },
    "paint": {
        'circle-radius':  6,
        //     {
        //     'base': 3,
        //     'stops': [[5, 5], [5, 5]]
        // },
        'circle-color': '#ce0600'
    },
    "filter": ["==", "regiao", "sul"]

    });

    map.addLayer({
    "id": "sudeste",
    "type": "circle",
    "source": "mcmv_data",
    "layout": {
        "visibility": 'none'
    },
    "paint": {
        'circle-radius':  6,
        //     {
        //     'base': 3,
        //     'stops': [[5, 5], [5, 5]]
        // },
        'circle-color': '#ce0600'
    },
    "filter": ["==", "regiao", "sudeste"]

    });

    map.addLayer({
    "id": "centro-oeste",
    "type": "circle",
    "source": "mcmv_data",
    "layout": {
        "visibility": 'none'
    },
    "paint": {
        'circle-radius':  6,
        //     {
        //     'base': 3,
        //     'stops': [[5, 5], [5, 5]]
        // },
        'circle-color': '#ce0600'
    },
    "filter": ["==", "regiao", "centro-oeste"]

    });


    // POPUP
    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'mcmv', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var estado = e.features[0].properties.estado;
        var cidade = e.features[0].properties.cidade;
        var faixa = e.features[0].properties.faixa;
        var unid_hab = e.features[0].properties.unid_hab;
        var invest = e.features[0].properties.invest;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        var code = '<h4 class="popup-title">' + cidade + ' / ' + estado + '</h4>'
            + '<p class="popup-content">Unidades Habitacionais: ' + unid_hab + '</br>'
            + 'Valor investido: ' + invest + '</br>'
            + 'Renda: ' + faixa + '</p>';


        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(code)
            .addTo(map);
    });
        map.on('click', 'norte', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var estado = e.features[0].properties.estado;
        var cidade = e.features[0].properties.cidade;
        var faixa = e.features[0].properties.faixa;
        var unid_hab = e.features[0].properties.unid_hab;
        var invest = e.features[0].properties.invest;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        var code = '<h4 class="popup-title">' + cidade + ' / ' + estado + '</h4>'
            + '<p class="popup-content">Unidades Habitacionais: ' + unid_hab + '</br>'
            + 'Valor investido: ' + invest + '</br>'
            + 'Renda: ' + faixa + '</p>';


        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(code)
            .addTo(map);
    });
        map.on('click', 'nordeste', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var estado = e.features[0].properties.estado;
        var cidade = e.features[0].properties.cidade;
        var faixa = e.features[0].properties.faixa;
        var unid_hab = e.features[0].properties.unid_hab;
        var invest = e.features[0].properties.invest;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        var code = '<h4 class="popup-title">' + cidade + ' / ' + estado + '</h4>'
            + '<p class="popup-content">Unidades Habitacionais: ' + unid_hab + '</br>'
            + 'Valor investido: ' + invest + '</br>'
            + 'Renda: ' + faixa + '</p>';


        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(code)
            .addTo(map);
    });
        map.on('click', 'sul', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var estado = e.features[0].properties.estado;
        var cidade = e.features[0].properties.cidade;
        var faixa = e.features[0].properties.faixa;
        var unid_hab = e.features[0].properties.unid_hab;
        var invest = e.features[0].properties.invest;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        var code = '<h4 class="popup-title">' + cidade + ' / ' + estado + '</h4>'
            + '<p class="popup-content">Unidades Habitacionais: ' + unid_hab + '</br>'
            + 'Valor investido: ' + invest + '</br>'
            + 'Renda: ' + faixa + '</p>';


        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(code)
            .addTo(map);
    });
        map.on('click', 'sudeste', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var estado = e.features[0].properties.estado;
        var cidade = e.features[0].properties.cidade;
        var faixa = e.features[0].properties.faixa;
        var unid_hab = e.features[0].properties.unid_hab;
        var invest = e.features[0].properties.invest;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        var code = '<h4 class="popup-title">' + cidade + ' / ' + estado + '</h4>'
            + '<p class="popup-content">Unidades Habitacionais: ' + unid_hab + '</br>'
            + 'Valor investido: ' + invest + '</br>'
            + 'Renda: ' + faixa + '</p>';


        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(code)
            .addTo(map);
    });
        map.on('click', 'centro-oeste', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var estado = e.features[0].properties.estado;
        var cidade = e.features[0].properties.cidade;
        var faixa = e.features[0].properties.faixa;
        var unid_hab = e.features[0].properties.unid_hab;
        var invest = e.features[0].properties.invest;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        var code = '<h4 class="popup-title">' + cidade + ' / ' + estado + '</h4>'
            + '<p class="popup-content">Unidades Habitacionais: ' + unid_hab + '</br>'
            + 'Valor investido: ' + invest + '</br>'
            + 'Renda: ' + faixa + '</p>';


        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(code)
            .addTo(map);
    });





    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'mcmv', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'mcmv', function () {
        map.getCanvas().style.cursor = '';
    });
    map.on('mouseenter', 'sul', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'sul', function () {
        map.getCanvas().style.cursor = '';
    });
    map.on('mouseenter', 'sudeste', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'sudeste', function () {
        map.getCanvas().style.cursor = '';
    });
    map.on('mouseenter', 'norte', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'norte', function () {
        map.getCanvas().style.cursor = '';
    });
    map.on('mouseenter', 'nordeste', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'nordeste', function () {
        map.getCanvas().style.cursor = '';
    });
    map.on('mouseenter', 'centro-oeste', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'centro-oeste', function () {
        map.getCanvas().style.cursor = '';
    });


});


function set_visible(layer_id){
    for (var i = 0; i < toggleableLayerIds.length; i++){
        var id = toggleableLayerIds[i];
        map.setLayoutProperty(id, 'visibility', 'none');
        console.log(id)
    }
    map.setLayoutProperty(layer_id, 'visibility', 'visible');
    status = map.setLayoutProperty(layer_id, 'visibility');
    console.log(status)

}

document.getElementById('visaoGeral').addEventListener('click', function () {
    map.flyTo({
        center: [-55.9253, -14.235],
        zoom: 3.5
    });

    set_visible('mcmv');

});

document.getElementById('sul').addEventListener('click', function () {
    map.flyTo({
        center: [-52, -27],
        zoom: 5.5
    });

    set_visible('sul');
});

document.getElementById('sudeste').addEventListener('click', function () {
    map.flyTo({
        center: [-47.2096, -20.0],
        zoom: 5.5
    });

    set_visible('sudeste');
});

document.getElementById('nordeste').addEventListener('click', function () {
    map.flyTo({
        center: [-45, -10],
        zoom: 5
    });
        set_visible('nordeste');

});
document.getElementById('centro-oeste').addEventListener('click', function () {
    map.flyTo({
        center: [-56, -16],
        zoom: 5
    });
        set_visible('centro-oeste');

});
document.getElementById('norte').addEventListener('click', function () {
    map.flyTo({
        center: [-60, -5],
        zoom: 4.5
    });
        set_visible('norte');

});

document.getElementById('listing-group').addEventListener('change', function (e) {
    var handler = e.target.id;
    if (e.target.checked) {
        map[handler].enable();
    } else {
        map[handler].disable();

    }
});

