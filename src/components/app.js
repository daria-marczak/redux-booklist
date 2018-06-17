import React, { Component } from 'react';
import BookList from "../containers/BookList";
import BookDetail from "../containers/BookDetail";

export default class App extends Component {
  render() {
    return (
      <div>
        <p>Book list</p>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
