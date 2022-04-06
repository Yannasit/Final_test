import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BooksList from "./pages/BooksList";
import Search from "./components/Search";
import BookDetail from "./pages/BookDetail";
import axios from "axios";


function App() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await axios.get(
      "https://se-book-store.herokuapp.com/api/v1/books",
      {}
    );
    setBooks(response.data);
  };

  const getBooksSearch = async (search) => {
    const response = await axios.get(
      "https://se-book-store.herokuapp.com/api/v1/books",
      {
        params: {
          query: search,
        },
      }
    );
    setBooks(response.data.results);
  };

  const getBooksByID = async (isbn) => {
    const response = await axios.get(
      `https://se-book-store.herokuapp.com/api/v1/books/${isbn}`,
      {}
    );
    setBooks(response.data);
  };
  
  return (
    <Router>
      <Search getBooksSearch={getBooksSearch} />
      <Routes>
        <Route
          path="/"
          element={<BooksList handledOnLoad={getBooks} books={books} />}
        />
        <Route
          path="/Bookdetail/:isbn"
          element={<BookDetail getBooksByID={getBooksByID} books={books} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
