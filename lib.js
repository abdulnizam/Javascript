'use strict';

class JavascriptLibrary {

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

}



export default JavascriptLibrary;