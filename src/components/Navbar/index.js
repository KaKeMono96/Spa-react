import React from 'react'
import './index.css';

export default function Navbar({setShowModal}) {
  return (
    <nav className='navbar'>
    <div className='container modal'>
     <h1>Logo</h1>
     <ul>
      <li>Home</li>
      <li>Posts</li>
      <li onClick={()=>setShowModal(true)}>Create Post</li>
     </ul>
    </div>
  </nav>

  )
}
