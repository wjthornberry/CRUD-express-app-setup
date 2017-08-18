var express = require('express'); 
var app  = express();
var PORT = 3000;
var models = require('./models');
var apiRoutes = require('./app/routes/apiRoutes');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api.json'}));

app.use(express.static('app/public'));
apiRoutes(app, models);

models.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log(' ' + PORT);
    })
});