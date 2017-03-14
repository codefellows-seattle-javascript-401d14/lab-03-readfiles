'use strict';
//const readFiles = require('./lib/read-files.js');
const readFiles = require('./lib/read-files.js');

const main = module.exports = function(argv){
  if (!argv || argv.length < 3) return 'Usage error: must provide at least one file path';
  return readFiles(argv.slice(2, argv.length), function(err, data){
    if (err) return console.error(err);
    console.log(data);
  });
};

console.log(main(process.argv));
