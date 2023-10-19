import React, { useState } from 'react'
import logo from '../image/logo.png'
import './Header.scss'
export default function () {
    const [isOpenMenu, setIsOpenMeny] = useState(false)

   const handleClick = () => {
    setIsOpenMeny(!isOpenMenu);
   }
  return (
    <div className="App-header" id='header'>
        <div className= {`menu-tablet-mobile ${isOpenMenu ? 'active' : ''}`}>
            <ul>
                <li> <a href='#product'>PRODUCTS</a></li>
                <li> <a href='#brand'>BRANDS</a></li>
                <li>WHY TRIABLO</li>
                <li>TEAM</li>
                <li>REVIEWS</li>
                <li>ABOUT US</li>
                <li>NEWS</li>
                <li>CONTACTS</li>
            </ul>
        </div>

        <div className="menu-wrapper">
            
            <div className={`toggle-menu ${isOpenMenu ? 'active' : ''}`} onClick={() => handleClick()}>
                
                <div className='toggle-btn1'></div>
                <div className='toggle-btn2'></div>
                <div className='toggle-btn3'></div>
               
            </div>

            <div className='menu-content'>
                <div className='logo'>
                    <img src={logo} alt="logo"/>

                </div>
                <div className='menu-list'>
                    <ul>
                        <li> <a href='#product'>PRODUCTS</a></li>
                        <li> <a href='#band'>BRANDS</a></li>
                        <li> <a href='#why-us'>WHY TRIABLO</a></li>
                        <li> <a href='#team'>TEAM</a></li>
                        <li> <a href='#review'>REVIEWS</a></li>
                        <li>ABOUT US</li>
                        <li>NEWS</li>
                    
                    </ul>
                    <li className='contact'>CONTACTS</li>

                </div>

            </div>
        </div>

        <div className='header-content'>
            <h2>THE STYLE FOR TODAY</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing. Vel pellentesque consequat.</p>
            <div className='button'>
                CHECK IT
            </div>
        </div>

        <div className='background-header'>
        </div>
        <div className='overlay'>
        </div>
      </div>
  )
}
