const { IncomingForm } = require('formidable');
const fs = require('fs-extra');

module.exports = function upload(req, res) {
  const form = new IncomingForm();

  form.on('file', (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    fs.writeFile(field, file, err => {
      if (!err) {
        console.log('Written');
      }
    });
  });

  form.on('end', () => {
    res.json();
  });

  form.parse(req);
};
