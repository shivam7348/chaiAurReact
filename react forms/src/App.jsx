//  COntext API 
// create, provider, consumer
import ChildA from "./ChildA";

import { createContext } from "react";



function App() {
  const data = createContext()
  const name = "Youtube";
  return (
    <>
    <data.Provider value={name}>

    </data.Provider>
    
    </>
  )
}
export default App
export{data};
