import React, {useState} from 'react'
import NavBar from './NavBar'
import Notify from './Notify'
import Modal from './Modal'
//import Footer from './footer'
//import Dropdown from './Dropdown' 
 

function Layout({children}) {
    
    return (
        <div className="container-fluid">
            <NavBar />

            <Notify />
            <Modal />
            {children}
            
        </div>
    )
}

export default Layout
