import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        required
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Book Author"
        value={author}
        required
        onChange={e => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
