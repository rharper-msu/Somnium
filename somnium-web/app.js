var express = require('express');
var plaid = require('plaid');

var app = express();

var PORT = 3000;

var PLAID_ENV = plaid.environments.tartan;

app.get('/', function (req, res) {

    // plaid.getCategories(PLAID_ENV, function (err, data) {
    //     res.send(data);
    // });

    plaid.getCategory('13005005',PLAID_ENV, function (err, data) {
        res.send(data);
    });
});

app.listen(PORT, function () {
    console.log('listening on port ' + PORT);
});
