import { useEffect, useState } from "react"
import videoHero from '../assets/bridgeVideo.mp4'
import posterPic from '../assets/bridge.JPG'


const Hero = () => {
    
    return (

    <div className='hero'>
        <div className='overlay'></div>
        
        <video src={videoHero} autoPlay muted loop poster={posterPic}/>

        <div className='content'>
            <h1>About to</h1>
            <h1>take off!</h1>
        </div>
    </div>

  )
}

export default Hero