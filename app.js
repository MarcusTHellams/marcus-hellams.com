/* jshint -W119 */
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var path = require('path');


app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', exphbs({
    extname: '.html'
}));

app.get('/', function(req, res) {
    res.render('index');
});



app.listen(app.get('port'), function() {
    console.log(`Listening on port: ${app.get('port')}`);
});