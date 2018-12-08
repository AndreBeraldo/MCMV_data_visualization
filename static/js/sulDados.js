function sulDados() {
    var x = document.getElementById("sul-dados");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

Highcharts.chart('containerSul', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Unidades fornecidas ao Sul por estado'
    }   
,
    xAxis: {
        categories: [
            'Paraná',
            'Santa Catarina',
            'Rio Grande do Sul'
 
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
        data: [108209, 66721, 119457]

    }]
});




