import React, { Component } from 'react';
import uuid from 'uuid'

class AddBook extends Component {
  
  constructor(props) {
  	super(props);
  	this.state = {
  		bookStore: {}
  	}
  }

  static defaultProps = {
  	categories: ['Computer', 'Science']
  }

  handleSubmit(e) {

  		if(this.refs.title.value === '')
  		{
  			alert('please enter title')
  		}
  		this.setState({ bookStore: {
  			id: uuid.v4(),
  			title: this.refs.title.value,
  			category: this.refs.category.value
  		}}, function () {
  			
  			this.props.addbookprops(this.state.bookStore)

  		})

  		this.refs.title.value = ''

  		e.preventDefault()
  }

  render() {
  	let category = this.props.categories.map(cate => {
  		return (
  			<option key={cate} value={cate}>{cate}</option>
  			)
  	})
    return (
      <div className="AddBook">
        <h2> Add Book: </h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
        	<label>Title: </label> 
        	<input type="text" ref="title" />
        	<br />
        	<label>Category: </label>
        	<select ref="category">
        		{category}
        	</select>
        	<br/>
        	<input type="submit" value="submit" />
        </form>

      </div>
    );
  }
}

export default AddBook;
