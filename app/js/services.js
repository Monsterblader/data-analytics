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

angular.module('McApp.services', [])
  .factory('getXAxis', function(){
    return function(data){
      var values = data.Target.values;
      var dates = _.map(values, function(row){
        var info = row[0].slice(0, 3).reverse();
        return ('0' + info[0]).slice(-2) + ' ' + months['' + info[1]] + ' ' + ('' + info[2]).slice(-2);
      });
      return dates;
    };
  });
