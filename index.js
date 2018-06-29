const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');



// Use the environment variable or use a given port
const PORT = process.env.PORT || 8080;

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
require('./app/route/community-route.js')(app);
require('./app/route/members-route.js')(app);



// Start the server
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:%s', PORT);
});