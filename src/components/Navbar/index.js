import React,{useState} from 'react'
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
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Posts</a></li>
                    <li><a href='#'>Contact</a></li>
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
