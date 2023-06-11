import React from 'react'
import {FaCoins} from 'react-icons/fa'
import './Navbar.css'
import {Link} from  'react-router-dom'

export default function Navbar() {
  return (
    <Link to='/'>

        <div className='navbar'>
            <FaCoins className='icon'></FaCoins>
            <h1> Coin <span className='purple'>Search</span></h1>
        </div>
        
    </Link>
  )
}
