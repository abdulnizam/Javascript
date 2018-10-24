import React, { Component } from 'react';
import BookStore from './components/bookstore'
import uuid from 'uuid'
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      bookstore: [
      ]
    }
  }

  componentWillMount() {
    this.initialData()
  }

  initialData() {
    $.get({ url: 'http://localhost:8080/book', 
            dataType: 'json',
            cache: false,
            success: function(res) {
                this.setState({ bookstore: res})
              }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
              } 
            
            });
  }

  handleAddBook(data) {

    let allBooks = this.state.bookstore

    allBooks.push(data)

    this.setState({bookstore: allBooks})

  }

  onDeleteItems(id) {

    let allBooks = this.state.bookstore

    let findbooks = allBooks.findIndex(x => x.id === id)

    allBooks.splice(findbooks, 1)

    this.setState({bookstore: allBooks})

  }

  render() {
    return (
      <div className="App">
        <BookStore bookstore={this.state.bookstore} onDelete={this.onDeleteItems.bind(this)} addbookpropsMain={this.handleAddBook.bind(this)} />
      </div>
    );
  }
}

export default App;
