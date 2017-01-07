'use strict';

const readfiles = require('./lib/read-files.js');
const main = module.exports = function (argv){
  if(argv.length !=5) return 'Please enter at least 3 arguments';
  return readfiles(argv.slice(2,5), function(err, data){
    if (err) {
      return console.error(err);
    }
    return console.log(data);
  });
};
console.log(main(process.argv));
