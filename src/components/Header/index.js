import React from 'react'
import './style.css'

export default function Header() {
    return (
        <div className='header'>
            <nav className='header_menu'> 
                <a href='#'>Home</a>
                <a href='#'>about</a>
                <a href='#'>contact</a>
            </nav>
            <div>
                social media link
            </div>
        </div>
    )
}
