Highcharts.chart('containerRegioes', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Macro-regiões e seus investimentos '
    },
    subtitle: {
        text: 'Investimentos realizados em cada macro-região através do projeto Minha Casa Minha Vida'
    },
    xAxis: {
        categories: [
            'Norte',
            'Nordeste',
            'Centro-Oeste',
            'Sudeste',
            'Sul'  
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Investimento (mil R$)'
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
        data: [49.9, 71.5, 106.4, 129.2, 110]

    }]
});








Highcharts.chart('containerEstados', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Estados e seus investimentos '
    },
    subtitle: {
        text: 'Estados que receberam maior incentivo fiscal pelo MCMV'
    },
    xAxis: {
        categories: [
            'Norte',
            'Nordeste',
            'Centro-Oeste',
            'Sudeste',
            'Sul'  
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Investimento (mil R$)'
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
        name: 'Primeiro estado',
        data: [49.9, 71.5, 106.4, 129.2, 110]

    },
    {
        name: 'Segundo estado',
        data: [49.9, 71.5, 106.4, 129.2, 110]

    },
    {
        name: 'Terceiro estado',
        data: [49.9, 71.5, 106.4, 129.2, 110]

    }]
});




Highcharts.chart('containerCidades', {
    title: {
        text: 'Cidades com maiores investimentos'
    },
    xAxis: {
        categories: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul']
    },
    labels: {
        items: [{
            html: 'Distribuição de investimento por regiões',
            style: {
                left: '50px',
                top: '18px',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'São Paulo',
        data: [null, null, null, 15]
    }, {
        type: 'column',
        name: 'Rio de Janeiro',
        data: [null, null, null, 13]
    },{
        type: 'column',
        name: 'Belo Horizonte',
        data: [null, null, null, 10]
    }, {
        type: 'column',
        name: 'John',
        data: [2, 3, 5, 3, 6]
    }, {
        type: 'column',
        name: 'Joe',
        data: [4, 3, 3, 2, 0]
    }, {
        type: 'spline',
        name: 'Average',
        data: [3, 2.67, 3, 6.33, 3.33],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Total consumption',
        data: [{
            name: 'Jane',
            y: 13,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: 'John',
            y: 23,
            color: Highcharts.getOptions().colors[1] // John's color
        }, {
            name: 'Joe',
            y: 19,
            color: Highcharts.getOptions().colors[2] // Joe's color
        }],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});