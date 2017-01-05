'use strict';

const expect = require('chai').expect;
const readManyFiles = require('../lib/read-many-files.js');

describe('testing module readManyFiles', function(){
  describe('with a file that does not exist', function(){
    it('should pass an error into the callback', function(done){
      readManyFiles([`${__dirname}/../assets/does-not-exist.txt`], function(err, data){
        //console.log(err);
        expect(Boolean(err)).to.equal(true);
        console.log(data);
        done();
      });
    });
  });

  describe('with valid inputs', function(){
    var inputFiles = [`${__dirname}/../assets/star.txt`,
      `${__dirname}/../assets/wars.txt`,
      `${__dirname}/../assets/ipsum.txt`,
      `${__dirname}/../assets/bonus.txt`,
    ];
    it('should pass an array of text data that maps from the file paths array', function(done){
      var result = [ 'Well, that\'s the trick, isn\'t it? And it\'s going to cost you something extra. Ten thousand in advance. Ten thousand? We could almost buy our own ship for that! But who\'s going to fly it, kid! You? You bet I could. I\'m not such a bad pilot myself! We don\'t have to sit here and listen... We haven\'t that much with us. But we could pay you two thousand now, plus fifteen when we reach Alderaan. Seventeen, huh! Okay. You guys got yourself a ship. We\'ll leave as soon as you\'re ready. Docking bay Ninety-four. Ninety-four. Looks like somebody\'s beginning to take an interest in your handiwork. All right, we\'ll check it out.\n',
        'Open up in there! Oh, no! There isn\'t any other way out. I can\'t hold them off forever! Now what? This is some rescue. When you came in here, didn\'t you have a plan for getting out? He\'s the brains, sweetheart. Well, I didn\'t... What the hell are you doing? Somebody has to save our skins. Into the garbage chute, wise guy. Get in there you big furry oaf! I don\'t care what you smell! Get in there and don\'t worry about it. Wonderful girl! Either I\'m going to kill her or I\'m beginning to like her. Get in there!\n',
        'What? Yahoo! Look out! You\'re all clear, kid. Now let\'s blow this thing and go home! Stand by to fire at Rebel base. Standing by. Great shot, kid. That was one in a million. Remember, the Force will be with you...always.\n',
        'Secure this area until the alert is canceled. Give me regular reports. Do you know what\'s going on? Maybe it\'s another drill. What was that? Oh, it\'s nothing. Don\'t worry about it.\n',
      ];
      readManyFiles(inputFiles, function(err, data){
        expect(err).to.equal(null);
        expect(data[0]).to.equal(result[0]);
        expect(data[1]).to.equal(result[1]);
        expect(data[2]).to.equal(result[2]);
        expect(data[3]).to.equal(result[3]);
        done();
      });
    });
  });

});
