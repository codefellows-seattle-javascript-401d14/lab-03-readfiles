'use strict';

const fs = require('fs');
let result = [];

module.exports = function(filePath, callback){
  fs.readFile(filePath[0], (err, data) => {
    if (err) return callback(err);
    result.push(data);
    callback(null, result);
  });
  fs.readFile(filePath[1], (err,data) => {
    if (err) return callback(err);
    result.push(data);
    callback(null, result);
  });
  fs.readFile(filePath[2], (err,data) => {
    if (err) return callback(err);
    result.push(data);
    callback(null, result);
  });
};
