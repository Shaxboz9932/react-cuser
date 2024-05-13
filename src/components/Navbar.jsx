import './Navbar.css'

import React from 'react'

function Navbar({usersLength}) {
  return (
    <div className='navbar'>
      <div className='navbar-container container'>
        <h1 className='navbar-logo'>CUser</h1>
        <h3 className='navbar-container'>{usersLength > 0 ? 'You have: ' + usersLength : 'Not users :('}</h3>
      </div>
    </div>
  )
}

export default Navbar
