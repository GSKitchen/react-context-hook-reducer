import React, { createContext, useReducer } from "react";
import { bookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, [
    { title: "Kabababu", author: "Sunil Ganguly", id: 1 },
    { title: "Sonar Kella", author: "Satyajit Roy", id: 2 },
    { title: "Kalbela", author: "Samaresh Majumdar", id: 3 }
  ]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
