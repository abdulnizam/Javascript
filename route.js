
import Express from 'express';

const app = Express();


function routes( obj ) {

	app.get('/', (req, res) => {
	
		res.send( 'Welcome to Javascript Programs' );

	});

	app.get('/missing-number', (req, res) => {
		
		res.send( obj.missingResults );

	});

	app.get('/duplicate-number', (req, res) => {
		
		res.send( obj.duplicateNumberResults );

	});

	app.listen(2000, (req, res) => {

		console.log('server is running ' );

	});
	
}

export default routes;

