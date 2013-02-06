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
    var averages = _.map(columns, function(column){
      var sum = _.reduce(column, function(memo, num){
        return memo + num;
      }, 0);
      return Number( (sum / noOfRows).toFixed(1) );
    });
    // console.log(averages);
    return averages;
  };
});

capacityModule.factory('getXAxis', function(){
  return function(data){
    var values = data.Target.values;
    var dates = _.map(values, function(row){
      var info = row[0].slice(0, 3).reverse();
      return ('0' + info[0]).slice(-2) + ' ' + months['' + info[1]] + ' ' + ('' + info[2]).slice(-2);
    });
    return dates;
  };
});

capacityModule.factory('getTotalColumnData', function(){
  return function(data, dataset){
    var values = (dataset === 'target') ? data.Target.values : data.Actual.values;
    var total = _.map(values, function(row){
      return Number( row[8].toFixed(1) );
    });
    return total;
  };
});