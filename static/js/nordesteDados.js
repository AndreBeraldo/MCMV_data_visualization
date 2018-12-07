function nordesteDados() {
    var x = document.getElementById("nordeste-dados");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

Highcharts.chart('containerNordeste', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Unidades fornecidas ao Nordeste por estado'
    }   
,
    xAxis: {
        categories: [
            'Bahia',
            'Maranhão',
            'Alagoas',
            'Sergipe',
            'Rio Grande do Norte',
            'Piauí',
            'Ceará',
            'Pernambuco',
            'Paraíba'
 
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
        data: [131642.00, 58743, 53149, 17742, 31696, 31683, 34088, 60361, 27641]

    }]
});




