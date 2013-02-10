'use strict';

var months = {
   '1': 'Jan'
  ,'2': 'Feb'
  ,'3': 'Mar'
  ,'4': 'Apr'
  ,'5': 'May'
  ,'6': 'Jun'
  ,'7': 'Jul'
  ,'8': 'Aug'
  ,'9': 'Sep'
  ,'10': 'Oct'
  ,'11': 'Nov'
  ,'12': 'Dec'
};

/* Services */

var capacityModule = angular.module('McApp.capacityServices', []);

capacityModule.factory('getVolumeDifference', function(){
  return function(data, dataset){
    var values = (dataset === 'target') ? data.Target.values : data.Actual.values;
    // var differencePercentage = (dataset === 'target') ? 70 : 85;
    var differencePercentage = 75;
    // Put row data into columns
    var columns = [
       [] // Asia Minor
      ,[] // SuperCard
      ,[] // Western
      ,[] // Africa
      ,[] // Banking
      ,[] // Corporate
      ,[] // Wealth
      ,[] // Total
    ];
    for (var i = 0; i < values.length; i++) {
      var row = values[i].slice(1);
      for (var j = 0; j < row.length; j++) {
        columns[j].push( row[j] );
      }
    }
    var noOfRows = columns[0].length;
    var averages = [
       [{column: 'Asia Minor'}]
      ,[{column: 'SuperCard'}]
      ,[{column: 'Western'}]
      ,[{column: 'Africa'}]
      ,[{column: 'Banking'}]
      ,[{column: 'Corporate'}]
      ,[{column: 'Wealth'}]
      ,[{column: 'Total'}]
    ];

    columns.map(function(column, index, list){
      var sum = _.reduce(column, function(memo, num){
        return memo + num;
      }, 0);
      var average = Number( (sum / noOfRows).toFixed(1) );
      var difference = Number( (average - differencePercentage).toFixed(1) );
      averages[index][0]["average"] = average;
      averages[index][0]["difference"] = difference;
    });
    // Move the total column to index 0
    averages.unshift( averages.pop() );
    // console.log(averages);
    return averages;
  };
});

capacityModule.factory('getXAxis', function(){
  return function(data){
    var values = data.Target.values;
    var dates = _.map(values, function(row){
      var info = row[0].slice(0, 3).reverse();
      return ('0' + info[0]).slice(-2) + ' ' + months['' + info[1]] + ', ' + ('' + info[2]).slice(-2);
    });
    // Edit last date to be 'current week'
    dates.pop();
    dates.push('Current<br />Week');
    return dates;
  };
});

capacityModule.factory('getTotalColumnData', function(){
  return function(data, dataset){
    // Function to calculate color based on difference
    function calcColor(num){
      if ((num - 75) < -5) {
        return '#FF0000';
      } else if ((num - 75) < 0) {
        return '#FFD700';
      } else {
        return '#008000';
      }
    }

    var values = (dataset === 'target') ? data.Target.values : data.Actual.values;
    var total = _.map(values, function(row){
      if (dataset === 'target') {
        return Number( row[8].toFixed(1) );
      } else {
        var yValue = Number( row[8].toFixed(1) );
        return { y:  yValue, color: calcColor(yValue) };
      }
    });
    // console.log(total);
    return total;
  };
});