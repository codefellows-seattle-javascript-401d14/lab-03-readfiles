'use strict';

const fs = require('fs');
const async = require('async');

module.exports = function(filePaths, callback) {
  var result = [];
  async.eachOf(filePaths, function(path, index){
    fs.readFile(path, (err, data) => {
      if (err) return callback(err);
      result.push(data.toString());
      if (index === filePaths.length-1)
        callback(null, result);
    });
  });
};
