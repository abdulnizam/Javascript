'use strict';

class stack {

	constructor( )
	{
		this.count = 0;
		this.data = { };
	}

	push( val )
	{

		this.data[this.count] = val;
		this.count++;

	}

	pop( )
	{
		if( this.count === 0 )
		{
			return undefined;
		}
		this.count--;
		const results = this.data[this.count];
		delete this.data[this.count];
		return results;
	}

	peek( )
	{
		return this.data[this.count - 1];
	}

}

export default stack;