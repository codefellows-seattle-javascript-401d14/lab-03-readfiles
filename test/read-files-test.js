'use-strict';

const fs = require('fs');
const expect = require('chai').expect;
const index = require('../lib/read-files.js');

let filePaths = [
  `${__dirname}/../assets/stuff.txt`,
  `${__dirname}/../assets/stuff2.txt`,
  `${__dirname}/../assets/stuff3.txt`,
];

describe('testing callbacks', function(){
  describe('with valid inputs', function(){
    var testData = [];

    before(function(done){
      fs.readFile(filePaths[0], (err, data) => {
        if (err) return done(err);
        testData.push(data.toString());
        fs.readFile(filePaths[1], (err, data) => {
          if (err) return done(err);
          testData.push(data.toString());
          fs.readFile(filePaths[2], (err, data) => {
            if (err) return done(err);
            testData.push(data.toString());
            done();
          });
        });
      });
    });

    it('should expect "three files"', (done) =>{
      index(filePaths, function(err, data){
        if (err) return done(err);
        expect(testData[0]).to.equal(data[0]);
        expect(testData[1]).to.equal(data[1]);
        expect(testData[2]).to.equal(data[2]);
        done();
      });
    });

    describe('with invalid inputs', function(){
      it('should expect "Usage Error: must provide three files"', function(done){
        // with bad file paths readFIles should fail
        let badFiles = [ './assets/wr.txt', './assets/stusdfff2.txt', './assets/sdf.txt'];

        index(badFiles, function(err, data) {
          expect(!!err).to.equal(true);
          done();
        });
      });
    });
  });
});
// const fs = require('fs');
// const expect = require('chai').expect;
//
// const readFile = require('../lib/read-files.js');
//
// let inputFile = './assets/stuff.txt/';
// let originalText = './assets/stuff2.txt/';
// let outputFile = './assets/stuff3.txt/';
//
// describe('testing module readFile', function(){
//   describe('with valid inputs', function(){
//     before(function(done){
//       fs.writeFile(inputFile, originalText, function(err){
//         if (err) done(err);
//         done();
//       });
//     });
//
//     after(function(done){
//       fs.unlink(inputFile, function(err){
//         if (err) done(err);
//         fs.unlink(outputFile, function(err){
//           if (err) done(err);
//           done();
//         });
//       });
//     });

//
//     // for async testing your it function must have a done callback
//     it('should return a vaild message', function(done){
//       let message = 'hello world';
//
//       // call our function so that we can test it
//       appendFile(inputFile, outputFile, message, function(err, data){
//
//         // if there was an error call done(err) to tell mocha the test failed
//         // dont execute any futher if the its allready failed
//         if(err) return done(err);
//
//         // run our assertions
//         expect(data).to.equal(originalText + message);
//
//         // tell mocha the test has finished, so it can run the next test
//         // if you dont do this mocha will assume the test failed and  you
//         // will get a timeout error
//         done();
//       });
//     });
//
//   });
// });
