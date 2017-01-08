'use strict';

const readFile = require('./lib/read-files.js');

const main = module.exports = function(argv){
  if (!argv || !argv.length == 5) return 'Usage Error: must provide three files';

  return readFile(argv.slice(2,5), function(err, data){
    if (err) console.error(err);
    console.log(data);
  });
};

main(process.argv);
