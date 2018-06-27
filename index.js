const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');



// disable urlencoded form request
app.use(bodyParser.urlencoded({ extended: false }));

// enable json form request
app.use(bodyParser.json());

const db = require('./app/config/config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync with { force: true }');
});

require('./app/route/users-route.js')(app);

// Create a Server
var server = app.listen(3000, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})