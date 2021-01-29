import React, { useState, useEffect } from 'react'
import './style.css'
import Card from '../UI/Card'
import BlogData from '../../data/blog.json'
import {NavLink} from 'react-router-dom'

export default function Sidebar(props) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const posts = BlogData.data
        setPosts(posts)
    }, posts)


    return (
        <div className='sidebarContainer'>
            <Card style={{ marginBottom: '20px', padding: 0, boxSizing: 'border-box' }}>
                <div className='cardHeader'>
                    <span>About us</span>
                </div>
                <div className='profileImageContainer'>
                    <img src='https://picsum.photos/150/200' />
                </div>
                <div clasName="carBody">
                    <p>I have my point</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: 0, boxSizing: 'border-box' }}>
                <div className='cardHeader'>
                    <span>Social Network</span>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: 0, boxSizing: 'border-box' }}>
                <div className='cardHeader'>
                    <span>Recent Posts</span>
                </div>
                <div className="recentPosts">

                    
                    {
                        posts.map(post => {
                            return (
                                <NavLink to={`/post/${post.id}`}>
                                <div className="recentPost">
                                    <h3>{post.Title} </h3>
                                    <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </Card>
        </div>
    )

}
