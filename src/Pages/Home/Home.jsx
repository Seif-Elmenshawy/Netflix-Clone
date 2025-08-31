import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={banner} alt="" className='banner_image' />
        <div className="hero_title">
          <img src={hero_title} alt="" className='title_img' />
          <p>Discovring his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero_btn">
            <button className='btn'><img src={play} alt="" />Play</button>
            <button className='btn dark_btn'><img src={info} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks for You"}category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Home