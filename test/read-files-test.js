'use strict';

const expect = require('chai').expect;
const readFiles = require('../lib/read-files.js');

describe('testing module readFiles', function(){
  describe('with a file that does not exist', function(){
    it('should pass an error into the callback', function(done){
      readFiles([`${__dirname}/../assets/does-not-exist.txt`], function(err, data){
        //console.log(err);
        expect(Boolean(err)).to.equal(true);
        console.log(data);
        done();
      });
    });
  });
  describe('valid inputs', function(){
    var files = [`${__dirname}/../assets/pulp-one.txt`,
      `${__dirname}/../assets/fiction-two.txt`,
      `${__dirname}/../assets/slj-three.txt`,
    ];
    it('should pass an array that matches with the files array', function(done){
      var result = ['Look, just because I don\'t be givin\' no man a foot massage don\'t make it right for Marsellus to throw Antwone into a glass motherfuckin\' house, fuckin\' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, \'cause I\'ll kill the motherfucker, know what I\'m sayin\'?My money\'s in that office, right? If she start giving me some bullshit about it ain\'t there, and we got to go someplace else and get it, I\'m gonna shoot you in the head then and there. Then I\'m gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I\'m talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.'];
      readFiles(files, function(err, data) {
        expect(err).to.equal(null);
        expect(data[0]).to.equal(result[0]);
        expect(data[1]).to.equal(result[1]);
        expect(data[2]).to.equal(result[2]);
        done();
      });
    });
  });
});
