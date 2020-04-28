
'use strict'

const config = require('config')

var express = require("express");

var app = express(); app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});

var data_set = ['John', 'Jake', 'Anne']

app.get("/some-url", (req, res, next) => {
    if (data_set[req.query.name] == null) {
        data_set.push(req.query.name)
    }
    res.send(data_set);
});

app.get("/another-url", (req, res, next) => {
    res.send(data_set);
});
