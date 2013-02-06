$(function () {
    var chart,
        categories = ['GL1', 'GL2', 'GL3', 'GL4',
            'GL5', 'GL6', 'GL7', 'GL8', 'Total'];
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container2',
                type: 'bar'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: [{
                categories: categories,
                reversed: false
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function(){
                        return (Math.abs(this.value) / 100) + '%';
                    }
                },
                min: -40,
                max: 40
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function(){
                    return '<b>'+ this.series.name +', age '+ this.point.category +'</b><br/>'+
                        'Population: '+ Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: 'Variance to Monthly Budget',
                data:
                    [ -17
                    , 0
                    , 0
                    , -22
                    , -2
                    , 0
                    , -5
                    , -13 ]
            },
            {
                name: 'Variance to YTD Budget',
                data:
                    [ 0
                    , 12
                    , 15
                    , 0
                    , 0
                    , 25
                    , 0
                    , 0 ]
            }
            ]
        });
    });

});