import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Loader from './components/Loader'

function Layout(props) {
  return (
    <div>
    {props.loading &&  (<Loader/>)}
        <Header/>
        <div className='content'>
            {props.children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout