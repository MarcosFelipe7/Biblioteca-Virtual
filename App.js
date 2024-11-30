import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AddBookForm from './Forms/AddBookForm';  
import BookList from './BookList';
import LoginForm from './LoginForm';  
import './styles/App.css';  

const App = () => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);  

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/books');
      const data = await response.json();
      setBooks(data); 
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  };

  const handleLogin = (name) => {
    setUser(name);  
    fetchBooks();  
  };

  return (
    <div className="app">
      {user ? (
        <>
          <Header />
          <AddBookForm onBookAdded={fetchBooks} />
          <BookList books={books} />
          <Footer />
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
