import React from 'react'
import './style.css'
import BlogPost from '../../components/BlogPost'
import Sidebar from '../../components/Sidebar'

export default function Post(props) {

    console.log(props)

    return (
        <section className='container'>
            <BlogPost {...props}/>
           <Sidebar/>
        </section>
    )
}
