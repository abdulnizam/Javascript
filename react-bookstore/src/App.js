import React, { Component } from 'react';
import BookStore from './components/bookstore'
import uuid from 'uuid'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      bookstore: [
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
    }
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
