'use strict'

// set is a data structure
// it also help to store the data but it doesn't allow the duplicates

class mSet {

	constructor( )
	{
		this.collections = [ ];
	}

	has( val )
	{
		return ( this.collections.indexOf( val ) !== -1 );
	}

	values( )
	{
		return this.collections;
	}

	add( val )
	{
		if( this.has(val) )
		{
			return false;
		}

		this.collections.push(val);

		return true;
	}

	remove( val )
	{

		if( this.has(val) )
		{
			return false;
		}

		let index = this.collections.indexOf(val);

		this.collections.splice(index, 1);

		return true;
	}

	size( )
	{
		return this.collections.length;
	}



}

export default mSet