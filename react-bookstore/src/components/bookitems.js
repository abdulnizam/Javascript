import React, { Component } from 'react';

class BookItems extends Component {

  onDelete(id) {
  	this.props.onDeleteItem(id)
  }

  render() {
  	let items = this.props.store.map(book => {
  		return ( <li key={book.id} ><strong> {book.title}</strong> { book.category} <a href="javascript:void(0)" onClick={this.onDelete.bind(this, book.id)}>x</a> </li>  );
  	})

    return (
      <div className="BookItems">
        <ul>
        	{items}
        </ul>
      </div>
    );
  }
}

export default BookItems;
