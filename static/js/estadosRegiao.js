function ranking_regioes() {
    var x = document.getElementById("estadosRegiao");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

var a = [];
var serie = [];

var chart = Highcharts.chart('containerEstadosRegiao', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Ranking dos estados de uma região por unidades habitacionais'
    },
    xAxis: {
        categories: [],
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
        },
    },
    series: serie
});


function serie_data(regiao = 'nordeste') {

    const Http = new XMLHttpRequest();
    const url = 'http://localhost:5000/get_ranking_regioes/' + regiao;
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        console.log('response2 ', Http.responseText);
        a = Http.response;
        console.log('a:    ', a);
        fill_serie();
        console.log('serie: ', serie);
        chart.update({
            series: serie
        });
        console.log('chart: ', chart);
        console.log('chart2: ', chart.series);
    };
};

function fill_serie() {
    var serie = [];
    for (let i = 0; i < a.length; i++) {
        serie.push(
            {
                'name': a[0][i],
                'data': [1][i]
            }
        );
    }
}


serie_data();
fill_serie();

