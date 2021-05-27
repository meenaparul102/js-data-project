var categories = [];
for(var i=2004; i<=2014; i++){
  categories.push(i);
}

function part_4(){

  fetch("JSON/part4.json")
    .then((response) => response.json())
    .then((dataset) => {

      Highcharts.chart("container", {
        chart: {
          type: "column",
        },
        title: {
          text: "ASEAN countries as groups over the years 2004 - 2014",
        },
        xAxis: {
          categories: categories,
          crosshair: true,
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
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
        series: {
            pointWidth: 9,
            groupPadding: 0.1,
        }
       },
        series: dataset

      });
    });


}
