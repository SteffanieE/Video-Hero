import {useEffect, useRef, useState, useMemo} from 'react';
import videoHero from '../assets/bridgeVideo.mp4'
import posterPic from '../assets/bridge.JPG'
//import ReactPlayer from 'react-player'



const Hero = () => {
    
    const viewRef = useRef(null);
    const videoRef = useRef(null);
    const isInViewport = useIsInViewport(viewRef);
    console.log('isInViewport: ', isInViewport);

    useEffect(() => {
        if (isInViewport) {
            videoRef.current.play()
            } else {
            videoRef.current.pause()
            }      
    });

  
    return (

    <div className='hero' ref={viewRef} >
        <video ref={videoRef} className='hero' muted loop poster={posterPic}>
            <source src={videoHero} type='video/mp4' />
        </video>
        <div className='overlay'></div>
        <div className='content'>
            <h1>About to</h1>
            <h1>take off!</h1>
        </div>
    </div>
  )
}

function useIsInViewport(viewRef) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(viewRef.current);
  
      return () => {
        observer.disconnect();

      };
    }, [viewRef, observer]);
  
    return isIntersecting;
  }
  
export default Hero