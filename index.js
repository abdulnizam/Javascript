import JavascriptLibrary from './lib';
import routes from './route';

const lib = new JavascriptLibrary();

// find missing number 

// @param1 array = [ 1, 3, 4]
// @param2 count = 1 to 100 ( optional )

const missingResults = lib.findMissingNumber( [ 1, 3, 6, 7, 10 ] );






// passing results to routes

const resultsObj = {

	missingResults

};

// console.log( missingResults );

routes( resultsObj );




