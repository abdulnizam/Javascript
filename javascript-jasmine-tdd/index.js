'use strict';

import JavascriptLibrary from './lib/lib';
import routes from './route';

const lib = new JavascriptLibrary();

// find missing number 

// @param1 array = [ 1, 3, 4]
// @param2 count = 1 to 100 ( optional )
const missingResults = lib.findMissingNumber( [ 1,3,6,7,10 ] );

// find duplicate number
// @param array = [1,2,3,3,4]
const duplicateNumberResults = lib.findDuplicateNumber( [1,2,3,3,4] );

// find largest and smallest from given unsorted array
// @param array = [2,16,5,6,7,1,10]
const largestNsmallestResults = lib.findSmallestNSmallestNumber( [2,16,5,6,7,1,10] );

// find sum of number array from given array
// @param array = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9]
const sumOfNumberArrayResults = lib.findSumOfNumberArray( [2, 4, 3, 5, 6, -2, 4, 7, 8, 9], 7 );

// find palindrome from given string
// @param str = "aaaaaa" or "abc"
const findPalindromeResults = lib.findPalindrome("aaaaa");


// passing results to routes

const resultsObj = {

	missingResults,

	duplicateNumberResults,

	largestNsmallestResults,

	sumOfNumberArrayResults,

	findPalindromeResults

};

// console.log( missingResults );

routes( resultsObj );




