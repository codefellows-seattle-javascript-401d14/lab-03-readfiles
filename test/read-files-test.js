'use strict';

const fs = require('fs');
const expect = require('chai').expect;

const readFile =  require('./lib/read-files.js');

let samuel = './assets/samuel.txt';
let el = './assets/el.txt';
let jackson = './assets/jackson.txt';

describe('testing module read-files', function(){
  describe('with valid inputs', function(){
    fs.writeFile(samuel, el, jackson, function(err){
    if (err) return callback(err);
    done();
    });
  });
});
