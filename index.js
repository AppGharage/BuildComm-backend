const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const env = require('dotenv');
const cors = require('cors');

const db = require('./app/config/config.js');
// Use the environment variable or use a given port
const PORT = process.env.PORT || 8080;

//CORS middleware allows access resources from remote hosts
const allowCors = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}
app.use(allowCors);

// disable urlencoded form request
app.use(bodyParser.urlencoded({ extended: false }));
// enable json form request
app.use(bodyParser.json());
// force: true will drop the table if it already exists
const environment = process.env.ENVIRONMENT || 'development';
if (environment == 'development') {
    db.sequelize.sync({ force: true }).then(() => {
        console.log('Drop and Resync with { force: true }');
    });
}


app.get('/', (req, res) => { res.send('welcome') });

require('./app/route/users-route.js')(app);
require('./app/route/community-route.js')(app);
require('./app/route/members-route.js')(app);



// Start the server
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:%s', PORT);
});