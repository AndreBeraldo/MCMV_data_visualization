function norteDados() {
    var x = document.getElementById("norte-dados");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

Highcharts.chart('containerNorte', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Unidades fornecidas ao Norte por estado'
    }   
,
    xAxis: {
        categories: [
            'Amazonas',
            'Acre',
            'Roraima',
            'Rondônia',
            'Tocantins',
            'Pará',
            'Amapá'
 
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Unidades Habitacionais'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} U.H.s</b></td></tr>',
        footerFormat: '</table>',
        backgroundColor: '#000000',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Regiões',
        data: [22140, 3798, 177,10053, 9391, 43606, 4055]

    }]
});




