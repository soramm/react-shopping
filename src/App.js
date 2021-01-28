import React from 'react'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './containers/Home'
import Hero from './components/Hero'
import Post from './containers/Post'
import Contact from './containers/Contact'

import './App.css'

function App() {
    return (
        <Router>
        <div className='App'>
            <Header/>
                <Hero />
                <Route path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/post' component={Post}/>
            </div>
        </Router>
    )
}

export default App
