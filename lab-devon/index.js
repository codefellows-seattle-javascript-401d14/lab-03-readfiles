'use strict';

const readFile = require('./lib/read-files.js');

const main = module.exports = function(argv) {
  if(!argv || argv.length != 3) return 'Usage Error: not enough files were given';

  return readFile(argv), function(err,data){
    if (err) return console.error(err);
    console.log(data);
  };
};

console.log(main(process.argv));
