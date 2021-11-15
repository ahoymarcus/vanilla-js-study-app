// https://www.youtube.com/watch?v=2Ji-clqUYnA
// 0 hr 1' 1''
const express = require('express');

const mainRoute = require('./routes/main');
const basicAppRoute = require('./routes/apps');



const server = express();

server.use(express.static('public'));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());


server.use('/', mainRoute);
server.use('/app/v1', basicAppRoute);





const port = process.env.PORT || 5000;

server.listen(port, () => {
	console.log(`Server running at port ${port}`);
});






