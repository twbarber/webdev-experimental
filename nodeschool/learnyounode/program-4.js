var fs = require('fs');
var content;
fs.readFile(process.argv[2], function (err, data) {
  if (err) throw err;
  content = data
  console.log(content.toString().split('\n').length -1 );
});
