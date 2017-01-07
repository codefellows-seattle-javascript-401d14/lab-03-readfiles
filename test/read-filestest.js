'use strict';
const fs = require('fs');
const expect = require('chai').expect;
const myreadfile = require('../lib/read-files.js');

let bacon = `${__dirname}/../assets/bacon.txt`;
let hipster = `${__dirname}/../assets/hipster.txt`;
let mobydick = `${__dirname}/../assets/mobydick.txt`;

let filePath = [bacon, hipster, mobydick];

describe('testing the file read module', function(){
  let testData = [];
  describe('testing valid input which is the correct file name', function(){
    before(function(done){
      fs.readFile(filePath[0] , 'utf8', function(err, data){
        if (err) return done(err);
        testData.push(data);

        fs.readFile(filePath[1] , 'utf8', function(err, data){
          if (err) return done(err);
          testData.push(data);

          fs.readFile(filePath[2] , 'utf8', function(err, data){
            if (err) return done(err);
            testData.push(data);
            done();
          });
        });
      });
    }); //end of before block
    it('should return exact match of text', function(done){  //it blocks should always have a done
      myreadfile(filePath, function(err, data){
        if(err) return done(err);
        expect(testData[0]).to.equal(data[0]);   //exact arrays will never match because of memory isses, so must compares the indexes of arrays
        expect(testData[1]).to.equal(data[1]);
        expect(testData[2]).to.equal(data[2]);
        done(); //done should always do inside the block
      }); // end of myreadfile block
    }); // end of 'exact match of text'it block
  });// end of second describe block

  describe('testing for invalid data', function(){
    it('should return not valid data error', function(done){ //it blocks should always have a done
      let badFilePath = ['/../assets/badfg.txt', '/../adfgdfgs/bacon.tx', '/../assets/bacon.jpg'];
      myreadfile(badFilePath, function(err){
        expect(!!err).to.equal(true);  // "expect there to be an error"
        done();
      }); //end of badFilePath block
    });//end of not valid data error block
  }); //end of invalid data block
}); // end of describe block
