import React, { createContext, useState } from "react";
import uuid from "uuid";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Kabababu", author: "Sunil Ganguly", id: 1 },
    { title: "Sonar Kella", author: "Satyajit Roy", id: 2 },
    { title: "Kalbela", author: "Samaresh Majumdar", id: 3 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuid() }]);
  };

  const removeBook = bookId => {
    setBooks(books.filter(book => book.id !== bookId));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
