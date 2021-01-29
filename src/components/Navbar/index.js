import React, { useState } from 'react'
import {NabLink, NavLink} from 'react-router-dom'
import './style.css'
import Search from '../../assets/img/search.png'

export default function Navbar() {
    const [search,setSearch] = useState(false)
    const openSearch = () => {
        setSearch(true)
    }

    const searchClass = search ? 'searchinput active' : 'searchinput'


    return (
        <>
            <div className='navbar'>
                <ul className='navbar_menu'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to ='#'>About</NavLink></li>
                    <li><NavLink to ='/post'>Posts</NavLink></li>
                    <li><NavLink to ='/contact'>Contact</NavLink></li>
                </ul>
                <div className='search'>
                    <input type='text'
                        placeholder='search for...'
                        className={searchClass} />
                    <img alt='search'
                        src={Search}
                        onClick={openSearch}
                        style={{cursor:'pointer'}}/>
                </div>
            </div>
        </>
    )
}
