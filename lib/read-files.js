'use strict';

const fs = require('fs');

const readFiles = module.exports = function (array, callback){

    let theTextthatWillbeReadbyTheComputer = [];

    fs.readFile(array[0] , 'utf8', function(err, data){
    if (err) return callback(err);
    theTextthatWillbeReadbyTheComputer.push(data);
    
         fs.readFile(array[1] , 'utf8', function(err, data){
         if (err) return callback(err);
         theTextthatWillbeReadbyTheComputer.push(data);

              fs.readFile(array[2] , 'utf8', function(err, data){
              if (err) return callback(err);
              theTextthatWillbeReadbyTheComputer.push(data);
        callback(null, theTextthatWillbeReadbyTheComputer);
        });
     });
  });
}