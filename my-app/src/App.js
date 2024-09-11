import React from 'react'

function App( ) {
  var x = 10;

    function updateState() {
      x = 15;
      // console.log(x);
      

    }
    console.log(x);
    

  return (
    <>
     <h1> Learinig State {x}</h1>
     <button onClick={updateState}>Click Me</button>

    </>
  
  )
}

export default App