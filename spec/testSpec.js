import JavascriptLibrary from '../lib';

const lib = new JavascriptLibrary();


describe("Javascript Library Program Testing", () => {

	it("Missing Number Test!", () => {

		expect( [2,3,4] ).toEqual( lib.findMissingNumber( [1, 5] ) );

	});

	it("Missing Number Test with extra parameter", () => {

		expect( [2,3,4,6,7] ).toEqual( lib.findMissingNumber( [1, 5], 7 ) );

	});


})