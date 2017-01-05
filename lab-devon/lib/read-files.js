'use strict';

const fs = require('fs');

module.exports = function(filePath, callback){
  let result = [];
  fs.readFile(filePath[0], (err, data) => {
    if (err) return callback(err);
    result.push(data.toString());

    fs.readFile(filePath[1], (err,data) => {
      if (err) return callback(err);
      result.push(data.toString());

      fs.readFile(filePath[2], (err,data) => {
        if (err) return callback(err);
        result.push(data.toString());
      });
    });
  });
  callback(null, result);
};
