function part_2(){

  fetch("JSON/part2.json")
    .then((response) => response.json())
    .then((dataset) => {

      Highcharts.chart("container", {
        chart: {
            type: "column",
        },
        title: {
            text: "Population of ASEAN countries for the year 2014",
        },
        xAxis: {
          title: {
              text: 'ASEAN Countries'
          },
          type: 'category',
          labels: {
              rotation: -45,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Populations'
            },
            labels: {
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Population : <b>{point.y}</b>'
        },
        plotOptions: {
        series: {
            pointWidth: 80
        }
    },
        series: [{
            name: "ASEAN Countries",
            data: dataset,
            colorByPoint: true
        }]
      });
    });

}
