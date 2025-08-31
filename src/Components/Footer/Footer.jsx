import React from 'react'
import "./Footer.css"
import youtube from '../../assets/youtube_icon.png'
import twitter from '../../assets/twitter_icon.png'
import instagram from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube} alt="" />
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
      </div>
      <ul>
        <li>Audio Describtion</li>
        <li>Help Centers</li>
        <li>Media Center</li>
        <li>Gift Cards</li>
        <li>Investor Relationship</li>
        <li>Jobs</li>
        <li>Term of Use</li>
        <li>Privacy</li>
        <li>Legal notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright'>© 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer