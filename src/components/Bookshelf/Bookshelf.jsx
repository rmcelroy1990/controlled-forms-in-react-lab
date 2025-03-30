import { useState } from 'react';
import React from 'react'

const Bookshelf = () => {
    const [books, setBooks] = useState ([]);

const [newBook, setNewBook] = useState([
    { title: '', author: ''}
]);

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({
        ...prevBook,
        [name]: value,
    }));
};

const handleSubmut = (event) => {
    event.preventDefault();
    if(newBook.title && newBook.author) {
        setBooks((preBooks) => [...prevBooks, newBook]);
        setNewBook({ title: '', author: '' });
    };
};
    
    
    
    return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}></form>
  </div>
        <label htmlFor="title">Title: </label>
        <input 
            type="text"
            id="title"
            name="title"
            placeholder="Book Title"
            value={newBook.title}
            onChange={handleInputChange}
        />
 <div>
    <label htmlFor="author">Author: </label>
    <input
        type="text"
        id="author"
        name="author"
        placeholder="Author"
        value={newBook.author}
        onChange={handleInputChange}
        />
        </div>
    <button type="submit">Add Book</button>
    </form>
 </div>

  <div className="bookCardsDiv">{/* Book cards will display here */}
        {books.map((book, index) => (
    <div key={index} className="book-card">
    <h3 className="book-title">{book.title}</h3>
    <p className="book-author">by {book.author}</p>
</div>
))}
</div>

export default Bookshelf;
