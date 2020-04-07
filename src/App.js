import React,  { useState } from 'react';

function App() {
  const [value, setValue] = useState(1);
  const increase = () => {
    setValue(value + 1);
  }

  const change =(e)=> {
    console.log(e.target.value);
  }
  return (
    <>
      <button onClick={increase}>+ 1</button>
      <input onChange={change} />
    </>
  );
}

export default App;
