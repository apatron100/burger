// Dependencies

// =============================================================

var express = require('express');
var app = express()

var bodyParser = require('body-parser');


app.get("/", function (req, res) {
	res.send("hello World")
})

app.listen(3000, function(){
	console.log("listening to port 3000")
})