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
    {/* Form will go here */}
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>
);
};

export default Bookshelf;
