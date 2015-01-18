var express    = require('express');
var app        = express();
var router = express.Router();
var cdb = require('./couch/couch.js')

var port = process.env.PORT || 8080;    // set our port
app.use(express.static(process.cwd() + '/public'));

cdb.init('ratings')
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/', router);


router.get('/', function(req, res) {
  res.render('index.html'); 
});

app.listen(port);
console.log('Magic happens on port ' + port);