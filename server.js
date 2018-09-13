var express = require('express');
var app = express();
var port = 8000;
var bp = require('body-parser');
var path = require('path');
var session = require('express-session');
app.use(bp.urlencoded());
app.use(express.static(path.join(__dirname, "/views")));
app.use(session({secret: 'keyword whatever'}));
app.set('views', path.join(__dirname,"/views"));
app.set('view engine', 'ejs');



app.get('/', function(req,res){
    if (req.session.counter) {
        req.session.counter += 1
    }
    else{
        req.session.counter = 1
    }
    res.render('index', {count: req.session.counter, name: req.session.counter})
})

app.listen(port,function(){
    console.log('listening')
})