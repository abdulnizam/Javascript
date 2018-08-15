
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

	app.get('/largest-smallest', (req, res) => {

		const results = {

			'largest' : obj.largestNsmallestResults[1],

			'smallest' : obj.largestNsmallestResults[0]

		}
		
		res.send( results );

	});

   	app.get('/sum-array-number', (req, res) => {
		
		res.send( obj.sumOfNumberArrayResults );

	});


	app.listen(2000, (req, res) => {

		console.log('server is running ');

	});
	
}


export default routes;

