var express = require('express');
var plaid = require('plaid');

var app = express();

var PORT = 3000;

var PLAID_ENV = plaid.environments.tartan;

app.get('/public', function (req, res) {

    // plaid.getCategories(PLAID_ENV, function (err, data) {
    //     res.send(data);
    // });

    // plaid.getCategory('13005005', PLAID_ENV, function (err, data) {
    //     res.send(data);
    // });  

    // plaid.getInstitutions(PLAID_ENV, function (err, data) {
    //     res.send(data);
    // });

    plaid.searchAllInstitutions({ id: '5301a93ac140de84910000e0' }, PLAID_ENV, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

app.get('/private',function(req, res){
    var plaidClient = new plaid.Client('test_id', 'test_secret', PLAID_ENV);
    res.send(plaidClient);
});

app.listen(PORT, function () {
    console.log('listening on port ' + PORT);
});
