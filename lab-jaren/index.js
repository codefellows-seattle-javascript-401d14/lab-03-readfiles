'use strict';

const readFiles = require('./lib/read-files.js');

const main = module.exports = function(argv){
  if (!argv || argv.length != 5) return 'Usage error: must provide three separate files';
  return readFiles(argv.slice(2, 5), function(err, data){
    if (err) return console.error(err);
    console.log(data);
  });
};

console.log(main(process.argv));
