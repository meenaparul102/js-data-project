function part_1(){

  fetch("JSON/part1.json")
    .then((response) => response.json())
    .then((dataset) => {

      Highcharts.chart("container", {
        chart: {
            type: "column",
        },
        title: {
            text: " Population of India vs. years",
        },
        xAxis: {
          title: {
              text: 'Years'
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
            pointWidth: 17
        }
      },
        series: [{
            name: "Years",
            data: dataset,
            color: '#126e82'
        }]
      });
    });

}
