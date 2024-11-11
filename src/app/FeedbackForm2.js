import { useState } from 'react';

export default function FeedbackForm() {
 

  function handleClick() {
    let name=prompt('¿Cuál es tu nombre?');
    
    alert(`Hola, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Saludar
    </button>
  );
}
