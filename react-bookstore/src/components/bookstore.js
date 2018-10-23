import React, { Component } from 'react';
import BookItems from './bookitems'
import AddBook from './addbook'

class BookStore extends Component {
  
  handleUpdate(data) {
  	this.props.addbookpropsMain(data)
  }

  onDelete(id){
  	this.props.onDelete(id)
  }

  render() {
    return (
      <div className="BookStore">
      	<AddBook addbookprops={this.handleUpdate.bind(this)} />
        <h2> List: </h2>
        <BookItems store={this.props.bookstore} onDeleteItem={this.onDelete.bind(this)} />
      </div>
    );
  }
}

export default BookStore;
