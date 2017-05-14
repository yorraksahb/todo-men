/**
 * Created by bhaskarroy on 5/11/17.
 */
'use strict';

var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require("body-parser"),
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/testdb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : true}));

var routes = require('./api/routes/todoListRoute');
routes(app);

app.listen(port);
console.log("Listening to PORT 3000");