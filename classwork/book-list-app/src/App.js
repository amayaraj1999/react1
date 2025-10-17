import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [books, setBooks] = useState([]);

  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [formError, setFormError] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editBookName, setEditBookName] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editPublishDate, setEditPublishDate] = useState("");
  const [editError, setEditError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  // Add a new book
  const handleAddBook = (e) => {
    e.preventDefault();
    if (!bookName.trim()) {
      setFormError("Book name cannot be empty");
      return;
    }

    const newBook = {
      id: books.length + 1,
      bookName,
      author,
      publishDate,
    };

    setBooks([...books, newBook]);
    setBookName("");
    setAuthor("");
    setPublishDate("");
    setFormError("");
  };

  // Delete a book with confirmation
  const handleDelete = (id) => {
    const book = books.find((b) => b.id === id);
    if (!book) return;

    const confirmDelete = window.confirm(
      `Are you sure you want to delete the book "${book.bookName}" by ${book.author}?`
    );
    if (confirmDelete) {
      setBooks(books.filter((b) => b.id !== id));
      if (editingId === id) handleCancelEdit();
    }
  };

  // Edit a book
  const handleEdit = (book) => {
    setEditingId(book.id);
    setEditBookName(book.bookName);
    setEditAuthor(book.author);
    setEditPublishDate(book.publishDate);
    setEditError("");
  };

  // Save edited book
  const handleSaveEdit = () => {
    if (!editBookName.trim()) {
      setEditError("Book name cannot be empty");
      return;
    }

    const updatedBooks = books.map((b) =>
      b.id === editingId
        ? { ...b, bookName: editBookName, author: editAuthor, publishDate: editPublishDate }
        : b
    );

    setBooks(updatedBooks);
    handleCancelEdit();
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditBookName("");
    setEditAuthor("");
    setEditPublishDate("");
    setEditError("");
  };

  // Filter books
  const filteredBooks = books.filter(
    (b) =>
      b.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Book List Management</h1>

      {/* Add Book Form */}
      <form onSubmit={handleAddBook} className="form">
        <input
          type="text"
          placeholder="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="date"
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
      {formError && <p className="error">{formError}</p>}

      {/* Search */}
      <input
        type="text"
        placeholder="Search by book or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search"
      />

      {/* Book Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Publish Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>
                  {editingId === book.id ? (
                    <input
                      value={editBookName}
                      onChange={(e) => setEditBookName(e.target.value)}
                    />
                  ) : (
                    book.bookName
                  )}
                </td>
                <td>
                  {editingId === book.id ? (
                    <input
                      value={editAuthor}
                      onChange={(e) => setEditAuthor(e.target.value)}
                    />
                  ) : (
                    book.author
                  )}
                </td>
                <td>
                  {editingId === book.id ? (
                    <input
                      type="date"
                      value={editPublishDate}
                      onChange={(e) => setEditPublishDate(e.target.value)}
                    />
                  ) : (
                    book.publishDate
                  )}
                </td>
                <td>
                  {editingId === book.id ? (
                    <>
                      <button onClick={handleSaveEdit}>Save</button>
                      <button onClick={handleCancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(book)}>Edit</button>
                      <button onClick={() => handleDelete(book.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-data">
                No books found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {editError && <p className="error">{editError}</p>}
    </div>
  );
}
