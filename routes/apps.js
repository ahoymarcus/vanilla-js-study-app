// CONTROLLERS
const path = require('path');



const basicApp = (req, res) => {
	
	// res.status(200).send('Basic App route');
	res.sendFile(path.resolve(__dirname, '../public/web-app/assets/index.html'));
};




module.exports = basicApp




