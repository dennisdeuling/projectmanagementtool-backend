require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

const app_name = require('./package.json').name;
const debug = require('debug')(
	`${app_name}:${path.basename(__filename).split('.')[0]}`
);

const app = express();

// require database configuration
require('./configs/database.config');

// Passport and express-session
const session = require('express-session');
const passport = require('passport');

require('./configs/passport.config');

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// TODO: make a config file from it
app.use(
    cors({
        credentials: true,
        origin: [process.env.CORS_ALLOWED]
    })
);

// TODO: make a config file from it
// Session configuration
app.use(session({
    secret: 'myOwnSecretKey',
    resave: true,
    saveUninitialized: true,
    ttl: 60 * 60 * 24,
    cookie: {
        secure: process.env.NODE_ENV,
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        httpOnly: true,
        maxAge: 60 * 60 * 24
    }
}));

app.set('trust proxy', 1);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// default value for title local
app.locals.title = 'This is the backend from dennis';

const index = require('./routes/index.route');
app.use('/', index);

const user = require('./routes/user.route');
app.use('/api/user', user);

const client = require('./routes/client.route');
app.use('/api/client', client);

const project = require('./routes/project.route');
app.use('/api/project', project);

const ticket = require('./routes/ticket.route');
app.use('/api/ticket', ticket);

module.exports = app;
