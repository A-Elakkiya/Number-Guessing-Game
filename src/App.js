import { useState } from 'react';
import './App.css';

const generatedValue=Math.ceil(Math.random()*10+1);
console.log('Current value', generatedValue);
function App() {
  const[result, setResult]=useState("Guess it !");
  function updateResult(value){
      if(value>10){
        setResult("Invalid input")
      }
      else if(value==generatedValue){
        setResult("You won !!")
      }
      else if(value<generatedValue){
        setResult("Lower value")
      }
      else if(value>generatedValue){
        setResult("Higher value")
      }
  }
  return (
    <div className="App">
      <h2>Guess a number between 1 to 10</h2>
      <input onChange={(event) => { updateResult(event.target.value)} }/>
      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;
