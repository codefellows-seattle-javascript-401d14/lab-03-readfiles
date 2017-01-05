'use strict';

const expect = require('chai').expect;
const readFile = require('../lib/read-files.js');

describe('this is testing the readFile module', function(){
  describe('file that doesnt exist', function(){
    it('should pass an error into the callback', function(done){
      readFile([`${__dirname}/../assets/fake-file.txt`], function(err,data){
        expect(err).to.equal(err);
        console.log(data);
        done();
      });
    });
  });
});

describe('valid inputs', function(){
  var files = [`${__dirname}/../assets/obama.txt`,
    `${__dirname}/../assets/pokemon.txt`,
    `${__dirname}/../assets/samuel.txt`,
  ];
  it('should pass an array that matches with the files array', function(done){
    var result = ['It wasn\'t until after college, when I went to Chicago to work as a community organizer for a group of Christian churches, that I confronted my own spiritual dilemma. Rather than remain trapped in the past, I have made it clear to Iran\'s leaders and people that my country is prepared to move forward. Thank you very much everybody.','Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit','Now that we know who you are, I know who I am. I\'m not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain\'s going to be? He\'s the exact opposite of the hero. And most times they\'re friends, like you and me! I should\'ve known way back when... You know why, David? Because of the kids. They called me Mr Glass'];

    readFile(files, function(err,data){
      expect(err).to.equal(null);
      expect(data[0]).to.equal(result[0]);
      expect(data[1]).to.equal(result[1]);
      expect(data[2]).to.equal(result[2]);
      done();
    });
  });
});
