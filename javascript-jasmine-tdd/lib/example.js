'use strict'

let createSet = [ 1,2,3 ]


function addSetFunc( arr, val )
{
	let index = findValue(arr, val)
	
	if( index === -1 )
	{
		arr.push(val);
	}

	return arr;
}

function removeSetFunc(arr, val)
{
	let index = findValue(arr, val)

	arr.splice(index, 1);

	return arr;
}

function findValue(arr, val)
{
	let index = arr.findIndex( x => x == val)

	return index;

}

module.exports = { createSet, addSetFunc, removeSetFunc, findValue }

