'use strict'

const uuid = require('uuid')

class NodeLib {
	booklist () {
		let list = [ 
			{
	          id: uuid.v4(),
	          title: "PHP",
	          category: "Computer"
	        },
	        {
	          id: uuid.v4(),
	          title: "Java",
	          category: "Computer"
	        },
	        {
	          id: uuid.v4(),
	          title: "Physics",
	          category: "Science"
	        }
		]

		return (list)
	}
}

module.exports = NodeLib;