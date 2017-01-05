'use strict';

const fs = require('fs');

module.exports = function (inputFiles, callback) {
  let samuelElJackson = [];
  //read first item in the array
  fs.readFile(inputFiles[0], (err, data) => {
    if (err) return callback(err);
    samuelElJackson.push(data.toString());
    console.log(samuelElJackson);
    //read second item in the array
    fs.readFile(inputFiles[1], (err, data) => {
      if (err) return callback(err);
      samuelElJackson.push(data.toString());
      console.log(samuelElJackson);
    //read third item in the array
      fs.readFile(inputFiles[2], (err, data) => {
        if (err) return callback(err);
        samuelElJackson.push(data.toString());
        callback(null, samuelElJackson);
      });
    });

  });
};
