import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      <h2>Lista de Livros</h2>
      <ul>
        {books.length > 0 ? (
          books.map((book, index) => (
            <li key={index}>
              <h3>{book.title}</h3>
              <p><strong>Autor:</strong> {book.author}</p>
              <p><strong>Descrição:</strong> {book.description}</p>
            </li>
          ))
        ) : (
          <p>Carregando livros...</p>
        )}
      </ul>
    </div>
  );
};

export default BookList;
