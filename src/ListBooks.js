import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf.js'


class ListBooks extends Component {
  render() {


    return (


      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={this.props.books} changeShelf={this.props.changeShelf} shelf={'currentlyReading'} />
            <BookShelf books={this.props.books} changeShelf={this.props.changeShelf} shelf={'wantToRead'} />
            <BookShelf books={this.props.books} changeShelf={this.props.changeShelf} shelf={'read'} />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>
            Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
