function sudesteDados() {
    var x = document.getElementById("sudeste-dados");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

Highcharts.chart('containerSudeste', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Unidades fornecidas ao Sudeste por estado'
    }   
,
    xAxis: {
        categories: [
            'São Paulo',
            'Minas Gerais',
            'Rio de Janeiro',
            'Espírito Santo',
 
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
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
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
        data: [282176, 148790, 90960, 23567]

    }]
});




