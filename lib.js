'use strict';

class JavascriptLibrary {

	// How do you find the missing number in a given integer array of 1 to 100?
	// missing number by order

	findMissingNumber( array, count = null)
	{
		const results = [ ];

		if( count == null )
		{
			count = array[ array.length - 1 ];
		}

		for (let i = 1; i <= count; i++) {
			
			if( !array.includes(i) )
			{
				results.push(i);
			}

		}

		return results;
	}

	// How do you find the duplicate number on a given integer array?

	findDuplicateNumber( array )
	{

		// find only duplicate number from the given array
		let unique = array.filter((value, index, self) => self.indexOf(value) != index);

		return unique;

	}

	// How do you find the largest and smallest number in an unsorted integer array? 

	findSmallestNSmallestNumber( array )
	{
		const results = [ ];

		let sorted = array.sort( (a, b) => a-b );

		results.push( sorted[0] );
		results.push( sorted[ sorted.length - 1 ] );

		return results;

	}


}



export default JavascriptLibrary;