import React, { useState } from 'react';
import Books from './Components/Books';
import BooksForm from './Components/BooksForm.js';
import Styles from './Styles.css'

function App() {
  const [books, setBooks] = useState([
   
  {
      title: "Othello",
      author: "William Shakespeare",
      description: "A tragedy by William Shakespeare set in Venice, revolving around the Moorish general Othello, his beloved wife Desdemona, and the machinations of the villainous Iago."
  },
  {
    title: "No Sweetness Here",
    author: "Ama Ata Aidoo",
    description: "A collection of short stories by Ama Ata Aidoo, exploring various facets of Ghanaian society with a focus on gender, tradition, and modernity."
  },
  {
    title: "Ananse In The Land Of Idiots",
    author: "Amu Djoleto",
    description: "A satirical novel by Amu Djoleto featuring the adventures of Ananse, a popular character in West African folklore, as he navigates and critiques societal norms."
},
{
  title: "Faceless",
  author: "Amma Darko",
  description: "A novel by Amma Darko exploring the life of a teenage girl named Fofo who becomes embroiled in the world of street children and urban poverty in Accra, Ghana."
},
{
  title: "She Stoops to Conquer",
  author: "Oliver Goldsmith",
  description: "A comedy play by Oliver Goldsmith satirizing the manners and conventions of 18th-century English society, particularly the pretensions of the upper class."
},
{
  title: "La Belle Fleur",
  author: "Dorothy Parker",
  description: "There is no specific work titled 'La Belle Fleur' by Dorothy Parker. It's possible it may be a misremembered or lesser-known title"
},
  
  
  ]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };


  return (
  
  <div className="container">
  <div className="container-inner">
  <Books books={books} />
  <BooksForm onAddBook={addBook} />
</div>
</div>
  );
}

export default App;
