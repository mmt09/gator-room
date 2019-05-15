const { IncomingForm } = require('formidable');
const path = require('path');
const fs = require('fs-extra');

// module.exports = function upload(req, res) {
module.exports = app => {
  const form = new IncomingForm();

  app.route('api/upload').post((req, res, next) => {
    req.pipe(req.busboy);

    req.busboy.on('file', (fieldname, file, filename) => {
      console.log(`Upload of '${filename}' started`);

      const fstream = fs.createWriteStream(path.join(uploadPath, filename));
      file.pipe(fstream);
      fstream.on('close', () => {
        console.log(`Upload of '${filename}' finished`);
        res.redirect('back');
      });
    });
  });

  form.on('file', (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
  });
  form.on('end', () => {
    res.json();
  });
  form.parse(req);
};
