var grOp = function () {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'containerRight',
                zoomType: 'xy'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Total £, M'
            },
            subtitle: {
                text: '' // Source: WorldClimate.com
            },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }],
            yAxis: [{ // Primary yAxis
                // labels: {
                //     formatter: function() {
                //         return this.value +'°C';
                //     },
                //     style: {
                //         color: '#89A54E'
                //     }
                // },
                title: {
                    text: '', // Temperature
                    style: {
                        color: '#89A54E'
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: '', // actual
                    style: {
                        color: '#4572A7'
                    }
                },
                // labels: {
                //     formatter: function() {
                //         return this.value +' mm';
                //     },
                //     style: {
                //         color: '#4572A7'
                //     }
                // },
                opposite: true
            }],
            tooltip: {
                formatter: function() {
                    return ''+
                        this.x +': '+ this.y +
                        (this.series.name == 'actual' ? ' mm' : '°C');
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 100,
                floating: true,
                backgroundColor: '#FFFFFF'
            },
            series: [{
                name: 'Actual',
                color: '#4572A7',
                type: 'column',
                yAxis: 1,
                data: [58.0, 57.4, 57.4, 52.3, 56.4, 55.9, 56.4, 58.1, 54.1, 57.8, 56.7]

            }, {
                name: 'Target',
                color: '#89A54E',
                type: 'spline',
                data: [62.6, 51.7, 55.7, 59.0, 66.6, 62.0, 66.0, 55.2, 51.3, 68.8, 63.5]
            }]
        });
    });

};
