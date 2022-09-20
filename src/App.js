import React, { useState } from 'react';
import data from './data';
function App() {
  const[count ,setCount] = useState(0);
  const [para, setPara] = useState([]);
  const handleSubmit = (e) =>{
      e.preventDefault();
      let amount = parseInt(count);
      if(count<=0){
        amount=1;
      }else if(count>8){
        amount=8
      }
      setPara(data.slice(0,amount));
  }
  return (
      <section className = "section-center">
        <h3>tired of boring lorem ipsum?</h3>
        <form className='lorem-form' onSubmit = {handleSubmit}>
        <label htmlFor="amount">paragraphs: </label>
        <input type="number" id="amount" value={count} onChange={(e)=>setCount(e.target.value)}/>
        <button type='submit' className='btn'>generate</button>
        </form>
        <article>{para.map((text,index)=>
          {return <p key={index}>{text}</p>})}</article>
      </section>
    )
}

export default App;
