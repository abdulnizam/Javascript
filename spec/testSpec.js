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


})