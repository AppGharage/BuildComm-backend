const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const db = require('./app/config/config.js');
// Use the environment variable or use a given port
const PORT = process.env.PORT || 8080;

// disable urlencoded form request
app.use(bodyParser.urlencoded({ extended: false }));
// enable json form request
app.use(bodyParser.json());
// force: true will drop the table if it already exists
if (process.env.ENVIRONMENT || 'development') {
    db.sequelize.sync({ force: true }).then(() => {
        console.log('Drop and Resync with { force: true }');
    });
} else {
    db.sequelize.sync({ force: false })
}


app.get('/', () => { res.send('welcome') });

require('./app/route/users-route.js')(app);
require('./app/route/community-route.js')(app);
require('./app/route/members-route.js')(app);



// Start the server
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:%s', PORT);
});