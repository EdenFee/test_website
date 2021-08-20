const express = require('express');
const app = express();
const path = require('path');



app.use(express.json());
app.use(express.static('./public'));

app.listen(8080, () => console.log('server start...');

app.get('/', (req, res) =>{
	res.sendFile(path.resolve(__dirname, './public/index.html')
});

app.get('/:name', (req, res) =>{
	var name = req.params.name;
	res.json(name);
});
