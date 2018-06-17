export function selectBook(book) {
  // selectBook is an action creator and it needs to return an action,
  // so and object with a type property
  return {
    type: "BOOK_SELECTED",
    payload: book // more information on the action that is being taken
  }
}
