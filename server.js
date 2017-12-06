var express = require('express');
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))

app.get("/", function (req, res) {
	res.send("hello World")
})

app.listen(3000, function(){
	console.log("listening to port 3000")
})