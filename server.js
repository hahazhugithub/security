var express = require("express"),
    app = express(),
    Tokens = require('csrf'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    tokens= new Tokens(),
    secret = tokens.secretSync(),
    uid = require('uid-safe');

app.use(cookieParser());

app.set('views', __dirname + '/client');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/dist'));

console.log("uid",uid.sync(128));

app.get('/index.html', function (req, res) {
    var token = tokens.create(secret);

    console.log(tokens.verify(secret, token));
    res.render('index.html', {
        token: token,
        secret: secret
    });
});

app.get('/user', function (req, res) {
    console.log(req.headers);
    res.json({
        name: "Michael Zhu"
    })
});

app.listen(5500, () => {
    console.log("server started");
});