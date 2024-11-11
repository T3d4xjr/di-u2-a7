import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {  
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    }else{
      setIndex(0);
    }
  }
  
  function handlePreviousClick()
  {
    if (index >0) {
      setIndex(index - 1);
    }else{
      setIndex(11);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
          Siguiente
      </button>
      
      <h2>
        <i>{sculpture.name} </i> 
        por {sculpture.artist}
      </h2>
      <button onClick={handlePreviousClick}>
        Anterior
      </button>
      <h3>  
        ({index + 1} de {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Ocultar' : 'Mostrar'} detalles
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}