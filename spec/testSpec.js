import JavascriptLibrary from '../lib';

const lib = new JavascriptLibrary();


describe("Javascript Library Program Testing", () => {

	it("Missing Number Test!", () => {

		expect( [2,3,4] ).toEqual( lib.findMissingNumber( [1, 5] ) );

	});

	it("Missing Number Test with extra parameter.", () => {

		expect( [2,3,4,6,7] ).toEqual( lib.findMissingNumber( [1, 5], 7 ) );

	});

	it("Find duplicate number from given array.", () => {

		expect( [4] ).toEqual( lib.findDuplicateNumber( [1, 2, 3, 4, 4, 5] ) );

	});

	it("Find largest and smallest number from unsorted given array.", () => {

		expect( [2,10] ).toEqual( lib.findSmallestNSmallestNumber( [10, 2, 3, 4, 4, 5] ) );

	});

	it("Find sum of number array from given array.", () => {

		const res = [ "(2,5)", "(4,3)", "(3,4)", "(-2,9)" ];

		expect( res ).toEqual( lib.findSumOfNumberArray( [2, 4, 3, 5, 6, -2, 4, 7, 8, 9], 7 ) );

	});

	it("Find given string is palindrome should return false!", () => {

		const res = "abc";

		expect( false ).toEqual( lib.findPalindrome( res ) );

	});


	it("Find given string is palindrome should return true", () => {

		const res = "aaa";

		expect( true ).toEqual( lib.findPalindrome( res ) );

	});



})