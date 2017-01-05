'use strict';

const fs = require('fs');

module.exports = function (filePaths, callback) {
  let arrayData = [];
  // read inputFile in
  fs.readFile(filePaths[0], (err, data) => {
    if (err) return callback(err);
    // add message to inputFile data
    arrayData.push(data.toString());
    fs.readFile(filePaths[1], (err, data) => {
      if (err) return callback(err);
    // add message to inputFile data
      arrayData.push(data.toString());
      fs.readFile(filePaths[2], (err, data) => {
        if (err) return callback(err);
      // add message to inputFile data
        arrayData.push(data.toString());
        callback(null, arrayData);
      });
    });
  });
};
