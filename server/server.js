const express = require('express');

var app = express();

app.get('/', (req, res)=> {
	res.status(404).send({
		error: 'Page not found.'
	});
});

app.get('/users', (req, res)=> {
	res.status(404).send([{
		name: 'Mike',
		age: 45,
	}, {
		name: 'Andrew',
		age: 25
	}])	
});


app.listen(3000);
module.exports.app = app;