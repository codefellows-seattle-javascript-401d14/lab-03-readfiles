'use strict';

const samuel = require('./lib/read-files.js');

const main = module.exports = function(argv) {
  if(!argv || argv.length < 3) return 'Usage Error: must provide "great and furious anger"';
  return samuel(argv.slice(2,argv.length), function(err, data){
    if (err) {
      return console.error(err);
    }
    return console.log(data);
  });
};

main(process.argv);
