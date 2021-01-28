import React from 'react'
import './style.css'
import Navbar from '../Navbar/index'
import Card from '../UI/Card'
import Logo from '../Logo'

export default function Hero() {
    return (
        <div>
            <Card>
                <Logo />
                <Navbar/>
            </Card>
        </div>
    )
}
