import React from 'react'
import Card from '../../components/UI/Card'
import './style.css'
import Sidebar from '../../components/Sidebar'

export default function Home() {
    return (
        <div>
            <Card>
                <div className='gallaryPost' style={{ height: '450px'}}>
                    <sectin style={{ width: '70 %'}}>
                        <img src='https://picsum.photos/400/450'/>
                    </sectin>
                    <section style={{ width: '30 %'}} className='sideImageWrapper'>
                        <div style={{ height: '150px' }}>
                            <img src='https://picsum.photos/200/300' />
                        </div>
                        <div style={{ height: '150px' }}>
                            <img src='https://picsum.photos/200/300' />
                        </div>
                        <div style={{ height: '150px' }}>
                            <img src='https://picsum.photos/200/300' />
                        </div>
                    </section>
                </div>
            </Card>

            <section className='HomeContainer'>
                <div style={{ width: '70%' }}>
                    <Card style={{ marginBottom: '20px' }}>
                        post1
                    </Card>
                    <Card style={{ marginBottom: '20px' }}>
                        post2
                    </Card>
                </div>
                <Sidebar/>
            </section>
        </div>
    )
}
