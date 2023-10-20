import React ,  { useState, useEffect } from 'react'
import './WhyWe.scss'
import whyus1 from "../image/whyus/whyus-bg.jpg"
import whyus2 from "../image/whyus/whyus-bg2.jpg"
import whyus3 from "../image/whyus/whyus-bg3.jpg"

import { SlTag } from 'react-icons/sl';
import { IoDiamondOutline } from 'react-icons/io5';
import { GoDeviceMobile } from 'react-icons/go';
import { ImDatabase } from 'react-icons/im';


export default function WhyWe() {

    const imagePaths = [whyus1, whyus2, whyus3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
        }, 3000); 
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);


    useEffect(() => {
        const handleScroll = () => {
        const element = document.querySelector('.why-we');
        if (element) {
            const rect = element.getBoundingClientRect();
            setIsVisible(rect.top < window.innerHeight);
        }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
      
  return (
    <div className='why-we' id='why-us'>
        <h2 className='title'>WHY PEOPLE CHOOSE TRIABLO?</h2>
        <div className='whyus-content'> 

            <div className='whyus-content-left'>
                <div className={`up child ${isVisible ? 'visible' : ''}`}>
                    <div className='content'>
                        <h3>PREORDER SYSTEM</h3>
                        <p>
                        Donec fermentum vulputate nisl non sollicitudin.Vivamus sagittis fermentum dolor, porta adipiscing magna.
                        </p>
                    </div>
                    <SlTag className='icon'/>
                </div>
                <div className={`down child ${isVisible ? 'visible' : ''}`}>
                    <div className='content'>
                        <h3>RETINA READY</h3>
                        <p>
                        Donec fermentum vulputate nisl non sollicitudin.Vivamus sagittis fermentum dolor, porta adipiscing magna.
                        </p>
                    </div>
                    <IoDiamondOutline className='icon'/>
                </div>
            </div>

            <div className='whyus-bg'>
                <img src={imagePaths[currentImageIndex]} alt='whyus' />
                {/* <img className='img1' src={whyus1} alt='a'/>
                <img className='img2' src={whyus2} alt='a'/>
                <img className='img3' src={whyus3} alt='a'/> */}
            </div>

            <div className='whyus-content-right'>
                <div className={`up child ${isVisible ? 'visible' : ''}`}>
                    <GoDeviceMobile className='icon'/>
                    <div className='content'>
                        <h3>PREORDER SYSTEM</h3>
                        <p>
                        Donec fermentum vulputate nisl non sollicitudin.Vivamus sagittis fermentum dolor, porta adipiscing magna.
                        </p>
                    </div>
                </div>
                <div className={`down child ${isVisible ? 'visible' : ''}`}>
                    <ImDatabase className='icon'/>
                    <div className='content'>
                        <h3>PREORDER SYSTEM</h3>
                        <p>
                        Donec fermentum vulputate nisl non sollicitudin.Vivamus sagittis fermentum dolor, porta adipiscing magna.
                        </p>
                    </div>
                   
                </div>
            </div>
        </div> 
    </div>
  )
}
