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

	findSumOfNumberArray( array, number )
	{
		const results = [ ];

		for (let i = 0; i < array.length; i++)
		{
			let first = array [i];
			for (let j = i + 1; j < array.length; j++)
			{
				let second = array [j];

				if ((first + second) == number)
				{
					results.push( '(' + first + ',' + second +')' );
				}	
			}
		}

		return results;

	}

	findPalindrome( str )
	{

		const re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  
		let lowRegStr = str.toLowerCase().replace(re, '');
		// str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
		// str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
		// var lowRegStr = "amanaplanacanalpanama";

		// Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
		let reverseStr = lowRegStr.split('').reverse().join(''); 
		// lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
		// ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
		// ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
		// So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
		// And, var reverseStr = "amanaplanacanalpanama";

		// Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
		return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true

	}


}



export default JavascriptLibrary;