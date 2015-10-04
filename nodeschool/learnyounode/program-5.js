var fs = require('fs');
var files;

fs.readdir(process.argv[2], function callback (err, list) {
    if (err) {
        console.error(err);
        return;
    }
    Array.prototype.forEach.call(files, function (el) {
        if (path.extname(el).slice(1) === ext) {
            console.log(el);
        }
    });
});

