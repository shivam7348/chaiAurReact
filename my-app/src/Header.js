import React from 'react'

function Header(props) {
    console.log(props);
    
  return (
    <div>hello {props.name}</div>
  )
}

export default Header