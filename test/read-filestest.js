'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const myreadfile = require('../lib/read-files.js');

let bacon = `${__dirname}/assets/bacon.txt`;
let hipster = `${__dirname}/assets/hipster.txt`;
let mobydick = `${__dirname}/assets/mobydick.txt`;


// describe('testing read-file module', function(){
//     describe('with valid inputs', function (){
//         before(function(done){
            
//         })   
//     })

//       // for async testing your it function must have a done callback
//     it('passes an error into the callback if any of the three file paths are a file that do not exist', function(done){
//       let message = 'A path you entered does not exist';

//       // call our function so that we can test it
//       readfiles(textarrayofIpsum, message, function(err, data){

//         // if there was an error call done(err) to tell mocha the test failed
//         // dont execute any futher if the its allready failed
//         if(err) return done(err);

//         // run our assertions
//         expect(data).to.equal(originalText + message);
        
//         // tell mocha the test has finished, so it can run the next test
//         // if you dont do this mocha will assume the test failed and  you
//         // will get a timeout error
//         done();
//       });
//     });

