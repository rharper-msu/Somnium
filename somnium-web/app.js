var express = require('express');
var app = express();

var PORT = 3000;

app.get('/',function(req, res){
    res.send("Somnium");
});

app.listen(PORT,function(){
    console.log('listening on port ' + PORT);
});
