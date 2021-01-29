import React from 'react'
import './style.css'
import Card from '../UI/Card'

export default function Sidebar(props) {
    return (
        <div className='sidebarContainer'>
            <Card style={{ marginBottom: '20px',padding:0 ,boxSizing:'border-box'}}>
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
                    <div className="recentPost">
                        <h3>recent post
                        </h3>
                            <span>July 21,2018</span>
                    </div>
                </div>
            </Card>
        </div>
    )

}
