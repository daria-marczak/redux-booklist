import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  
  renderList() {
    return this.props.books.map(book => {
      return (
        <li 
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}
// if the state ever changes the container will automatically rerender
// mapStateToProps takes state and returns the object that is then
// present to the component (this.props.books)

// anything return from this function will end up as props on the
// BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all
  // of our reducers
  return bindActionCreators({ selectBook }, dispatch);
}
// dispatch actually sends them to all the different reducers
// it takes selectBook and sends it

// promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

// connect takes a function and a component and creates a container
