'use strict'

const createSet = require('../lib/example.js');



describe('first test', function(){

	it('first test', function() {

		const exam = [ 1, 2, 3];

		expect(exam).toEqual( createSet.createSet );

	});

	it('add value to set', function(){

		const out = [1,2,3,4]

		expect(out).toEqual( createSet.addSetFunc([1,2,3], 4) );

	});

	it('remove value from set', function(){

		const out = [1,2,3]

		expect(out).toEqual(createSet.removeSetFunc([1,2,3,4], 4));

	});

	it('remove string value from set', function(){

		const out = [1,2,3]

		expect(out).toEqual(createSet.removeSetFunc([1,2,3,'test'], 'test'));

	});

	it('doesnt allow duplicate value to set', function(){

		const out = [1,2,3,4]

		expect(out).toEqual( createSet.addSetFunc([1,2,3,4], 4) );

	});

	it('find values in set', function(){

		const in_ = ['lion', 'horse', 'bear']

		expect(0).toEqual( createSet.findValue(in_, 'lion') );

	});



});