// CONTROLLERS
const path = require('path');



const basicApp = (req, res) => {
	// console.log(path.resolve(_dirname, '../public/web-apps/assets/index.html'));
	
	// res.status(200).send('Basic App route');
	res.sendFile(path.resolve(__dirname, '../public/web-apps/assets/index.html'));
};




module.exports = basicApp




