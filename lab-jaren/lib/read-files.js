'use strict';

const fs = require('fs');

module.exports = function(filePaths, callback) {
  var result = [];
  fs.readFile(filePaths[0], (err, data) => {
    if (err) return callback(err);
    result.push(data.toString());
    fs.readFile(filePaths[1], (err, data) => {
      if (err) return callback(err);
      result.push(data.toString());
      fs.readFile(filePaths[2], (err, data) => {
        if (err) return callback(err);
        result.push(data.toString());
        callback(null, result);
      });
    });
  });
};
