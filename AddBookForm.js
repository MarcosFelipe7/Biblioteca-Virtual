import React, { useState } from 'react';

const AddBookForm = ({ onBookAdded }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:5000/api/books/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, author, description }),
        });
  
        if (response.ok) {
          alert('Livro adicionado com sucesso!');
          setTitle('');
          setAuthor('');
          setDescription('');
          onBookAdded(); // Atualiza a lista de livros
        } else {
          const errorData = await response.json();
          alert(`Erro: ${errorData.message}`);
        }
      } catch (error) {
        alert('Erro ao adicionar o livro');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Adicionar Livro</h2>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Autor:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Adicionar Livro</button>
      </form>
    );
  };
  
  export default AddBookForm;
  