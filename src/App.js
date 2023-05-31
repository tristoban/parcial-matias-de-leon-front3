import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import './App.css'

const App = () => {
  
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue6, setInputValue6] = useState('');
  const [isValid3, setIsValid3] = useState(false);
  const [isValid6, setIsValid6] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange3 = (e) => {
    const value= e.target.value;
    setInputValue3(value);
    setIsValid3(value.length > 3);
  }

  const handleChange6 = (e) => {
    const value= e.target.value;
    setInputValue6(value);
    setIsValid6(value.length === 6);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormSubmitted(true);
  }

  
  return (
    <div className='App'>
      <h1 className='text'>Carga de estudiantes</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputValue3} onChange={handleChange3}></input>
        <input type='text' value={inputValue6} onChange={handleChange6}></input>
        <button type='submit'>ENVIAR</button>
      </form>
      {formSubmitted && isValid3 && isValid6 && <Card name={inputValue3} color={inputValue6}/>}
      {formSubmitted && (!isValid3 || !isValid6) && (<p className='error-text'>Por favor chequea que la información sea correcta</p>)}
    </div>
  )
}

export default App
