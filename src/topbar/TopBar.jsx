import React from 'react'
import './topbar.css'


export default function TopBar() {
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-youtube"></i>
        <i className="topIcon fa-brands fa-twitch"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
            </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='toplistItem'>HOME</li>
                <li className='toplistItem'>ABOUT</li>
                <li className='toplistItem'>CONTACT</li>
                <li className='toplistItem'>POST</li>
                <li className='toplistItem'>LOGOUT</li>
            </ul>
        
        </div>
        <div className='topRight'>
            <img className='topImage' 
            src="assets/hansel.jpg" alt="" />
            <i className="topsearchItem fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}
