import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks.js'
import ListBooks from './ListBooks.js'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  changeShelf = (book, shelf) => {
    console.log('book id: ', book)
    console.log('shelf: ', shelf)


    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }))
    })

    
  }

  render() {
    return (

      <div className="app">
          <Route exact path='/' render={() => (
            <ListBooks books={this.state.books} changeShelf={this.changeShelf} />
          )} />
          <Route path='/search' render={() => (
            <SearchBooks books={this.state.books} changeShelf={this.changeShelf}  />
          )} />
      </div>

    )
  }
}

export default BooksApp
