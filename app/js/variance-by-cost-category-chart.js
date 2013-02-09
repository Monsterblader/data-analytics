var imgLeft = function () {
    var chart,
        categories = ['Total', 'GL8', 'GL7', 'GL6', 'GL5',
            'GL4', 'GL3', 'GL2', 'GL1'];
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
                min: -10,
                max: 10
            },

            plotOptions: {
                series: {
                    stacking: 'normal',
                    shadow: false
                }
            },

            // plotOptions: {
            //     series: {
            //         borderRadius: 2
            //     }
            // },

            tooltip: {
                formatter: function(){
                    return '<b>'+ this.series.name +', age '+ this.point.category +'</b><br/>'+
                        'Population: '+ Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: 'Variance to Monthly Budget',
                data:
                    [ 10
                    , 0
                    , 0
                    , -19
                    , -2
                    , 0
                    , {y: -10, color: 'red'}
                    , 0
                    , -4 ]
            },
            {
                name: 'Variance to YTD Budget',
                data:
                    [ 0
                    , 12
                    , 15
                    , 0
                    , 0
                    , 19
                    , 0
                    , {y: 10, color: 'green'}
                    , 0]
            }
            ]
        });
    });

};
