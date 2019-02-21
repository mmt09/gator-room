// include modules
var    express = require('express'),
    app = express(),
    path = require('path'),
    less = require('less-middleware');

// compile and serve css
app.use(less(path.join(__dirname,'source','less'),{
    dest: path.join(__dirname, 'public'),
    options: {
        compiler: {
            compress: false,
        },
    },
    preprocess: {
        path: function(pathname, req) {
            return pathname.replace('/css/','/');
        },
    },
    force: true,
}));
// serve static content
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname + '/public'));
app.use(express.static('csc648-sp19-team103'))

// setup server
var server = app.listen(1337);

/*app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/csc648-sp19-team103/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})**/
